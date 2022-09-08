import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {

 return (
   <div>
     <h1>Welcome to the Keycloak</h1>
     <Link to="/secured">KeycloakAuth</Link>

   </div>
 );
};

export default WelcomePage;