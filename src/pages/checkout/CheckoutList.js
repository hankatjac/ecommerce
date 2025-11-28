import React from 'react'
import { useGlobalContext } from '../../contexts/context';

const CheckoutList = () => {
  const { cart } = useGlobalContext();
  // console.log(cart)

  return (
    <div className="container-fluid">
      {cart.map(item => {
        const { id, title, img, price, total, count } = item;
        return (

          <div className="row my-1 text-capitalize text-center" key={id}>
            <div className="col-10 mx-auto col-lg-2">
              <img
                src={img}
                style={{ width: "5rem", heigth: "5rem" }}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
              <span className="d-lg-none">product :</span> {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 ">
              <strong>
                <span className="d-lg-none">price :</span> ${price}
              </strong>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0 ">
              <div className="d-flex justify-content-center">
                <span className="btn btn-black mx-1">{count}</span>
              </div>
            </div>

            <div className="col-10 mx-auto col-lg-2 ">
              <strong>item total : ${total} </strong>
            </div>
          </div>

        )
      }

      )
      }
    </div>
  )
}

export default CheckoutList