import { useContext } from 'react';
import { ClientContext } from '../context/ClientContext';
import {avatar, Back} from "../../svg";
import {useRouter} from 'next/router';

const ProfilePreview = () => {
    const {profile, temporaryImage, handleProfileSubmit} = useContext(ClientContext);
    const router = useRouter();
     return (
        <div  className="user-profile">
            <div onClick={()=> router.replace('dashboard')} className="back">
                    {Back()}
            </div>
                <div className="profile-avatar">
                    <div><img src={temporaryImage} />  </div>
                </div>   
                <div>
                    <p>{profile.firstName} </p>
                    <p>{profile.lastName}</p>
                    <p>{profile.email}</p>
                    <p>{profile.phoneNumber}</p>       
                    <p>{profile.address}</p>
                    <div className="submit" >
                    { profile._id ? (
                    <div className="submit">
                        <input type="submit" onClick={(e) =>handleProfileSubmit(e)} value="update"/>
                    </div>): (<div className="submit">
                        <input type="submit" value="edit"/>
                    </div>) }
                    </div>   
                </div> 
        </div> )
}

export default ProfilePreview;
