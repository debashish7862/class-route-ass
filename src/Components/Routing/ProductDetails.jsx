import{useParams}from 'react-router-dom'
import { useEffect,useState } from 'react'
export default function ProductDetails() {
    
const{id} =useParams()
const [state,setState]=useState({
    id:0,
    title:'',
    description:'',
    image:"",
    price:0,
    categoory:""
})
useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setState(data)
    })

},[])
  return (
   <div>
    <h1>{state.categoory}</h1>
    <img src={state.image} alt="" />
   </div>
  )
}

