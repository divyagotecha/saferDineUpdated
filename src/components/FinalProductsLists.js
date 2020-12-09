import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../css/finalcatlist.css';

export class FinalProductsLists extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="final-category">
                        <div className="mx-auto catlist-widthsome">
                            <form className="py-3">
                                <input className="mx-auto form-control search" type="search" placeholder="Search for a food item" aria-label="Search" /> 
                            </form>

                            <h5 className="text-center mx-auto catlist-head">Beverages</h5>
                            <div className="py-2 catlist-bor"></div>

                            <div className="row mx-0">
                                <div className="col-6 col-md-3 pb-3 catlist-spacebox">
                                    <div className="card catlist-card">
                                    <img className="card-img-top catlistcard-img" src="images/beverages/cappuccino.jpg"/>
                                    <div className="card-body catlistcard-body">
                                    <h5 className="card-title catlist-name">cappuccino</h5>
                                        <p className="card-text cat-price">&#8377;80 </p>
                                        <span className="cart-backg flex-right"><i className="fas fa-cart-plus mr-auto"></i></span>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 pb-3 catlist-spacebox">
                                    <div className="card catlist-card">
                                    <img className="card-img-top catlistcard-img" src="images/beverages/cappuccino.jpg"/>
                                    <div className="card-body catlistcard-body">
                                        <h5 className="card-title catlist-name">cappuccino</h5>
                                        <p className="card-text cat-price">&#8377;80</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        
                        
                        
                        
                        
                        </div>
                        
                    </div>

                </React.Fragment>
                
            </div>
        )
    }
}

export default FinalProductsLists
