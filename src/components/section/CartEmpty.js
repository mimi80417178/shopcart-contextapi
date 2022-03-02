import React, { Component } from 'react';
import Title from './Title'
import styled from 'styled-components';


class Cartempty extends Component {
    render() {
        return (
            <div>
                <CartEmptyColor>
                    <div className='CartEmptyColor'>
                        <Title title="YOUR CART.EMPTY NOW..." />
                    </div>
                </CartEmptyColor>

            </div>
        );
    }
}

const CartEmptyColor = styled.div`
.CartEmptyColor{
   color: rgb(223, 24, 24);    
}
`;

export default Cartempty;
