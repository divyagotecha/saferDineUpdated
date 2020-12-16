import React, { Component } from 'react'
import PropTypes from 'prop-types'
import'../css/singleproductdesc.css';

export class SingleProductDescription extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <React.Fragment>
                    <div className="singleproduct">
                    <div className="mx-auto singleproductwidthwin">
                        <div className="singleproductimage"><img  className="singleproductimg" src="images/beverages/americano.jpg"/></div>
                        <div className="mx-auto singleproductwidth">
                        <h5 className="mb-0 pt-3 pb-4 singleproduct-name">americano <span className="mx-auto singleproduct-vegnonvegimg"><img class="singleproduct-vegnonveg ml-1" src="images/pureveg2.png"/></span>  <span className="float-right singleproduct-price">&#x20B9;80</span> </h5>
                       

                        <div className="row mx-0">
                            <div className="col-3 pl-0 pr-0">
                            <p className="mb-0 pb-4 singleproduct-staricon"> <i className="fas fa-star singleproduct-star"></i> 4.5</p>
                            </div>

                            <div className="col-5  pl-0 pr-0">
                            <p className="mb-0 pb-4 singleproduct-clock"><i className="far fa-clock singleproductdetail-clock"></i>15 - 20 min</p>
                            </div>

                            <div className="col-4  pl-0 pr-0">
                            <p className="mb-0 pb-4  singleproduct-fire"> <i class="fas fa-fire singleproduct-calories"></i> No calories</p>
                            </div>
                        </div>

                            <h4 className="mb-0 pb-1  singleproduct-details">Details:</h4>
                            <p className="mx-auto mb-0 pb-4 singleproduct-descpdetails">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
                            </p>
                          
                                <h4 className="pb-2 mb-0 singleproduct-detailsincer">Ingredients</h4>
                                
                                <div className="singleproduct-swipe pb-3">
                                    <img className="singleproductswipe-img mr-2" src="images/ingredients/tomato.png" />
                                    <img className="singleproductswipe-img mr-2" src="images/ingredients/tomato.png" />
                                    <img className="singleproductswipe-img mr-2" src="images/ingredients/tomato.png" />
                                    <img className="singleproductswipe-img mr-2" src="images/ingredients/tomato.png" />
                                    <img className="singleproductswipe-img mr-2" src="images/ingredients/tomato.png" />
                                    <img className="singleproductswipe-img mr-2" src="images/ingredients/tomato.png" />
                                </div>

                                

                              
                           
                        </div>
                        <footer className="singleproducts-footer">
                            <div className="singleproducts-cart">
                                <button className="singleproductscart-btn">
                                       Add to cart
                                </button>
                            </div>
                                    
                                </footer>
                                </div>
                    </div>
                </React.Fragment>
                
            </div>
        )
    }
}

export default SingleProductDescription
