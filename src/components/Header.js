import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
  // const [tproduct ,settproduct] = useState()
  const cartItems = useSelector((state)=>state.productData.cartdata)
  const tproduct = cartItems.length
  return (
    <>

<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark text-light" data-bs-theme="dark">
  <div class="container-fluid">
        <Link to='/' className='navbar-brand text-light'>
        <i class="fa-solid fa-basket-shopping"></i><span>&nbsp;Shop.com</span>
        </Link>

    <div class="margin">
      <ul class="nav">
        <li class="nav-item">
          <Link to='/' class="nav-link active text-light ">Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/cart' class="nav-link text-light ">Cart</Link>
        </li>
        
      </ul>
    </div>

    <div className='cart-logo1'>
        <i class="fa-solid fa-cart-shopping mx-4 position-relative cart-logo">
          <span className='badge bg-warning text-dark position-absolute top-0 start-100 translate-middle cart-count'>{tproduct}</span>
        </i>
        </div>
  </div>
</nav>
    </>
    
  )
}

export default Header