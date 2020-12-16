import React from 'react';
import { BrowserRouter as Router,Route}  from 'react-router-dom';
import { MDBIcon, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBRow, MDBBtn } from 'mdbreact';
 
// import jwt_decoder from 'jwt-decode';
import './App.css';



// import setAuthToken from './utils/setAuthToken';
// import {setCurrentCustomer } from './actions/authActions';
// import  store  from './store';
import FinalQr from'./components/FinalQr';
import SafeForm from'./components/SafeForm';
import OTPverify from'./components/OTPverify';
import Finalnavbar from'./components/Finalnavbar';
import Finalcategory from'./components/Finalcategory';
import FinalProductsLists from'./components/FinalProductsLists';
import SingleProductDescription from'./components/SingleProductDescription';

function App() {
  return (
    
    <Router>
    <Route exact path="/finalqr" component ={FinalQr}/>
    <Route exact path="/safeform" component ={SafeForm}/>
    <Route exact path="/otpverify" component ={OTPverify}/>
    <Route exact path="/finalnav" component ={Finalnavbar}/>
    <Route exact path="/finalcat" component ={Finalcategory}/>
    <Route exact path="/finalProductsLists" component ={FinalProductsLists}/>
    <Route exact path="/singleproductdesc" component ={SingleProductDescription}/>
    </Router>

  );
}

export default App;
