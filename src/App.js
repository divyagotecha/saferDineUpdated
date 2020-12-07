import React from 'react';
import { BrowserRouter as Router,Route}  from 'react-router-dom'; 
// import jwt_decoder from 'jwt-decode';
import './App.css';

// import setAuthToken from './utils/setAuthToken';
// import {setCurrentCustomer } from './actions/authActions';
// import  store  from './store';
import FinalQr from'./components/FinalQr';
import SafeForm from'./components/SafeForm';
import OTPverify from'./components/OTPverify';
import Finalnavbar from'./components/Finalnavbar';

function App() {
  return (
    
    <Router>
    <Route exact path="/finalqr" component ={FinalQr}/>
    <Route exact path="/safeform" component ={SafeForm}/>
    <Route exact path="/otpverify" component ={OTPverify}/>
    <Route exact path="/finalnav" component ={Finalnavbar}/>
    </Router>

  );
}

export default App;
