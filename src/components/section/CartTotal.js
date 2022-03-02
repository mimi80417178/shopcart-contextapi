import React, { Component } from 'react';
import '../css/Cart.css'
import { DataContext } from '../Context'

class CartTotal extends Component {
    static contextType = DataContext
    //1.用:組件 觸發function(getTotallyPrice()) ，2 觸發後用componentDidMount 來渲染畫面(render DOM)
    componentDidMount() {
        this.context.getTotallyPrice()
    }

    render() {
        const { totallyPrice } = this.context
        console.log(totallyPrice)

        return (
            <>
                <div className='cartTotal'>
                    <button className='clearItem-btn' onClick={() => this.context.clearAllCart()} > CLEAR CART</button>
                    <span className='subtotal-text'><strong>subtotally : </strong></span>
                    <strong>$ {totallyPrice} </strong>
                </div>
            </>
        );
    }
}

export default CartTotal;
