import React, { Component } from 'react';
import '../css/Cart.css'
import { DataContext } from "../Context"; //拿到value{props 值} 

class Cartlist extends Component {
    static contextType = DataContext //靜態導入context型態 = const DataContext = React.createContext()

    render() {
        const { cart } = this.context //接收DataContext.Provider提供的value
        //console.log(cart)
        return (
            <>
                {
                    cart.map(item => {
                        const { id, img, title, price, count } = item
                        return (
                            <div key={id} className='cart-display-item'>
                                <div className='cart-item-image'>
                                    <img src={img} alt="" className='image-size' />
                                </div>
                                <h4 className='cart-item-title' >{title}</h4>
                                <h4 className='cart-item-price' > $ {price}</h4>

                                <h4 className='cart-item-up-down-btn'>
                                    <button className='cart-item-down-btn' onClick={() => this.context.decrease(id)}>-</button>
                                    <span className='cart-item-quantity'>{count}</span>
                                    <button className='cart-item-up-btn' onClick={() => this.context.increase(id)}>+</button>
                                </h4>
                                <h4 className='cart-item-remove' onClick={() => this.context.removeCartItem(id)}>
                                    <i class="fa fa-trash-o"></i>
                                </h4>
                                <h4 className='cart-item-totally'>
                                    <span><b>${price * count}</b></span>
                                </h4>
                            </div>
                        )
                    })
                }
            </>
        );
    }
}

export default Cartlist;
