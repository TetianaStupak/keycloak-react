import { useKeycloak } from '@react-keycloak/web';
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
 const { keycloak } = useKeycloak();

return (
    keycloak.authenticated ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default PrivateRoutes;