import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';
import { ProductConsumer } from '../context';


export default class ProductList extends Component {
    
    render() {
        return (

            <React.Fragment>
                <div className="py-2 mx-3">
                 <div className="Container">
                
                    <Title name="Excellence..." title="Be different." />
                     {/* Bellow is the product row*/}
                     <div className="row">
                         <ProductConsumer>
                             {value=>{
                            return value.products.map(product => {
                                return <Product key={product.id} product={product}/>
                            });
                             }}
                         </ProductConsumer>

                     </div>
                </div>   

                </div>
            </React.Fragment>
        
            
        )
    }
}
