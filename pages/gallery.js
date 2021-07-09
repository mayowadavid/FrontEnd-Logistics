import SideButton from "../components/AdminRequest/sideButton";
import BottomButton from "../components/AdminRequest/BottomButton";
import AdminHeader from "../components/AdminHeader";
import { useContext } from "react";
import { RequestContext } from "../components/context/RequestContext";
import { v4 as uuidv4} from 'uuid';
const Gallery = () => {

    const{galleryImage} = useContext(RequestContext);

    return (
        <>
        <AdminHeader />
        <SideButton />
        <BottomButton />
            <div className="gallery">
                <div className="create-contact">
                    <div className="add-button">
                            <div><p>Upload Media</p></div>
                            <div><input type="text" id="search" name="search" placeholder="search..."/></div>                 
                    </div>
                </div>
                <div className="all-contact" >
                            <div className="contact-head"> 
                                    <div>
                                        <select>
                                            <option>Bulk Actions</option>
                                            <option>Edit</option>
                                            <option>Trash</option>
                                        </select>
                                        <input type="submit" value="Apply" />
                                    </div>
                                    <div>
                                        <select>
                                            <option>All dates</option>
                                            <option>Date1</option>
                                            <option>Date2</option>
                                        </select>
                                        <select>
                                            <option>All dates</option>
                                            <option>Date1</option>
                                            <option>Date2</option>
                                        </select>
                                        <input type="submit" value="Filter" />
                                    </div>
                            </div>
                    </div>
                    <div className="gallery-container">
                        {galleryImage.map(image=>  <div key={uuidv4()} className="gallery-clip"><img src={image}/></div>)}
                           
                    </div>
            </div>
        </>
    )
}  
export default Gallery;