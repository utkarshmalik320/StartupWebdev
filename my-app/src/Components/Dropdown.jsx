import React, { useState } from "react";
import { MenuItems } from "./MenuItem";
import { Link } from "react-router-dom";
const Dropdown = () => {
  const [click, SetClick] = useState(false);
  const handleclick = () => SetClick(!click);
  return (
    <>
      <ul
        onClick={handleclick}
        className="flex flex-col focus:outline-none width: 200px position: absolute top: 80px list-style: none text-align: start"
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className= {click ? "active" : "disabled"}
                to={item.path}
                onClick={() => SetClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
