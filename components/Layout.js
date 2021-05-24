 import RequestContextProvider from './context/RequestContext';
 import AuthContextProvider from './context/AuthContext';
import Header from './Header';
import ClientContextProvider from './context/ClientContext';
const Layout = (props) => {
    return (
            
                <AuthContextProvider>
                <RequestContextProvider>
                <ClientContextProvider>
                        <Header />
                        {props.children}
                </ClientContextProvider>
                </RequestContextProvider>
                </AuthContextProvider>
            )
    }
    
    export default Layout;