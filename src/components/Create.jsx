import React, {useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { ToastContainer,toast } from "react-toastify";

function Create() {
   const navigate = useNavigate()
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [products, setproducts] = useContext(ProductContext);    

  const addproducthandler = (e) => {
    e.preventDefault();
    if(image.trim().length<5 || title.trim().length<5 || category.trim().length<5|| price.trim().length<1||description.trim().length<5 ){
        alert("Each field should atleast 5 characters");
        return;
    }
    const product = {
      id : nanoid(),  
      image,
      title,
      category,
      price,
      description,
    };
    // console.log(product);
    setproducts([...products, product])
    localStorage.setItem("products", JSON.stringify([...products, product]));
    toast.success("Product created successfully")
    navigate("/")
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
        <Nav />
      <div className="w-full h-screen flex items-center justify-center">
        <form
          onSubmit={addproducthandler}
          className="w-1/2 flex flex-col gap-2"
        >
          <h1 className="text-3xl font-semibold">Add New Product</h1>
          <input
            className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800"
            type="url"
            placeholder="Image"
            onChange={(e) => setimage(e.target.value)}
            value={image}
          />
          <input
            className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800"
            type="text"
            placeholder="Title"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
          <div className="flex gap-3">
            <input
              className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800 w-1/2"
              type="text"
              placeholder="Category"
              onChange={(e) => setcategory(e.target.value)}
              value={category}
            />
            <input
              className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800 w-1/2"
              type="number"
              placeholder="Price"
              onChange={(e) => setprice(e.target.value)}
              value={price}
            />
          </div>
          <textarea
            name=""
            id="0"
            rows={8}
            className="p-3 bg-zinc-200 rounded-md text-1xl text-zinc-800"
            type="text"
            placeholder="Enter the Product description here... "
            onChange={(e) => setdescription(e.target.value)}
            value={description}
          ></textarea>
          <button className="px-4 py-3 rounded-md bg-blue-600 text-zinc-100 font-semibold w-[30%]">
            Add New Product{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
