import React, { useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';
import { ShoesContext } from '../../context/ShoesContext'
import nav_dropdown from '../assets/interface.png';
import cart from '../assets/cart.png';

const Navbar = () => {

  const {getTotalCartItems} = useContext(ShoesContext);
  const [menu, setMenu] = useState("shop");
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
      <div className="nav-logo">
        <h1>Shoes</h1>
        <p>Store</p>
      </div>
      
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link to='/women'>Woman</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kid")}}><Link to='/kid'>Kids</Link>{menu==="kid"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/cart'><img src={cart} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        {localStorage.getItem('auth-token')?<button onClick={() => {localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:<Link to='/login'><button>Login</button></Link>}
      </div>
    </div>
  )
}

export default Navbar