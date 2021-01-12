import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../css/finalproductlist.css';

export class FinalProductsLists extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="productlist-category">
                        <div className="mx-auto productlist-widthsome">
                            <form className="py-3">
                                <input className="mx-auto form-control search" type="search" placeholder="Search for a food item" aria-label="Search" /> 
                            </form>

                            <h5 className="text-center mb-0 mx-auto productlist-head"><span><img className="prductlist-icon" src={"images/flaticon/beverage2.png"}/></span>Beverages</h5>
                            <div className="py-2 catlist-bor"></div>

                            <div className="row">
                                <div className="col-6 col-md-3  productlist-spacebox">
                                    <div className="card productlist-card">
                                    <img className="pureveg-icon" src={"images/pureveg.png"}/>
                                    <img className="card-img-top catlistcard-img" src="images/beverages/americano.jpg"/>
                                    <div className="card-body productlistcard-body">
                                    <h5 className="card-title productlist-name">americano</h5>
                                        <p className="card-text productlist-price">&#8377;80
                                        <span class="productlist-btn text-center pt-2">
				                            <button class="productlist-add">ADD</button></span></p>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3  productlist-spacebox1">
                                    <div className="card productlist-card">
                                    <img className="pureveg-icon" src={"images/pureveg.png"}/>
                                    <img className="card-img-top catlistcard-img" src="images/beverages/hot-coffee.jpg"/>
                                    <div className="card-body  productlistcard-body">
                                        <h5 className="card-title productlist-name">hot coffee</h5>
                                        <p className="card-text productlist-price">&#8377;80  <span class="productlist-btn text-center pt-2">
				                            <button class="productlist-add">ADD</button></span></p>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 pb-3 productlist-spacebox">
                                    <div className="card productlist-card">
                                    <img className="pureveg-icon" src={"images/pureveg.png"}/>
                                    <img className="card-img-top catlistcard-img" src="images/beverages/c3.jpg"/>
                                    <div className="card-body  productlistcard-body">
                                    <h5 className="card-title productlist-name">cold coffee</h5>
                                        <p className="card-text productlist-price">&#8377;80
                                        <span class="productlist-btn text-center pt-2">
				                            <button class="productlist-add">ADD</button></span></p>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-6 col-md-3 pb-3 productlist-spacebox1">
                                    <div className="card productlist-card">
                                    <img className="pureveg-icon" src={"images/pureveg.png"}/>
                                    <img className="card-img-top catlistcard-img" src="images/beverages/Chocolate-shake.jpg"/>
                                    <div className="card-body  productlistcard-body">
                                        <h5 className="card-title productlist-name">Chocolate shake</h5>
                                        <p className="card-text productlist-price">&#8377;80  <span class="productlist-btn text-center pt-2">
				                            <button class="productlist-add">ADD</button></span></p>
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
