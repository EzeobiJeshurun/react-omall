import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FittedImage from 'react-fitted-image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';
import { valueToNode } from '@babel/types';




export default class Product extends Component {
    render() {
        const { id, title, imgname, price, inCart }= this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-sm-6 col-md-3 col-lg-3 my-3">
                <div className="card">
                 <ProductConsumer> 
                     {value=>(
                          <div className="img-container p-4" onClick ={()=> value.handleDetails(id)  }>
                     
                          <Link to= '/Details'>
                           
                              <img src= {imgname} alt="product" className="card-img-top img-fluid align-self-center" />
                         </Link>
                          
                         
                          <button className="cart-btn" disabled ={inCart? true: false} onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id)
                              }}>
                             {inCart?(<p className= "text-capitalize mb-0" disabled>
                                 {" "} In Cart
                             </p>): (< FontAwesomeIcon icon="cart-plus" />)}
                          </button>
                     </div>
     
                     )}  
                
                </ProductConsumer>
                {/**card footer */}
                <PriceAndTitleWrapper className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <PriceAndTitleWrapper className="text-blue font-italic mb-0"><span className="ml-auto">$
                        </span>{price}</PriceAndTitleWrapper>
                </PriceAndTitleWrapper>   
                </div>
            </ProductWrapper>
        )
    }
}
Product.propTypes = {

    product: PropTypes.shape({
        id: PropTypes.number,
        imgname: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired

}
const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    transition: all 0.8s linear;
    height: 11rem !important;
}
.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.8s linear;    
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.3);
        box-shadow: 5px 5px 10px 0 rgba(0,0,0, 0.3);
    }
    .card-footer{
        background: rgba(237,237,237);
    }
    .cart-btn{
        transform: translate(0%,0%);
    }
    .card-img-top {
        transform: scale(1.2);
    }
}
.img-container {
   
    position:relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
    margin-bottom: auto !important;
    height: 100%;
    align-items: center;
    padding: 2rem !important;
}
.card-img-top {
    transition: all 0.6s linear;
}
.cart-btn:focus {
    outline: none;
}

.cart-btn: hover{
    color: var(--mainBlue);
    cusor: pointer;
}



.cart-btn {
    width: auto;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border:none;
    color: var(--mainWhite);
    font-size: 1.1rem;
    border-radius: 0.7rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 0.7s linear;
}


`

const PriceAndTitleWrapper = styled.div`
font-size: 0.7rem
font-weight: bold;
`



