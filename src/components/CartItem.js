import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { removeSpecificItem } from "../utils/cartSlice";

const CartItem = ({ id, image, title, price, rating }) => {
  const dispatch = useDispatch();
  const handleRemoveCart = () => {
    dispatch(removeSpecificItem(id));
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex w-full">
      {cartItems.length != 0 ? (
        <div className="w-full flex mb-1 mr-5 p-2 shadow-md bg-white cursor-pointer ">
          <div className=" flex justify-center mr-3">
            <img className=" w-32 h-32 " src={image} alt="image"></img>
          </div>
          <div className="w-full">
            <h2 className="mt-1 text-gray-500">
              {title}
            </h2>
            <h3 className="mt-2 font-semibold text-md">${price}</h3>
            <div className="flex items-center justify-between w-full">
              {
                rating?.rate > 3 ? (
                <h2 className="mt-2 bg-green-600 text-white w-14 pl-2 py-[1px] rounded-2xl text-sm">
                  {rating?.rate}
                  {<StarIcon className="py-1" />}
                </h2>
              ) : (
                <h2 className="mt-2 bg-yellow-500 text-white w-14 pl-2 py-[1px] rounded-2xl text-sm">
                  {rating?.rate}
                  {<StarIcon className="py-1" />}
                </h2>
              )
              }
              <h3 className="mt-2 text-gray-700 bg-slate-200 font-medium w-24 pl-1 py-1 rounded-2xl text-sm">
                Free Delivery
              </h3>
            </div>
            <button
              onClick={handleRemoveCart}
              className="whitespace-nowrap mt-2 hover:bg-[#e43a3a] bg-[#f34949] text-white pl-2 px-2 py-[1px]"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div>Oops! your bag is empty</div>
          <button>Add items to bag</button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
