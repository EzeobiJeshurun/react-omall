import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {modalOpen , closeModal} = value;
                    const {id, imgname, title, price} = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    }else{
                    return(    
                        <ModalContainer >
                            <div className="container">
                            <div className="row">
                                <div id="modal"  className=" py-3 px-3 col-8 col-sm-6 mx-auto text-center text-capitalize " disabled="true">
                                    <h7>Item added to cart</h7>
                                    <img src={imgname} alt="product" className="img-fluid" />
                                    <h6 className="flex-nowrap">{title}</h6>
                            
                                    <h6 className="text-muted">price: ${price}</h6>
                                    <Link to='/'>
                                    <ButtonContainer onClick={()=>{
                                        closeModal();
                                    }}>
                                        back to store
                                    </ButtonContainer>
                                    </Link>
                                    <Link to='/cart'>
                                    <ButtonContainer cart onClick={()=>{
                                        closeModal();
                                    }}>
                                        go to cart
                                    </ButtonContainer>
                                    </Link>


                                    
                                </div>
                            </div>
                            </div>
                        </ModalContainer> 
                        );  
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
position: fixed;
top:0;
bottom:0;
left:0;
right:0;
background: rgba(0,0,0,0.5);
display: flex;
align-items: center;
justify-content: center;
#modal{
    background: var(--mainWhite);
};
`
