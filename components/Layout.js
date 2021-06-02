 import RequestContextProvider from './context/RequestContext';
 import AuthContextProvider from './context/AuthContext';
import Header from './Header';
import ClientContextProvider from './context/ClientContext';
import HeaderBar from './HeaderBar';
const Layout = (props) => {
    return (
            
                <AuthContextProvider>
                <RequestContextProvider>
                <ClientContextProvider>
                        <Header />
                        <HeaderBar />
                        {props.children}
                </ClientContextProvider>
                </RequestContextProvider>
                </AuthContextProvider>
            )
    }
    
    export default Layout;