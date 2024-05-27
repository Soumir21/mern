import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { useAuth } from '../store/auth';
export const NavBar = () => {
const {isLoggedIn}=useAuth();

  return (
   <>
    <header>
        <div className='container'>
            <div className='logo-brand'>
                <NavLink to='/'>duarah</NavLink>
            </div>

            <nav>
                <ul  className='navLinks'>
                    <li>
                        <NavLink className="navbarLink" to='/'>Home</NavLink>
                    </li>

                    <li>
                        <NavLink className="navbarLink" to='/about'>About</NavLink>
                    </li>

                    <li>
                        <NavLink className="navbarLink" to='/contact'>contact</NavLink>
                    </li>
                    <li>
                    </li>
                    <li>
                        <NavLink className="navbarLink" to='/service'>service</NavLink>
                    </li>
                    {isLoggedIn?<li>
                        <NavLink className="navbarLink" to='/Logout'>Logout</NavLink>
                    </li>:  <li>
                        <NavLink className="navbarLink" to='/login'>Login</NavLink>
                    </li>}
                    
                  

                    <li>
                        <NavLink className="navbarLink" to='/register'>Register</NavLink>
                    </li>
                    <li>
                        <NavLink className="navbarLink" to='/admin'>Admin</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
   </>
  )
}
