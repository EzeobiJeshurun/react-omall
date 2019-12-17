import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();
//Provider
//consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts= [...tempProducts, singleItem];
        })

        this.setState(()=>{
            return {products: tempProducts};
        })
    }

    getItem= (id)=>{
        const product = this.state.products.find(item => item.id=== id);
        return product;
    };

    closeModal = () => {
        this.setState(()=>{
            return { modalOpen : false };
        });
    };
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return { modalProduct: product, modalOpen :true };
        });

    };

    handleDetails = (id) => {
        const product = this.getItem(id);
        this.setState(()=>{
            return {detailProduct : product};
        });
    };
    increment=(id)=>{
        let tempCart = [...this.state.cart];
        const selectedItem = tempCart.find(item=> item.id=== id);
        const index = tempCart.indexOf(selectedItem);
        let increasedItem = tempCart[index];
        increasedItem.count = increasedItem.count + 1;
        increasedItem.total = increasedItem.price * increasedItem.count;

        this.setState(()=>{
            return {cart: [...tempCart]};
        },
        ()=>{ this.addTotals();}
        );
    };

    decrement=(id)=>{
        let tempCart = [...this.state.cart];
        const selectedItem = tempCart.find(item=> item.id=== id);
        const index = tempCart.indexOf(selectedItem);
        let increasedItem = tempCart[index];
        
        increasedItem.count = increasedItem.count - 1;
        if(increasedItem.count === 0){
            this.removeItem(id);
        }else{
            increasedItem.total = increasedItem.price * increasedItem.count;
            this.setState(()=>{
                return {cart: [...tempCart]};
            },
            ()=>{ this.addTotals();}
            );
        }
    };
    removeItem=(id)=>{
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
     let newCart = tempCart.filter(item=> item.id !== id);
     const index = tempProducts.indexOf(this.getItem(id));
     let removedProduct = tempProducts[index];
     removedProduct.inCart = false;
     removedProduct.count = 0;
     removedProduct.total = 0;

     this.setState(()=>{
         return {
             cart:[...newCart],
             products: [...tempProducts] 
         };
     }, 
     ()=>{ this.addTotals();}
     );

    };
    clearCart = () => {
        this.setState(()=>{
            return {cart: []};
        },
        ()=>{
            this.setProducts();
            this.addTotals();
        }
        );
    };

    addTotals =()=>{
        let subTotal = 0;
        this.state.cart.map(item =>(subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{
            return {
                cartSubTotal : subTotal,
                cartTax: tax,
                cartTotal : total
            };
        });
    };
    addToCart = (id) => {
        const tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(()=>{
            return {products:tempProducts, cart: [...this.state.cart,
                 product]};
        },
        ()=>{ this.addTotals(); }
        );

    };

    render(){
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                decrement: this.decrement,
                removeItem: this.removeItem,
                increment: this.increment,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductConsumer, ProductProvider};
