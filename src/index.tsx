import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

Amplify.configure({

  Auth:{
    Cognito:{
      userPoolId:"us-east-1_pKyaOSFo3",
      userPoolClientId:"l2c3kusp1011fv6hb1avqui8p",
    }
  }
})


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
