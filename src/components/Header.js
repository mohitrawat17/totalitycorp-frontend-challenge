import React, { useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../images/logo.png'
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-row max-sm:flex-col items-center bg-white shadow-lg" style={{fontFamily: 'Kanit',fontFamily: 'sans-serif'}}>

      {/* title */}
      <Link to="/home" className="w-full">
      <div className="ml-10 flex justify-start items-center">
      <img className="w-6 h-6" src={logo}></img>
        <h1 className="pl-2 text-orange-500 py-4 font-bold text-3xl sm:text-xl sm:font-semibold sm:py-3">Shoppy</h1>
      </div>
      </Link>

      {/* nav item for small screen */}
      <div className="flex max-sm:flex-row justify-end mr-2 w-full">
        {/* Hamburger menu icon */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {showMenu ? (
              <CloseIcon />
            ) : (
              <MenuIcon/>
            )}
          </button>
        </div>

        

        {/* Nav items */}
        <ul className={` flex flex-col sm:flex-row ${showMenu ? "flex" : "hidden"} sm:flex`}>
        <Link to="/home" className=" hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-6">  <li>
            Home
          </li>
          </Link>

          <Link to="/home/contact" className=" hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-6">
          <li>
            Contact
          </li>
          </Link>
          <Link to="/home/deals" className="whitespace-nowrap hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-6">
          <li>
            Today's Deals
          </li>
          </Link>

          <Link to="/home/help" className=" hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-6">
          <li>
            Help
          </li>
          </Link>

          <Link to="/" className=" hover:text-orange-400 mb-2 sm:mb-0 mr-0 sm:mr-6">
          <li>
            Logout
          </li>
          </Link>
        </ul>
      </div>

 {/* features in header */}
 <div className="flex justify-end  w-5/6 my-5 mr-4 max-sm:-mr-10">
    

    {/* cart */}
    <Link to="/home/cart">
    <div className="flex items-center mr-3 cursor-pointer hover:text-orange-400">
      <ShoppingCartIcon />
      <div className="text-xs sm:text-base ml-1">Cart</div>
    </div>
    </Link>

    <div className="flex items-center cursor-pointer">
    <PersonIcon/>
      <div className="ml-1">{localStorage.getItem("Username").replace(/"/g,"")}</div>
    </div>
  </div>
     
    </div>
  );
};

export default Header;
