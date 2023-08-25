import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  // subscribing to store
  const cartData = useSelector((store) => store.cart.items);

  //dispatching clearCart action
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-5 flex max-md:flex-col justify-between items-center">
      
        <div className="flex flex-col">
          {cartData.map((item) => {
            return (
              // {...item} => this means we are passing all properties of cartData one by one as a prop to CartItem component
              <CartItem key={item.id} {...item} />
            );
          })}
        </div>

        <div>
          <div className="bg-white border h-[33rem] p-5 mb-5">
            <div className="font-semibold text-center text-xl pb-3">
              Bill Details
            </div>
            <div className="flex justify-between  py-2">
              <h3>Item Total</h3>
              <h3>
                $
                {(cartData.reduce((accumulator, data) => {
                  return accumulator + data.price;
                }, 0)).toFixed(2)}
              </h3>
            </div>
            <div className="flex justify-between py-2">
              <h3>Delivery Fee | 10km</h3>
              <h3> $0</h3>
            </div>
            <hr></hr>
            <div className="flex justify-between py-3 font-semibold">
              <h3>Total pay</h3>
              <h3>
                $
                {(cartData.reduce((accumulator, data) => {
                  return accumulator + data.price;
                }, 0)).toFixed(2)}
              </h3>
            </div>
            <hr></hr>

            <Link to='/home/checkout'> 
            <div className="flex justify-center">
             <button className="bg-green-600 my-5 text-gray-100 py-1 px-2 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-200 text-center tracking-wide text-lg  font-semibold">
                Check out
              </button>
            </div>
            </Link>


            <div className="border p-3">
              <h2 className="font-semibold">
                Review your order and adress details to avoid cancellations
              </h2>
              <h3 className="text-gray-400 text-sm">
                Note: If you cancel within 60 seconds of placing your order, a
                100% refund will be issued. No refund for cancellations made
                after 60 seconds
              </h3>
              <br></br>
              <h3 className="text-gray-400 text-sm">
                To void cancellations, read cancellations policy carefully{" "}
              </h3>
            </div>
          </div>
          <div className="flex justify-between">
            <Link to="/home">
              <div className="mr-20 bg-[#f34949] text-gray-100 py-1 px-2 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-200 text-center tracking-wide text-lg  font-semibold">
                Back to Menu
              </div>
            </Link>
            <div
              className="bg-[#f34949] text-gray-100 py-1 px-2 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-200 text-center tracking-wide text-lg  font-semibold"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Cart;
