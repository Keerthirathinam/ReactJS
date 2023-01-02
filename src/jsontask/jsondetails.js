import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export function Details1(){
    const[products,setProducts]=useState([])
    const{id}=useParams()
    useEffect (()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return(
        <>
        
            {
        <div class="card mb-3">
  <div class="row no-gutters shadow">
    <div class="col-md-4 ">
      <img src={products.image} alt="..." height="500px" width="100px" className="container"/>
    </div>
    <div class="col-md-6 container">
      <div class="card-body">
        <h2 class="card-title text-center">{products.title}</h2>
        <p class="card-text">{products.description}</p>
        <h4 class="card-text">${products.price}</h4>
        <Link class="btn btn-danger">Add to Cart</Link>
      </div>
    </div>
  </div>
</div>
        }
        </>
    );
}