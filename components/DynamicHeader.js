import {useRouter} from 'next/router';
import {Back} from "../svg";

const DynamicHeader = () => {
 

  const router = useRouter();
  let headerName = router.pathname.replace('/', '');

    return (
            <div className="dynamic-header">
                 <div onClick={()=> router.replace('dashboard')} className="back">{Back()}</div>
                <div className="dynamic-name">{headerName}</div> 
                <div className="dynamic-login"> login</div> 
            </div>
        
    )
    }
    
    export default DynamicHeader;