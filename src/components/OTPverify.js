import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../css/otpverify.css';

export class OTPverify extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <React.Fragment>
                <div className="otp-form">
                <div className="card otp-img">
                        <img className="card-img otpform-img" src="images/veg1.jpeg"/>
                </div>
                <div className="otp-logo d-flex justify-content-center align-items-center">
                        <div>
                            <p className="otplogo-name">SaferDine</p>
                        </div>
                </div>

                <div className="otpform-box d-flex justify-content-center align-items-center">
                    <div>
                    <div className="otp-box  d-flex justify-content-center align-items-center">
                        <div>
                            <h3 className="text-center pb-1 otpform-head">Enter OTP</h3>
                            <p className="otp-text mb-0">Enter the 4 digit code sent to your mobile number</p>
                                <form method="POST">
                                <div className="otp-flex">
                                    <input className="otSc" type="number" maxLength="1"/>
                                    <input className="otSc" type="number" maxlength="1"/>
                                    <input className="otSc" type="number" maxlength="1"/>
                                    <input className="otSc" type="number" maxlength="1"/>
                                </div>
                                <p className="notget-code">Didn't received the code? <span className="resend">Resend</span></p>
                                
                                <div className="text-center">
                                    <div className="btnotpv button-o1">verify</div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="fianlotp-rel">
				        <img className="finalotp-img" src={"images/pan.png"}/>
                    </div>
                
                </div>

                </React.Fragment>
                
            </div>
        )
    }
}

export default OTPverify
