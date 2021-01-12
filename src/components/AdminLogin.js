import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../css/adminlogin.css';

export class AdminLogin extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <React.Fragment>
                <div className="adminlogin-form">
                    <div className="card adminlogintop-img">
                        <img className="card-img adminlogin-img" src="images/veg1.jpeg"/>
                    </div>
                    <div className="adminloginsafe-logo d-flex justify-content-center align-items-center">
                        <div>
                        <p className="adminloginlogo-name">SaferDine</p>
                        </div>
                    </div>

                    <div className="adminlogin-box d-flex justify-content-center align-items-center">
                        <div>
                        <div className="adminlogin-box2  d-flex justify-content-center align-items-center">
                            <div>
                            <h3 className="text-center adminlogin-heading">Admin Login</h3>
                            <form method="POST">
                            <div className="adminlogintext-field">
				                <input type="number" required />
				                <span></span>
				                <label>Mobile Number</label>
			                </div>

                            <div className="adminlogintext-field">
				                <input type="password" required />
				                <span></span>
				                <label>Password</label>
			                </div>
				            
                            <div className="text-center">
                            <div className="btnadminlogin button-adminloginsubmit">Login</div>

		                    </div>
				                    
                            </form>
                            </div>
                        
                        </div>
                        
                        </div>
                    

                    </div>

                    <div className="adminlogin-rel">
				        <img className="adminloginlast-img" src={"images/pan.png"}/>
                    </div>

                    </div>
                </React.Fragment>
            </div>
        )
    }
}

export default AdminLogin
