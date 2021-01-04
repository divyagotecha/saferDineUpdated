import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../css/finalorder.css';

export class Finalorder extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="final-order">
                        <div className="mx-auto finalorder-widthsomedesktop">
                            <div className="mx-auto finalorder-widthsome">
                                <h2 className="text-center pt-2 finalorder-myorder">My Order</h2>
                                <div class="py-2 finalorder-border"></div>

                                <div className="row mx-0">
                                    <div className="col-4 pl-0 my-auto">
                                        <img className="finalorder-img" src="images/beverages/americano.jpg"/>
                                    </div>
                                    <div className="col-6 pl-0 pr-0">
                                        <p className="finalorder-productname mb-0">Americano</p>
                                        <p className="finalorder-quantity">&#215;8</p>
                                    </div>
                                    <div className="col-2  pr-0 my-auto">
                                        <p className="finalorder-price float-right">&#8377;80</p>
                                    </div>
                                </div>

                                <div className="row mx-0 pt-3">
                                    <div className="col-4 pl-0 my-auto">
                                        <img className="finalorder-img" src="images/beverages/americano.jpg"/>
                                    </div>
                                    <div className="col-6 pl-0 pr-0">
                                        <p className="finalorder-productname mb-0">Americano</p>
                                        <p className="finalorder-quantity">&#215;8</p>
                                    </div>
                                    <div className="col-2  pr-0 my-auto">
                                        <p className="finalorder-price float-right">&#8377;80</p>
                                    </div>
                                </div>


                                <div className="row mx-0 pt-3">
                                    <div className="col-4 pl-0 my-auto">
                                        <img className="finalorder-img" src="images/beverages/americano.jpg"/>
                                    </div>
                                    <div className="col-6 pl-0 pr-0">
                                        <p className="finalorder-productname mb-0">Americano</p>
                                        <p className="finalorder-quantity">&#215;8</p>
                                    </div>
                                    <div className="col-2  pr-0 my-auto">
                                        <p className="finalorder-price float-right">&#8377;80</p>
                                    </div>
                                </div>
                            </div>
                                <div className="finalorder-addmore">
                                    <p className="mb-0 finalorder-addmorebtn">Still Hungry Add more</p>
                                </div>
                                <div className="finalorder-checkout">
                                    <p className="mb-0 finalorder-checkoutbtn">check out</p>
                                </div>
                        </div>
                    </div>
                </React.Fragment>
                
            </div>
        )
    }
}

export default Finalorder
