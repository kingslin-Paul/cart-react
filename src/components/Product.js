import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './product.css'
import { useDispatch } from 'react-redux';
import { addToCart,deleteFromCart } from './redux/productAction/ProductAction';

function Product() {
  const {id} = useParams();
  const [product,setproduct]=useState({})
  const[ isAdded , setisAdded] = useState(false) 
  const dispatch = useDispatch()
  const getProduct=async()=>{
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      console.log(data)
      setproduct(data);
  }
  
  useEffect(()=>{
      getProduct()
  },[])

  return (
    <>
    <div className='container row'>
    <div className='col-md-2'>

    </div>

    <div className='col'>
        
          {
            Object.keys(product) ? (
              <div className='row my-5'>
          <div className='col-md-6 product-img'>
              <img src={product.image} alt='img-pro' style={{width:"250px"}}/>
          </div>
          <div className='col-md-6'>
          <div className='h2'>
          {product.title}
          </div>
          <div className='display-6 text-secondary col'>
            <i>{product.category}</i>
          </div>
          <p>{product.description}</p>
          <h3>Rs :&nbsp;{product.price}/-</h3>
          <div>
            Review : <span className='h4'>{product?.rating?.rate}(<i className="fa-solid fa-star text-warning"></i>)</span>
          </div>
          <button className='btn btn-success btn-lg btn-block'
          onClick={()=>{
            dispatch(addToCart(product));
            setisAdded(true);
          }}
          >{isAdded ? ('Added') : ('Add_to_basket')}</button>
          </div>
          </div>
            ) : (<p>loading</p>)
          }
          
        
    </div>

    </div>
    </>
  )
}

export default Product