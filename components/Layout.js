 import RequestContextProvider from './context/RequestContext';
 import AuthContextProvider from './context/AuthContext';
import Header from './Header';
import ClientContextProvider from './context/ClientContext';
import HeaderBar from './HeaderBar';
import firebase from 'firebase/app';
const Layout = (props) => {

return (
        <>
        { (firebase.apps.length === 1) && 
        <RequestContextProvider>
        <AuthContextProvider>
        <ClientContextProvider>
                <Header />
                <HeaderBar />
                {props.children}
        </ClientContextProvider>
        </AuthContextProvider>
        </RequestContextProvider>
        }
        </>
        )
}
export default Layout;