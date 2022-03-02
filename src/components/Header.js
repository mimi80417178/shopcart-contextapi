import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "./logo.png"
import './css/Header.css';
import { DataContext } from "./Context"; //拿到value{props 值} 


class Header extends Component {
    static contextType = DataContext; //步驟一:

    render() {
        const { cart } = this.context //步驟二:  1.取 Context.js value的props值2.效能等同於Consumer
        return (
            <div>
                <nav className="navbar ">
                    <div className="logo-name ">
                        <Link to="/"> <img src={logo} alt="store" className='navbar-logo' /> </Link>
                        <Link to="/" className='nav-link'>Products</Link>
                    </div>

                    <Link to="/cart" >
                        <button className='cartBTN'>
                            <i class="fa fa-cart-plus" ></i>
                            <span>Carts</span>
                            <span className='cart-quantity'>{cart.length}</span>

                        </button>
                    </Link>
                </nav>
            </div>
        );
    }
}

export default Header;
