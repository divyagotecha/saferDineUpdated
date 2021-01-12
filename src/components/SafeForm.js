import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../css/safeform.css';

export class SafeForm extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="final-form">
                    <div className="card top-img">
                        <img className="card-img safeform-img" src="images/veg1.jpeg"/>
                    </div>
                    <div className="safe-logo d-flex justify-content-center align-items-center">
                        <div>
                        <p className="formlogo-name">SaferDine</p>
                        </div>
                    </div>

                    <div className="safeform-box d-flex justify-content-center align-items-center">
                        <div>
                        <div className="safe-box  d-flex justify-content-center align-items-center">
                            <div>
                            <h3 className="text-center cform-head">Fill Details</h3>
                            <form method="POST">
                            <div className="text-field">
				                <input type="text" required />
				                <span></span>
				                <label>Username</label>
			                </div>

                            <div className="text-field">
				                <input type="number" required />
				                <span></span>
				                <label>Mobile Number</label>
			                </div>
				            
                            <div className="text-center">
                            <div className="btnotp button-o">Send otp</div>

		                    </div>
				                    
                            </form>
                            </div>
                        
                        </div>
                        
                        </div>
                    

                    </div>

                    <div className="fianlform-rel">
				        <img className="finalformlast-img" src={"images/pan.png"}/>
                    </div>

                    </div>
                </React.Fragment>
                
            </div>
        )
    }
}

export default SafeForm
