import React from 'react'
import CheckoutForm from './CheckoutForm';
// import { Link } from "react-router-dom";
import { useGlobalContext } from '../../contexts/context';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import config from "../../config.json";

const stripePromise = loadStripe(config.stripePublishableKey);

const CheckoutTotals = () => {
  const { cartSubTotal,
    cartTaxGst,
    cartTaxQst,
    cartTotal,
    cart,
  } = useGlobalContext();


  const emptyCart = cart.length === 0 ? true : false;

  return (
    <>
      
      {!emptyCart && (
        <div className="container">
          <div className="row">
            <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
              <h5>
                <span className="text-title"> subtotal :</span>{" "}
                <strong>$ {cartSubTotal} </strong>
              </h5>
              <h5>
                <span className="text-title"> gst :</span>{" "}
                <strong>$ {cartTaxGst} </strong>
              </h5>
              <h5>
                <span className="text-title"> qst :</span>{" "}
                <strong>$ {cartTaxQst} </strong>
              </h5>
              <h5>
                <span className="text-title"> total :</span>{" "}
                <strong>$ {cartTotal} </strong>
              </h5>

            </div>
          </div>
        </div>
      )}
      <Elements stripe={stripePromise}>
        <CheckoutForm cartTotal={cartTotal} car={cart} />
      </Elements>

    </>
  )
}

export default CheckoutTotals