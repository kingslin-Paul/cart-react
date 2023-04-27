import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './cart.css'
import { addToCart ,deleteFromCart } from './redux/productAction/ProductAction'

function Cart() {

  const product =useSelector((state)=>state.productData.cartdata)
  console.log(product);
  const dispatch = useDispatch();

  const tprice=product.reduce((prev , curr)=>{
    return prev + (curr.price * curr.qty)
  },0)

  return (
    <>
    <div className='container'>
    
    {
      product.length > 0 ? (
        
          
            product.map((item)=>(
              <div className='row align-items-center text-center my-2 mb-5'>
                <div className='col-md-2'>
                  <img src={item.image} alt={item.category} style={{height:"100px"}}/>
                </div>
                <div className='h5 col-md-4 text-secondary'>
                  <span className='text-dark'>Description : </span><br />
                {item.title}
                </div>
                  <div className='h5 col-md-2'>
                  ₹&nbsp;{item.price}
                  </div>

                  <div className='col-md-2'>
                    <div className='row qty-btn'>
                    <button className='box col button plus'
                    onClick={()=>{
                      dispatch(addToCart(item))
                    }}
                    >+</button>
                    <div className='box col'>{item.qty}</div>
                    <button className='box col button minus'
                    onClick={()=>{
                      dispatch(deleteFromCart(item))
                    }}
                    >-</button>
                    </div>
                  </div>

                  <div className='h5 col-md-2'><div className='h6'>Total-price</div>
                  ₹&nbsp;{(item.qty *item.price).toFixed(2)}
                  </div>
                  <hr/>
              </div>
            ))
          
      ) : (<p>No items in cart</p>)
    }
    </div>
    <div className='text-white bg-dark tbox container-fluid h3'>Total Amount : {tprice.toFixed(2)}</div>
    </>
    
  )
}

export default Cart