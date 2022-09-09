// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker'

import { Suspense } from "react";



import { createRoot } from "react-dom/client";
import KcApp, { defaultKcProps, getKcContext } from "keycloakify";

//We assume the file contains: ".my-class { color: red; }"
import "./index.css";

const { kcContext } = getKcContext({
  "mockPageId": "login.ftl"
});

if( kcContext === undefined ){
    throw new Error(
        "This app is a Keycloak theme" +
        "It isn't meant to be deployed outside of Keycloak"
    );
}

createRoot(document.getElementById("root")!).render(
  <Suspense>
       {
           kcContext === undefined ?
               <App /> :
    <KcApp
        kcContext={kcContext}
        {...{
            ...defaultKcProps,
            kcHeaderWrapperClass: "my-class",
        }}
    />
  }
  </Suspense>
  
);

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// serviceWorker.unregister()
