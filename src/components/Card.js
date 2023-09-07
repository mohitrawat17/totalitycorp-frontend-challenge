import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({product}) => {

 


const notify = () =>  toast.success('Added to cart', {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  });





 const dispatch=useDispatch();
  const handleAddCart=()=>{
      dispatch(addItem(product));
      notify();
  }


  return (
    <div>
    <div className='m-5 p-2 rounded-xl shadow-md bg-white cursor-pointer hover:scale-95 transition-transform duration-200 '>
     <div className='flex justify-center'>
     <img className=' w-40 h-44 ' src={product?.image} alt='image'></img>
     </div>
     <h2 className='mt-2 font-medium text-gray-500 whitespace-nowrap overflow-hidden overflow-ellipsis'>{product?.title}</h2>
     <h3 className='mt-2 font-semibold text-xl'>${product?.price}</h3>
     <div className='flex justify-between'>
     {
        product?.rating?.rate>3 ? <h2 className='mt-2 bg-green-600 text-white w-14 pl-2 py-[1px] rounded-2xl'>{product?.rating?.rate}{<StarIcon className='pb-[6px]' />}</h2>
        : <h2 className='mt-2 bg-yellow-500 text-white w-14 pl-2 py-[1px] rounded-2xl'>{product?.rating?.rate}{<StarIcon className='pb-[6px]' />}</h2>
     }
     <h3 className='mt-2 text-gray-700 bg-slate-200 font-medium w-24 pl-1 py-1 rounded-2xl text-sm'>Free Delivery</h3>
     </div>
    <button data-testid="add-btn" onClick={handleAddCart} className='whitespace-nowrap mt-2 bg-green-600 text-white pl-2 px-2 py-[1px] rounded-sm'>Add +</button>
   
    </div>
    
    </div>
  )
}

export default Card
