import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/Axios";

function Home() {
  const [products] = useContext(ProductContext)
  const {search} = useLocation();
  const category = decodeURIComponent(search.split("=")[1])
  const [filteredProduct,setfilteredProduct] = useState(null);
  const [loading, setloading]=useState(false)

  // const getFilteredproduct = async()=>{
  //   setloading(true);
  //   try {
  //     const {data} = await axios.get(`/products/category/${category}`)
  //     setfilteredProduct(data);
  //   } catch (error) {
  //     console.log(error)
  //   }finally{
  //     setloading(false);
  //   }
  // }

  useEffect(()=>{
    if(category=="undefined") setfilteredProduct(products)
    if(category != "undefined") {
      setfilteredProduct(products.filter((p)=>p.category==category))
    };
  },[category,products]);
  return products? (
    <>
    <div className='w-full h-screen flex'>      
      <Nav />  
      <div className="w-[82%] h-screen overflow-x-hidden overflow-y-auto">
        <div className="py-10 px-5 flex flex-wrap gap-6">{loading? (<Loading />): (filteredProduct && filteredProduct.map((item,index)=>(<Link key={index} to={`/products/${item.id}`} className="w-48 shadow-md p-3 shadow rounded-md ">
            <div className="flex items-center">
              <img
                className="w-52 h-36 p-2 object-contain hover:scale-110"
                src={item.image }
                alt=""/>
            </div>
            <div className="mt-3 text-base font-semibold hover:text-blue-500 text-center">{item.title}</div>
          </Link>)))
}
        </div>
      </div>
    </div>
  </>
  ) : ( <Loading /> );
};

export default Home;
