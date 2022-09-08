import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from "./keycloak";
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import PrivateRoute from './component/PrivateRoute';
import Login from './pages/Login';
import SecuredPage from './pages/SecuredPage';
import WelcomePage from './pages/WelcomePage';


const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens)
}

export default function App() {

  return (
    <div className="App">
    <ReactKeycloakProvider 
    initOptions={{ 
      onLoad: 'login-required',
// checkLoginIframe: false,
// enableLogging: true
    }}
    authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
      
    >
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<WelcomePage />} />
           <Route path="/login" element={<Login />} />
           <Route element={<PrivateRoute/>}>
              <Route path='/secured' element={<SecuredPage/>} />
          </Route>
         </Routes>
         </BrowserRouter>
         </ReactKeycloakProvider>
         </div>
  )
};

