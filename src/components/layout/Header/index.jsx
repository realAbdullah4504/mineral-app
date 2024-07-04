import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import LogoImg from "./../../../assets/images/logo.jpg";
import hamburgerICon from "./../../../assets/images/hamburger.svg";
import CloseIcon from "./../../../assets/images/x.svg";

const Header =() => {
  const [menuMobile, setMobileMenu] = useState(false);

  const MenuToggle = () => {
    setMobileMenu(prev => !prev);
  }
  return (
  <header className='header_main'>
      <div className='header_inner container hide_on_tab'>
          <div className='header_top'>
            <div className='header_top_inner'>
            <div className="header_column" id="flexible-width-1">
              <div className='header_menu_1'>
                <Link to="#">About Us</Link>
                <Link to="#">News</Link>
                <Link to="#">FAQ`s</Link>
              </div>
            </div>
            <div className="header_column header_logo" id="fixed-width">
              <Link to="/" className='logo_inner'>
              <img src={LogoImg} alt="" />
              </Link>
            </div>
            <div className="header_column" id="flexible-width-2">
            <div className='header_menu_2'>
                <Link to="#">Log In</Link>
                <Link to="#">Sign Up</Link>
              </div>
            </div>
            </div>
          </div>
          <div className='header_bottom'>
            <div className='header_bottom_menu'>
            <Link to="#">Home</Link>
            <Link to="#">Investment</Link>
            <Link to="#">Services</Link>
            <Link to="#">Legal</Link>
            <Link to="#">Fiscal</Link>
            <Link to="#">Statistics</Link>
            <Link to="#">Initiatives</Link>
            <Link to="#">Who is Who</Link>
            <Link to="#">CSR</Link>
            </div>
          </div>
      </div>
      <div className='header_tab'>
          <div className='header_mobile_inner fkex justify-between'>
            <div className="header_column header_logo" id="fixed-width">
              <Link to="/" className='logo_inner'>
              <img src={LogoImg} alt="" />
              </Link>
            </div>
            <div className={`hamburger_icon ${menuMobile ? "open" : ""}`} onClick={MenuToggle}>
            <img src={hamburgerICon} className='hamburger' alt="" />
            <img src={CloseIcon} className='closeicon' alt="" />
            </div>
          </div>
          <div className={`mobile_menu ${menuMobile ? "open" : ""}`}>
            <div className='mobile_menu_title text-white'>
            <div className="header_logo pl-10 pt-4  max-[90%] ml-auto mr-auto">
              <Link to="/" className='logo_inner'>
              <img src={LogoImg} alt="" />
              </Link>
            </div>
            </div>
          <div className='mobile_menu_inner'>
          <Link to="#">About Us</Link>
                <Link to="#">News</Link>
                <Link to="#">FAQ`s</Link>
                <Link to="#">Log In</Link>
                <Link to="#">Sign Up</Link>
                <Link to="#">Home</Link>
            <Link to="#">Investment</Link>
            <Link to="#">Services</Link>
            <Link to="#">Legal</Link>
            <Link to="#">Fiscal</Link>
            <Link to="#">Statistics</Link>
            <Link to="#">Initiatives</Link>
            <Link to="#">Who is Who</Link>
            <Link to="#">CSR</Link>
          </div>
          </div>
      </div>
  </header>
  )
}

export default Header;