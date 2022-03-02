import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Products from "./section/Products";
import Cart from "./section/Cart";
import ProductIntroduce from "./section/Product-Introduce";


class Section extends Component {
    render() {
        return (
            <>
                <React.Fragment>
                    <Switch>
                        <Route exact path="/" component={Products} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/introduce/:id" component={ProductIntroduce} />

                    </Switch>
                </React.Fragment>
            </>
        );
    }
}

export default Section;
