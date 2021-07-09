import React, { createContext, useEffect, useState } from 'react';
import { gallery, message, offBack, contact } from "../../svg";
import { requestValidate } from '../validator/validate';
import { useRouter } from 'next/router';
import { auth, store, database, timestamp } from '../firebase';

export const RequestContext = createContext();

const RequestContextProvider = (props) => {

    const initialState = {
        cartons: "",
        deliveryLocations: "",
        descriptions: "",
        itemsWorth: "",
        receiverFirstName: '',
        receiverPhoneNumber1: '',
        receiverPhoneNumber2: '',
        requestImages: [],
        senderFirstName: '',
        senderPhoneNumber1: '',
        senderPhoneNumber2: '',
        tagName: "",
        otherItems: false,
        formErrors: {
            senderFirstName: '',
            senderPhoneNumber1: '',
            senderPhoneNumber2: '',
            receiverFirstName: '',
            receiverPhoneNumber1: '',
            receiverPhoneNumber2: '',
            cartons: '',
            createdAt: '',
            deliveryLocations: '',
            descriptions: '',
            itemsWorth: '',
            otherItems: true,
            status: '',
            tagName: '',
            amount: ''
        }
    };

    const [input, setInput] = useState(initialState);
    const [contacts, setContacts] = useState([]);
    const [extractedRequest, setExtractedRequest] = useState();
    const [sessionToken, setSessionToken] = useState();
    const [isLogin, setisLogin] = useState(false);
    const [temporaryImage, setTemporaryImage] = useState([]);
    const [requestImages, setRequestImages] = useState([]);
    const [count, setCount] = useState();
    const [form, setForm] = useState();
    const [requestSuccess, setRequestSuccess] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState('');
    const [transaction, setTransaction] = useState([]);
    const [transactionInst, setTransactionInst] = useState();
    const [galleryImage, setGalleryImage]= useState([]);
    
    const router = useRouter();


    useEffect(() => {
        
        auth.onAuthStateChanged(user => {
            const data = [];
            user !== null && database.collection('Requests')
                .where('userId', '==', user.uid)
                .get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        let { tagName, createdAt, status, amount } = doc.data();
                        let id = doc.id;
                        data.push({ tagName, createdAt, status, amount, id })
                    });
                });
            setTransaction(data);
        })
    }, []);

    useEffect(() => {
        transactionInst !== undefined && (setTransaction([...transaction, transactionInst]));
    }, [transactionInst])

    const handleChange = (e) => {
        if (e) {
            e.preventDefault();
            const { name, value, id } = e.target;
            const { formErrors } = {...input };
            requestValidate(id, value, formErrors);
            const newInput = {...input, [name]: value };
            return setInput(newInput);
        }
    };
    const handleCheck = (e) => {
        const { name, checked } = e.target;
        const newInput = {...input, [name]: checked };
        return setInput(newInput);
    }
    useEffect(() => {
        progress == 100 && setLoading(false);
        setProgress(0);
    }, [progress])

    useEffect(() => {
        router.prefetch('/transaction')
    }, [])

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            user !== null && setUserId(user.uid)
        })
    }, [])

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            user !== null && (store.ref().child('/requestImages').listAll().then(function(result){
                result.items.forEach(function(imageRef){
                   getImageUrl( imageRef)
                })
            }))
        })
        let img = [];
         const getImageUrl = ( images) => {
        images.getDownloadURL().then((url)=>{
            img.push(url);
        })
    }
    setGalleryImage(img);
    }, [])

    const photoChange = (e) => {
        e.preventDefault();

        if (e.target.files) {
            progress !== 100 && setLoading(true)
            let selected = e.target.files[0];
            let types = ['image/jpeg', 'image/png'];
            let fileType = selected !== undefined ? types.includes(selected.type) : setError("unsupported image type* accepted image jpg/png");
            let FileSize = "5000000";
            let filteredImageSize = fileType == true ? selected.size < FileSize : setError("file too large *5mb minimum");
            let perfectSize = filteredImageSize == true && (URL.createObjectURL(selected));
            let restructureUrl = { imageSource: perfectSize }
            perfectSize !== undefined && setTemporaryImage([...temporaryImage, restructureUrl]);
            if (filteredImageSize == true) {
                const storageRef = store.ref(`requestImages/${selected.name}`);
                storageRef.put(selected).on('state_changed',
                    async(snap) => {
                        const newPercentage = await (snap.bytesTransferred / snap.totalBytes) * 100;
                        await setProgress(newPercentage);
                    }, async(err) => {
                        await setError(err);
                    }, async() => {
                        const cloudUrl = await storageRef.getDownloadURL();
                        setRequestImages([...requestImages, { cloudUrl }]);
                    });
            }
            URL.revokeObjectURL(selected);
        }
    };


    const handleFormSubmit = async(e) => {
        e.preventDefault();
        const {
            cartons,
            deliveryLocations,
            descriptions,
            itemsWorth,
            receiverFirstName,
            receiverPhoneNumber1,
            receiverPhoneNumber2,
            requestImages,
            senderFirstName,
            senderPhoneNumber1,
            senderPhoneNumber2,
            tagName,
            otherItems
        } = input;

        setTransactionInst({ tagName, status: "pending", amount: "", id: "hkaj$5%^gxn*8nk" });
        userId !== null && database.collection('Requests').add({
                userId,
                cartons,
                deliveryLocations,
                descriptions,
                itemsWorth,
                receiverFirstName,
                receiverPhoneNumber1,
                receiverPhoneNumber2,
                requestImages,
                senderFirstName,
                senderPhoneNumber1,
                senderPhoneNumber2,
                tagName,
                otherItems,
                status: "pending",
                createdAt: timestamp()
            })
            .then((data) => {
                data && (setRequestSuccess(true),
                    setInput(initialState)
                );
            })
            .catch(
                (error) => {
                    setError(error)
                }
            )
    };


    const handleRequestUpdate = async(e, id) => {
        e.preventDefault();
        setInput(...input, requestImages)
    }

    const handleFormPreview = (e) => {
        e.preventDefault();
        setInput({...input, requestImages });
        setCount("active");
    }


    const selector = [
        { content: "contact", icon: contact(), title: "Contact", id: 1 },
        { content: "gallery", icon: gallery(), title: "Gallery", id: 2 },
        { content: "ShippingRequest", icon: offBack(), title: "Request", id: 3 },
        { content: "", icon: message(), title: "Message", id: 4 }
    ]


    return ( 
        <RequestContext.Provider value = {{galleryImage, transaction, setTransaction, transactionInst, input, error, loading, setRequestImages, requestImages, requestSuccess, setRequestSuccess, initialState, setCount, count, setInput, handleChange, handleCheck, temporaryImage, handleFormSubmit, handleFormPreview, photoChange, selector, setExtractedRequest, extractedRequest, contacts, setContacts, handleRequestUpdate, sessionToken, isLogin, setisLogin } } > 
            { props.children } 
        </RequestContext.Provider>
    )
}

export default RequestContextProvider;