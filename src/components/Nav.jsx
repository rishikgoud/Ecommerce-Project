import React, { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const [products]= useContext(ProductContext)
    const distinct_category = [...new Set(products.map( product=>product.category))];
    
    const color =()=>{
        return `rgba(${(Math.random()*255).toFixed()},
        ${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},1)`;
    }
  return (
    <div className='w-[18%] h-screen bg-zinc-100 p-5'>
        <div className='flex flex-col gap-2 justify-center'>
            <div className=' flex items-start justify-center'>
             <Link to="/" className=" px-10 py-3 rounded-md bg-orange-600 text-zinc-100 font-semibold whitespace-nowrap">
                    Home
                  </Link>
            </div>
            <div className='mb-1 flex items-center justify-center'>
            <Link to={"/create"} className='px-4 py-3 rounded-md bg-blue-600 text-zinc-100 font-semibold whitespace-nowrap' href="">Add New Product </Link>
            </div>
        </div>
        <hr className='w-[95%] border-[1px] border-solid border-black my-3'/>
        <div>
            <h2 className='font-semibold text-2xl '>Category Filter</h2>
            <div>
            {distinct_category.map((item, index)=>(  
                <Link to={`/?category=${item}`} className='mt-3 flex gap-3 items-center p-1' key={index} >
                    <div style={{backgroundColor: color()}} className='w-4 h-4 rounded-full bg-blue-500'></div>
                    {item}
                </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Nav