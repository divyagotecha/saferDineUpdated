import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../css/Finalorderdeatil.css';

export class FinalOrderDetail extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="finalorderdetail">
                        <div className="mx-auto finalorderdetail-widthsome">
                            <h2 className="text-center pt-2 finalorderdetail-heading">My Order</h2>
                                <div class="py-2 finalorderdetail-border"></div>
                                <div className="row">
                                    <div className="col-3 pb-3">
                                        <img className="finalorderdetail-img" src="images/beverages/americano.jpg"/>
                                    </div>

                                    <div className="col-7">
                                        <p className="finalorderdeatil-productname">Americano</p>
                                        
                                    </div>

                                    <div className="col-2">
                                        <p className="finalorderdeatil-price float-right">&#8377;80</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-3">
                                        <img className="finalorderdetail-img" src="images/beverages/americano.jpg"/>
                                    </div>

                                    <div className="col-7">
                                        <p className="finalorderdeatil-productname">Americano</p>
                                        
                                    </div>

                                    <div className="col-2">
                                        <p className="finalorderdeatil-price float-right">&#8377;80</p>
                                    </div>
                                </div>

                        </div>

                    </div>

                </React.Fragment>
            </div>
        )
    }
}

export default FinalOrderDetail
