import React, { useState, useEffect } from "react";
import axios from "axios";
import { useStripe, CardElement, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const defaultFormFields = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  postal_code: '',
  city: '',
  province: '',
  country: ''
}

const CheckoutForm = ({ cartTotal, cart }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const INTENT_API_URL = "http://localhost:8080/api/stripe/payment";

  // 1️⃣ Setup state to track client secret, errors and checkout status
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  // 2️⃣ Store reference to Stripe

  const elements = useElements();

  const { firstname, lastname, email, phone, address1, address2, postal_code, city, province, country } = formFields;

  useEffect(() => {
    // 3️⃣ Create PaymentIntent and fetch client secret as soon as the page loads

    const getClientSecret = async () => {
      await fetch(INTENT_API_URL + "create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map(item => item.title),
          amount: cartTotal * 100
        }),
      }).then((res) => {
        return res.json();
      }).then((data) => {
        setClientSecret(data.clientSecret);
      });
    }
    getClientSecret()
  }, []);


  const handleChange = async (event) => {
    // 4️⃣ Listen for changes in the CardElement and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");

    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(CardElement);
    setProcessing(true);

    // 5️⃣ Confirm Card Payment.
    const payload = await axios.post(INTENT_API_URL + "/confirm", {
      clientSecret,
      payment_method: {
        card: card,
        billing_details: {
          // include other billing details like customer name
          name: firstname + lastname,
          email: email,
          phone: phone,
          address: {
            line1: address1,
            line2: address2,
            postal_code: postal_code,
            city: city,
            province: province,
            country: country
          },
        },
      },

    })

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }

  }


  var stripeElementStyles = {
    base: {

      color: '#fff',
      fontWeight: 600,
      fontFamily: 'Quicksand, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',

      ':focus': {
        color: '#424770',
      },

      '::placeholder': {
        color: '#9BACC8',
      },

      ':focus::placeholder': {
        color: '#CFD7DF',
      },
    },
    invalid: {
      color: '#fff',
      ':focus': {
        color: '#FA755A',
      },
      '::placeholder': {
        color: '#FFCCA5',
      },
    },
  };

  var elementClasses = {
    focus: 'focus',
    empty: 'empty',
    invalid: 'invalid',
  };


  return (
    <section id="dashboard">

      <form id="payment-form" onSubmit={handleSubmit}>
        {/* Collect More User Info  */}

        <label className="text-center">Billing Address</label>

        <label >First Name</label>
        <input type="text" required name="firstname" value={firstname} onChange={handleChange}
        />

        <label >Last Name</label>
        <input type="text" required name="lastname" value={lastname} onChange={handleChange}
        />

        <label >Email</label>
        <input type="email" required name="email" value={email} onChange={handleChange}
        />

        <label >Phone</label>
        <input type="tel" required name="phone" value={phone} onChange={handleChange}
        />

        <label >Street Adress 1</label>
        <input type="text" required name="address1" value={address1} onChange={handleChange}
        />

        <label >Street Address 2 (optional)</label>
        <input type="text" name="displayName" value={address2} onChange={handleChange} />

        <label >Postal Code</label>
        <input type="text" required name="postal_code" value={postal_code} onChange={handleChange} />

        <label >City</label>
        <input label="city" type="text" required name="city" value={city} onChange={handleChange} />

        <label >province</label>
        <input type="text" required name="province" value={province} onChange={handleChange} />

        <label >Country</label>
        <input type="text" required name="country" value={country} onChange={handleChange} />


        <div>
          <label className="text-center">Payment Method</label>

          <label>Card holder Name</label>
          <input name="name" id="card-name" autoComplete="cc-name" placeholder="Name on card" />


          <label>Card Number</label>
          <CardNumberElement
            options={{
              style: stripeElementStyles,
              classes: elementClasses,
            }}
            onChange={handleChange}
          />

          <label>Expiration</label>
          <CardExpiryElement
            options={{
              style: stripeElementStyles,
              classes: elementClasses,
            }}
            onChange={handleChange}
          />

          <label>CVC</label>
          <CardCvcElement
            options={{
              style: stripeElementStyles,
              classes: elementClasses,
            }}
            onChange={handleChange}
          />
        </div>

        <Button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "confirm and pay $" + cartTotal}
          </span>

        </Button>

        <Button onClick={(e) => navigate("/cart")}>cancel</Button>

        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">{error}</div>
        )}


        {/* Show a success message upon completion */}
        {succeeded && <p>Payment succeeded!</p>}

      </form>

    </section>
  )
}



export default CheckoutForm
