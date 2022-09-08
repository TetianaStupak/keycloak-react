
import { useKeycloak } from '@react-keycloak/web';


export default  function Login(){
    const { keycloak, initialized } = useKeycloak();
    return (
        <div>
            <h1>Login</h1>
            <p>You need to login to access this page</p>
            <div className="hidden xl:flex items-center space-x-5">
               <div className="hover:text-gray-200">
                 {!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                 )}

                 {!!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.logout()}
                   >
                     Logout
                   </button>
                 )}
               </div>
        </div>
        </div>
    )
}
