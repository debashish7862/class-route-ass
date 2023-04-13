
import { useState,useEffect } from "react"
import './product.css'
import {Link}from 'react-router-dom'
export default function Product() {
  const[products,setProducts]=useState([])
   
    useEffect(()=>{
      fetch("https://fakestoreapi.com/products")
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
        setProducts(data)
      })
    },[])
  return (
    <>
    <h2>Product</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis minus voluptatum, magni nostrum exercitationem id? Accusantium quibusdam omnis consequuntur sed maxime, et molestiae consequatur, eos vitae quasi animi voluptas nesciunt porro minus officiis tenetur quaerat debitis. Quos pariatur optio reprehenderit. Alias ex, obcaecati id reiciendis voluptate neque ad. Officiis voluptas atque iure nostrum, itaque dicta laboriosam reiciendis delectus, ipsam esse culpa repudiandae illo quisquam maiores. Autem minus consequuntur fugit nobis nam omnis culpa a provident neque vel quam praesentium reiciendis soluta laudantium cum pariatur, optio voluptatum aliquid nihil exercitationem dolorem quasi! Maxime aperiam, nihil atque consectetur magnam repellendus tenetur totam sed sapiente consequuntur iste impedit sint nulla excepturi aliquid adipisci soluta vero laborum id accusamus similique dignissimos non ad debitis. Aut vitae veritatis fugiat iusto pariatur in eos laudantium magnam officiis debitis eligendi numquam nesciunt aliquid est officia, repudiandae doloribus nisi ut maxime deleniti laborum saepe esse. Inventore, autem nihil delectus quaerat illo quas rerum repellat, porro, repudiandae reprehenderit nemo consequatur placeat quo similique voluptatibus iusto pariatur ipsam expedita? Ut harum, officiis labore expedita, consequatur animi cupiditate reiciendis, iusto aliquam minus molestias quo minima similique. Ducimus minima voluptas mollitia praesentium tempora reprehenderit repudiandae dignissimos? Odio, aliquam eligendi? Necessitatibus, voluptatem.</p>
    <div>
      {
        products.length > 0 ? <div className="main">
          {
            products.map((product)=>{
              return<div className="card">
                <img src={product.image} alt="" />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Link to={`/productDetails/${product.id}`}><button>Product Details</button></Link>
                </div>
            })
          }
          </div> : <h2>No Products</h2>
      }
    
    </div>
    </>
  )
}



