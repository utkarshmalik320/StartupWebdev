import React, { useState } from 'react'
import { MenuItems } from './MenuItem';
import { Link } from 'react-router-dom';
const Dropdown = () => {

  const [ click, SetClick] = useState(false);
  const handleclick = () => SetClick(!click)
  return (
   <>
      <ul
      onClick={handleclick}
      className=""
      >
       { MenuItems.map((item ,index) =>{
       return ( <li key={index}>
            <Link
            className ={item.cName}
            to ={item.path}
            onClick = {() => SetClick(false)}
            >
              {item.title}
            </Link>
        </li>
       );
        })}
      </ul>
   </>
  )
}

export default Dropdown
