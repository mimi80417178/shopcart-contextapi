import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/Products.css';
import { DataContext } from "../Context"; //拿到value{props 值} 
import Title from './Title'


class Products extends Component {

    static contextType = DataContext;//如果要使用 contextType 方式取用 context 內容的話，則需要在 class 內使用 this.context

    render() {
        const { products } = this.context //1.//接收DataContext.Provider提供的value2.取 Context.js value的props值 2.效能等同於Consumer
        //console.log(products)

        return (
            <div>
                <Title title="our products..." />
                <div className='productList-banner'>
                    {
                        products.map(items => {
                            const { id, img, title, price } = items; //解構賦值(變數屬性名稱=items裡的屬性名稱，可直接取值)

                            return (
                                <div key={id} className='itemsAll' >
                                    <Link to={`/introduce/${id}`}> <img src={img} alt="" className='productImage' />
                                    </Link>
                                    <div className='productText'>
                                        <h5>Name : {title}</h5>
                                        <h3>${price}</h3>
                                    </div>

                                    <button className='bagbtn' onClick={() => this.context.addCart(id)}>
                                        <span className='cart-plus'><i class="fa fa-cart-plus" ></i></span>
                                        <span className='bagbtnText'>Add To Cart</span>
                                    </button>

                                </div>
                            )
                        })

                    }

                </div>
            </div>
        );
    }
}

export default Products;
