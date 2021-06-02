import {useRouter} from 'next/router';
import {Back} from "../svg";

const AdminHeader = () => {
 

  const router = useRouter();
  let headerName = router.pathname.replace('/', '');

    return (
            <div className="dynamic-header">
                 <div onClick={()=> router.back()} className="back">{Back()}</div>
                <div className="dynamic-name">{headerName}</div> 
                <div className="dynamic-login"> login</div> 
            </div>
        
    )
    }
    
    export default AdminHeader;