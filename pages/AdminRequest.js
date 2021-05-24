import SideButton from "../components/AdminRequest/sideButton"
import RequestHandler from "../components/usersRequest/requestHandler"

const AdminRequest = () => {
    return (
        <>
        <SideButton />
        <div className="admin-request">
             <RequestHandler />
        </div>
        </>
    )
}

export default AdminRequest;