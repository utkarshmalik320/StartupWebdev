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
    <nav className=' bg-[#E5E5E5] p-4 h-16 flex items-center justify-between'>
        <Link to='/' className='text-black ml-10 font-bold text-xl' onClick={CloseMobileMenu}>
          Lando
         
        </Link>
          <ul className='mx-5 flex space-x-5 items-center  mr-4 justify-between  p-4'>
            <li>
             <Link
             to="/home"
             className='mr-4 hover:text-blue '
             onClick={CloseMobileMenu}
             >
              Home
             </Link>
            </li>
            <li
            className='mr-4'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
             <Link
             to="/pricing"
             className='mr-4'
             onClick={CloseMobileMenu}
             >
              Pricing  <i className='fas fa-caret-down' />
             </Link>
             {dropdown && <Dropdown/>}
            </li>

            <li>
             <Link
             to="/aboutus"
             className='mr-4'
             onClick={CloseMobileMenu}
             >
              About
             </Link>
            </li>
            <li>
             <Link
             to="/contact"
             className='mr-4'
             onClick={CloseMobileMenu}
             >
              Contact
             </Link>
            </li>
          </ul>
            <div>
            <Link to="login">
          <button class="  text-black font-bold py-2 px-4 rounded">
            Login
          </button>
         </Link>

         <Link to="signup">
         <button class="bg-[#3164F3] hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
              Signup
            </button>
         </Link>
            </div>
         
    </nav>
  )
}

export default Navbar
