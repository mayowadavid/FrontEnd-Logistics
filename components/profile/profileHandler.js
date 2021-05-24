import React, {useContext} from 'react';
import { ClientContext } from '../context/ClientContext';
import ProfileEdit from './profileEdit';
import ProfilePreview from './profilePreview';



const ProfileHandler = () => {

    
    const {count} = useContext(ClientContext);


    return (
        <>
                {
                count == undefined ?
                    <ProfileEdit />
                     :
                     <ProfilePreview /> 
                } 
        </>)
        }
    
export default ProfileHandler;