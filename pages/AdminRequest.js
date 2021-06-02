import AdminHeader from "../components/AdminHeader";
import SideButton from "../components/AdminRequest/sideButton"
import RequestHandler from "../components/usersRequest/requestHandler"

const AdminRequest = () => {
    return (
        <>
        <AdminHeader />
        <SideButton />
        <div className="admin-request">
             <RequestHandler />
        </div>
        </>
    )
}

export default AdminRequest;