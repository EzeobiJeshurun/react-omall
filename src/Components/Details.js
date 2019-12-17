import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {id,title,imgname,price,company,info,inCart} = 
                    value.detailProduct;

                    return (
                        <div className="container py-3">
                            {/*Title */}
                            <div className="row">
                             <div className="col-10 mx-auto text-center text-slanted text-blue my-2">
                                 <h4>{title}</h4>
                             </div>   

                            </div>
                            {/*EndTitle */}
                            {/*Product info */}
                            <div className="row">
                            <div className="col-10 mx-auto col-sm-6 my-4">
                            <img src={imgname} alt="product" className="img-fluid" />
                            </div>
                            {/*product text */}
                            <div className="col-10 mx-auto col-sm-6 my-4 text-capitalize">
                            <h5>model: {title}</h5>
                            <h6 className="text-title text-muted text-uppercase mb-1 mt-2">
                            made by: <span className="text-uppercase">{company}</span>
                            </h6>
                            <h6 className="text-blue"> <strong>
                                price: <span>$</span>{price}
                                </strong></h6>
                             <p className="text-capitalized font-weight-bold mt-2 mb-0">
                                 some info about product:
                            </p>
                            <p className="text-muted lead">
                                {info}
                            </p>
                            <div>
                                {/*Button */}
                                <Link to= '/'>
                                    <ButtonContainer>
                                        back to products
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer
                                cart
                                disabled= {inCart? true : false}
                                onClick={()=>{
                                    value.addToCart(id);
                                    value.openModal(id)
                                }}
                                >
                                    {inCart? "inCart" : "add to Cart"}
                                </ButtonContainer>
                            </div>       
                            </div>
                            </div>
                        </div>
                    )

                }}

            </ProductConsumer>
        )
    }
}
