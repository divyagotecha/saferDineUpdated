import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../css/finalqr.css';

export class FinalQr extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <React.Fragment>
                <div className="container-fluid pl-0 pr-0 scan-main">
					
		                <div className="d-flex justify-content-center align-items-center text-center scan-height">
							
		                    <div className="scan-box d-flex justify-content-center align-items-center">
			                    <div>
								{/* <h1 className="formlqr-name">SaferDine</h1> */}
			                        <h2 className="pb-3 scan-menu">Contactless Menu</h2>
			                       
			                        <div className="text-center mx-auto scan-code "> 
			                    </div>
								<p className="mx-auto mb-0 pt-3 pb-1 scan-me">Scan Me</p>
								<p className="mx-auto scan-text mb-0">By your mobile camera or Google LENS</p>
                                <p className="mx-auto scan-text mb-0">OR</p>
                                <p className="mx-auto scan-text">Go to saferdine.com</p>
		                    </div>
		                </div>
						
		            </div>
					<div className="fianlqr-rel">
				
					<img className="finalqr-img" src={"images/main1.png"}/>
					
				</div>
	        </div>


                </React.Fragment>
            </div>
        )
    }
}

export default FinalQr
