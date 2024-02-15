import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Dropdown from './Dropdown';
const Navbar = () => {

  const[click, SetClick] =useState(false);
  const [ dropdown , setDropdown ] = useState(false);

  const handleclick = () => SetClick(!click);
  const CloseMobileMenu =  () => SetClick(false);

    const onMouseEnter = () =>{
      if(window.innerWidth < 960){
      setDropdown(false)
      }else {
        setDropdown(true)
      }
    }

    const onMouseLeave = ( ) =>{
      if(window.innerWidth <960){
        setDropdown(false);
      }else{
        setDropdown(false);
      }
    }

  return (
    <nav className=' bg-[#EDEDED] p-4 h-16 flex items-center justify-between'>
        <Link to='/' className='text-black ml-10 font-bold text-xl' onClick={CloseMobileMenu}>
          Lando
         
        </Link>
          <ul className='mx-5 flex space-x-10 items-center justify-between  gap-2'>
            <li>
             <Link
             to="/home"
             className=''
             onClick={CloseMobileMenu}
             >
              Home
             </Link>
            </li>
            <li
            className=''
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
             <Link
             to="/pricing"
             className=''
             onClick={CloseMobileMenu}
             >
              Pricing  <i className='fas fa-caret-down' />
             </Link>
             {dropdown && <Dropdown/>}
            </li>

            <li>
             <Link
             to="/aboutus"
             className=''
             onClick={CloseMobileMenu}
             >
              About
             </Link>
            </li>
            <li>
             <Link
             to="/contact"
             className=''
             onClick={CloseMobileMenu}
             >
              Contact
             </Link>
            </li>
            <Link to="login">
         <button>Login</button>
         </Link>

         <Link to="signup">
         <button>Signup</button>
         </Link>
          </ul>

         
    </nav>
  )
}

export default Navbar
