import React from 'react';
import CheckoutColumns from './CheckoutColumns';
import CheckoutList from './CheckoutList';
import CheckoutTotals from './CheckoutTotals'


const CheckoutReview = () => {



    return (
        <section className="page-section" >
            <h1 className='text-center text-uppercase'>check out</h1>
            <CheckoutColumns />
            <CheckoutList />
            <CheckoutTotals />
        
            {/* <div className='text-center text-uppercase'><Link to="/checkout" className="nav-link">make payment</Link> </div> */}
        </section>


    )
}

export default CheckoutReview