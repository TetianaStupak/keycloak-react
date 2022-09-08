import Keycloak from 'keycloak-js'
const keycloakConfig = {
  url: 'http://localhost:8080', 
  realm: 'Demo', 
  clientId: 'react-app',
  "ssl-required": "external",
   "resource": "pim_test",
   "public-client": true,
   "confidential-port": 0
  }  

const keycloak = new Keycloak(keycloakConfig);
export default keycloak