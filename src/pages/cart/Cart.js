import React, { useState } from 'react';

import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { useGlobalContext } from '../../contexts/context';
import EmptyCart from "./EmptyCart";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart } = useGlobalContext();
    const navigate = useNavigate();
    const loggedInUser = localStorage.getItem("user");


    // const [localCart, setLocalCart] = useState(() => {
    //     return JSON.parse(localStorage.getItem("localCart")) || []
    //   });


    return (
        <section className="page-section" id="cart">
            {(cart.length > 0) ?
                (
                    <div>
                        <h1 className='text-center text-uppercase'>my cart</h1>
                        <CartColumns />
                        <CartList cart={cart} />
                        <CartTotals cart={cart} history={cart.history} />
                        {(!loggedInUser) ?
                            (<div className='text-center'>
                                <Button onClick={(e) => navigate("/login")}>login to proceed to checkout</Button></div> ):

                                (<div className='text-center' >
                            
                                <Button onClick={(e) => navigate("/checkout")}>proceed to checkout</Button>
                            </div>)}

                    </div>
                ) :
                (
                    <EmptyCart />
                )
            }


        </section>
    )
}

export default Cart