import React, { useEffect, useState } from 'react'
import './products.css'
import { Link } from 'react-router-dom'

function Products() {

    const [products,setproducts]=useState([])
    const getProducts=async()=>{
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json();
        console.log(data)
        setproducts(data);
    }
    
    useEffect(()=>{
        getProducts()
    },[])

  return (
    <>
    <div className='display-5'>Our Products</div>
   <div className='container'>
    <div className='row'>
        {
            products.length>0 ? (
                products.map((product)=>(
                    <div className='col-md-4 col-lg-3 mb-3'>
                        <div className="card card-style" style={{height:"100%"}}>
                        <img className="img-width" src={product.image} alt="Card image cap"/>
                       
                            <h5 className="card-title">{product.title}</h5>
                           <div className='h4'><i>Price</i>:&nbsp;{product.price}&nbsp;Rs</div>
                            <div>
                            <Link to={`/product/${product.id}`} className="btn btn-h">ShopNow</Link>
                            </div>
                        
                        </div>
                    </div>
                ))
            ) : (<p>loading</p>)
        }
    </div>
   </div>
    </>
  )
}

export default Products