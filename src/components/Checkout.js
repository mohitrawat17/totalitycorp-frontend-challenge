import React from "react";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import {toast } from 'react-toastify';



const Checkout = () => {


    const notify = () =>  toast.success('Your order is placed', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

        const notify1 = () =>  toast.warning('Payment method selected', {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });


    const cartData = useSelector((store) => store.cart.items);
  return (
    <div className="m-5 flex justify-between max-sm:flex-col gap-3">
      <div className="w-4/6 max-sm:w-full">
        <div className="border p-4 bg-white">
          <div className="flex justify-between  py-3 pl-2 font-semibold">
            <h2 className="text-lg">Email</h2>
            <input
              className="font-normal px-1 outline-none w-4/6 border py-1 rounded-lg"
              type="text/"
              placeholder="your-email.com"
            ></input>
          </div>
          <hr />
          <div className="flex justify-between  py-3 pl-2 font-semibold">
            <h2 className="text-lg">First Name</h2>
            <input
              className="font-normal px-1 outline-none w-4/6 border py-1 rounded-lg"
              type="text/"
              placeholder="First Name"
            ></input>
          </div>
          <hr />
          <div className="flex justify-between  py-3 pl-2 font-semibold">
            <h2 className="text-lg">Last Name</h2>
            <input
              className="font-normal px-1 outline-none w-4/6 border py-1 rounded-lg"
              type="text/"
              placeholder="Last Name"
            ></input>
          </div>
          <hr />
          <div className="flex justify-between  py-3 pl-2 font-semibold">
            <h2 className="text-lg">Address</h2>
            <input
              className="font-normal px-1 outline-none w-4/6 border py-1 rounded-lg"
              type="text/"
              placeholder="Street address"
            ></input>
          </div>
          <hr />
          <div className="flex justify-between  py-3 pl-2 font-semibold">
            <h2 className="text-lg">Address 2</h2>
            <input
              className="font-normal px-1 outline-none w-4/6 border py-1 rounded-lg"
              type="text/"
              placeholder="Landmark, Area"
            ></input>
          </div>
          <hr />
          <div className="flex justify-between  py-3 pl-2 font-semibold">
            <h2 className="text-lg">City</h2>
            <input
              className="font-normal px-1 outline-none w-4/6 border py-1 rounded-lg"
              type="text/"
              placeholder="City"
            ></input>
          </div>
          <hr />
          <div className="flex justify-between  py-3 pl-2 font-semibold">
            <h2 className="text-lg">State</h2>
            <input
              className="font-normal px-1 outline-none w-4/6 border py-1 rounded-lg"
              type="text/"
              placeholder="State/Province"
            ></input>
          </div>
          <hr />
        </div>

        <div className="border p-4 my-5 bg-white">
          <form>
            <label className="font-semibold">
              <input
                className="mr-5 mb-4"
                type="radio"
                name="item"
                value="item1"
              />
              Credit or debit card
            </label>
            <br />
            <label className="font-semibold">
              <input
                className="mr-5 mb-4"
                type="radio"
                name="item"
                value="item2"
              />
              Net banking
            </label>
            <br />
            <label className="font-semibold">
              <input
                className="mr-5 mb-4"
                type="radio"
                name="item"
                value="item3"
              />
              Other UPI Apps
            </label>
            <br />

            <label className="font-semibold">
              <input
                className="mr-5 mb-4"
                type="radio"
                name="item"
                value="item3"
              />
              Cash on Delivery
            </label>
            <br />
            <button onClick={(e)=>{
                e.preventDefault()
                notify1();
            }} class="bg-yellow-400 hover:bg-yellow-500 px-2 rounded-2xl font-semibold text-black py-1">
              Use this payment method
            </button>
          </form>
        </div>
      </div>

      <div className="w-2/6 max-sm:w-full">
      <div className="bg-white border p-5 mb-5">
            <div className="font-semibold text-center text-xl pb-3">
              Summary
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
              <h3>Delivery Fee</h3>
              <h3> $0</h3>
            </div>
            <hr></hr>
            <div className="flex justify-between py-3 font-semibold">
              <h3 className="text-red-700">Order Total</h3>
              <h3 className="text-red-700">
                $
                {(cartData.reduce((accumulator, data) => {
                  return accumulator + data.price;
                }, 0)).toFixed(2)}
              </h3>
            </div>
            <hr></hr>

            
            <div className="flex justify-center">
             <button onClick={notify} className="bg-green-600 my-5 text-gray-100 py-1 px-2 rounded-lg cursor-pointer  hover:scale-95 transition-transform duration-200 text-center tracking-wide  font-semibold">
                Place your order
              </button>
            </div>

       </div>
      </div>
    </div>
  );
};

export default Checkout;
