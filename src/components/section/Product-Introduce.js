import React, { Component } from 'react';
import { DataContext } from "../Context"; ///拿到value{props 值} 
import { Link } from "react-router-dom";
import Title from './Title'
import '../css/productIntroduce.css'


class ProductIntroduce extends Component {

    static contextType = DataContext;
    state = {
        product: []
    }


    getProduct = () => {
        if (parseInt(this.props.match.params.id)) {
            const res = this.context.products; //context.productItems裡的id型別為value
            console.log(res)
            const data = res.filter(item => {
                return item.id === parseInt(this.props.match.params.id)
            })
            //console.log(data)
            this.setState({ product: data })
        }
    };

    ////1.用:組件 觸發function(getProducte()) ，2 觸發後用componentDidMount 來渲染畫面(render DOM)
    componentDidMount() {
        this.getProduct();
    }


    render() {
        //sconsole.log(this.props)
        //console.log(parseInt(this.props.match.params.id))
        //1.console.log(typeOf this.context.products)型別String
        //2.console.log(parseInt(this.props.match.params.id)) //代表產品介紹的id(把型別String轉成value))

        const { product } = this.state; // 用product裡的data值

        return (
            <div>
                {
                    product.map(item => {
                        const { id, title, img, company, info, price } = item;
                        return (
                            <div>
                                <Title title={title} />
                                <div key={id} className="introduce-banner">

                                    <div className="img-area">
                                        <div className="image">
                                            <img src={img} alt={img} className='image-size' />
                                        </div>
                                    </div>
                                    <div className="introduce-area">

                                        <h3 className="model-title">Model : {title}</h3>
                                        <h5 className="company-name">Brand Name : {company} </h5>
                                        <h3 className="price">Price : $ {price}</h3>
                                        <h6 className="product-info">Product Description : {info}</h6>

                                        <div className="two-btn">
                                            <Link to="/">
                                                <button className='info-bagbtn'>
                                                    <span className='info-cart-plus'><i class="fa fa-arrow-circle-o-left" ></i></span>
                                                    <span className='info-bagbtnText' >Back To Product</span>
                                                </button>
                                            </Link>

                                            <button className='info-bagbtn' onClick={() => this.context.addCart(id)} >
                                                <span className='info-cart-plus'><i class="fa fa-cart-plus" ></i></span>
                                                <span className='info-bagbtnText'>Add To Cart</span>
                                            </button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        )


                    })
                }

            </div>
        );
    }
}

export default ProductIntroduce;
