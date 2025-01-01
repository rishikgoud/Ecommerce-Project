import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../utils/Axios'
import Loading from './Loading'

const Carddetails=()=> {
  const [product, setproduct] =  useState(null);
  const {id} = useParams()
    const getsingleproduct = async()=>{
    try {
      const {data} = await axios.get(`/products/${id}`)
      setproduct(data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getsingleproduct()
  },[])

  return product?(
      <div className="w-[100%] h-screen overflow-x-hidden overflow-y-auto flex items-center justify-center ">
        <div className='w-[70%] h-[70%] my-10 bg--400 flex gap-10 shadow-md shadow rounded-md'>
          <div className='w-[45%] bg--400'>
            <img className='w-full h-full object-contain py-10 px-5' src={product.image
            } alt="" />
          </div>
          <div className='w-[55%] bg--400 py-20 px-3'>
            <div className='text-3xl font-semibold leading-none '>{product.title}</div>
            <div className='text-zinc-500 py-2'>{product.category}</div>
            <div className='text-green-600 text-lg font-bold'>${product.price}</div>
            <div className='text-zinc-700 py-3'>{product.description} </div>
            <div className='flex gap-3'>
              <button className='px-5 py-2 bg-blue-600 rounded-md text-sm font-semibold text-zinc-100'>Edit</button>
              <button className='px-5 py-2 bg-red-600 rounded-md text-sm font-semibold text-zinc-100'>Delete</button>
            </div>
          </div>
        </div>
      </div>  
  ):(<Loading />);
};

export default Carddetails