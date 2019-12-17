import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function CartItem({item, value}) {
    const {id, imgname, title, price,total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-3 text-capitalize text-center">
        <div className="col-10 col-md-2 mx-auto">
        <img src={imgname} className="img-fluid" alt="product" style={{width: "5rem", height: "5rem"}} />
        </div>
        <div className="col-10 col-md-2 mx-auto">
            <span className="d-md-none">Product: </span>
            {title}
        </div>
        <div className="col-10 col-md-2 mx-auto">
            <span className="d-md-none">Price: </span>
            {price}
        </div>
        {/**increment and decrement button */}
        <div className="col-10 mx-auto col-md-2 my-2 my-md-0">
        <div className="d-flex justify-content-center">
        <span className="btn btn-black mx-1"onClick={()=>decrement(id)} >-</span>
        <span className="btn btn-black mx-1">{count}</span>
        <span className="btn btn-black mx-1"onClick={()=>increment(id)} >+</span>
        </div>
        </div>
        {/**end of increment and decrement button */}
        <div className="col-10 col-md-2 mx-auto">
            <div className="cart-icon" onClick={()=>removeItem(id)}>
                <FontAwesomeIcon icon="trash" /></div>
            
        </div>
        <div className="cart-total col-10 col-md-2 mx-auto">
            <strong>item total: $ {total}</strong>
        </div>
        </div>
    )
}
