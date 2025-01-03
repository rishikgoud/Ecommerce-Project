import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Nav from "./Nav";
import { toast, ToastContainer } from "react-toastify";

function Edit() {
  const navigate = useNavigate();
  const {id} =useParams()
  const [product, setproduct]=useState({
    image:"",
    title: "",
    category: "",
    price:"",
    description:""
  })

  const Changehandler=(e)=>{
    setproduct({...product, [e.target.name]: e.target.value})
  }
 
  const [products, setproducts] = useContext(ProductContext);

  useEffect(()=>{
    setproduct(products.filter((p)=>p.id == id)[0])
  },[id]);

  const addproducthandler = (e) => {
    e.preventDefault();
    if (
      product.image.trim().length < 5 ||
      String(product.title).trim().length < 5 ||
      String(product.category).trim().length < 5 ||
      String(product.price).trim().length < 1 ||
      String(product.description).trim().length < 5
    ) {
      alert("Each field should atleast 5 characters");
      return;
    }


    const pi = products.findIndex((e)=>e.id == id)
    // console.log(pi)
    const copydata = [...products]
     copydata[pi] = {...products[pi],...product}
    setproducts(copydata);
    localStorage.setItem("products", JSON.stringify(copydata));
    toast.success("Product updated successfully");
    navigate(-1);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Nav />
      <div className="w-full h-screen flex items-center justify-center">
        <form
          onSubmit={addproducthandler}
          className="w-1/2 flex flex-col gap-2"
        >
          <h1 className="text-3xl font-semibold">Edit Product</h1>
          <input
            className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800"
            type="url"
            placeholder="Image"
            name="image"
            onChange={Changehandler}
            value={product && product.image}
          />
          <input
            className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800"
            type="text"
            placeholder="Title"
            name="title"
            onChange={Changehandler}
            value={product && product.title}
          />
          <div className="flex gap-3">
            <input
              className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800 w-1/2"
              type="text"
              placeholder="Category"
              name="category"
              onChange={Changehandler}
              value={product &&product.category}
            />
            <input
              className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800 w-1/2"
              type="number"
              placeholder="Price"
              name="price"
              onChange={Changehandler}
              value={product &&product.price}
            />
          </div>
          <textarea
            name="description"
            id="0"
            rows={8}
            className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800"
            type="text"
            placeholder="Edit the Product description here... "
            onChange={Changehandler}
            value={product &&product.description}
          ></textarea>
          <button className="px-4 py-3 rounded-md bg-blue-600 text-zinc-100 font-semibold w-[30%]">
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
