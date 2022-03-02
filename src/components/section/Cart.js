import React, { Component } from 'react';
import '../css/Cart.css';
import { DataContext } from "../Context"; //拿到value{props 值} 
import Title from './Title'
import CartEmpty from "./CartEmpty";
import CartHeader from "./CartHeader";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

class Cart extends Component {

    static contextType = DataContext;

    render() {
        const { cart } = this.context
        if (cart.length > 0) {
            return (
                <>
                    <Title title="YOUR CART...." />
                    <CartHeader />
                    <CartList />
                    <CartTotal />
                </>
            )
        }
        else {
            return <CartEmpty />;
        }
    }
}

export default Cart;
