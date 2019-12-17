import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {
    const {cartSubTotal, cartTotal, cartTax, clearCart} = value;
    return (
        <React.Fragment>
        <div className="container">
        <div className="row">
            <div className="col-10 mt-2 col-sm-8 ml-sm-auto 
            text-capitalize text-right">
            <Link to="/">
            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
            type="button" onClick={()=>clearCart()}>
            clear cart </button>
            </Link>
            <h6><span className="text-title2">
                subtotal : 
            </span> <strong>${cartSubTotal}</strong></h6>
            <h6><span className="text-title2">
                tax : 
            </span> <strong>${cartTax}</strong></h6>
            <h6><span className="text-title2">
                total : 
            </span> <strong>${cartTotal}</strong></h6>

            </div>

        </div> 
        </div>
        </React.Fragment>
    )
}
