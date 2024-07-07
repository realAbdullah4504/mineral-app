import React, {useState} from 'react'
import { jwtDecode } from 'jwt-decode';
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from "./../../../assets/images/logo.jpg";
import hamburgerICon from "./../../../assets/images/hamburger.svg";
import CloseIcon from "./../../../assets/images/x.svg";
import {SubMenuInvestment,SubMenuMapsAndReports,SubMenuExpartriateSecurity,
  SubMenuMineralTestingLabs,SubMenuResearchAndDevelopment,SubMenuFiscal,SubMenuStatistics,
  SubMenuIntiatives,SubMenuWhoIsWho,SubMenuCSR,
  SubMenuGovernance,SubMenuActsAndLaws,SubMenuRulesAndRegulations} from "./menu";
  import { getCookie } from 'services/session/cookies';
  import { logOut } from 'utils/helpers';

const Header =() => {
  const [menuMobile, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const token = getCookie('token');
  const userInfo = token ? jwtDecode(token) : {};
  const MenuToggle = () => {
    setMobileMenu(prev => !prev);
  }
  const logoutHandler = () => {
    logOut();
    navigate("/login")
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
              {
                token ? 
                <div className='header_menu_2'>
                <Link to="#">{userInfo?.UserFullName || ""}</Link>
                <Link onClick={()=> logoutHandler()} to="/login">Log out</Link>
                </div>
                : <div className='header_menu_2'>
                <Link to="/login">Log In</Link>
                <Link to="#">Sign Up</Link>
                </div>
              }
            
            </div>
            </div>
          </div>
          <div className='header_bottom'>
            <div className='header_bottom_menu'>
            <Link to="/">Home</Link>
            <ul className='has_sub_menu'>
              <li>Investment
                <ul className='sub_menu'>
                  {SubMenuInvestment?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
                </ul>
              </li>
            </ul>
            <ul className='has_sub_menu'><li>Services
            <ul className='sub_menu services_sub_menus mega_menu'>
            <div className='services_sub_menu_inner'>
            <div className='services_sub_menu'>
                <div className='services_menu_top_left mega_menu_col'>
                  <h3>Maps & Reports</h3>
                  {SubMenuMapsAndReports?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
                </div>
                <div className='services_menu_top_right mega_menu_col'>
                <h3>Expartiate Security Clearance</h3>
                  {SubMenuExpartriateSecurity?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
                </div>
            </div>
              <div className='services_sub_menu'>
                <div className='services_menu_bottom_left mega_menu_col'>
                <h3>Mineral Testing Labs</h3>
                  {SubMenuMineralTestingLabs?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
                </div>
                <div className='services_menu_bottom_right mega_menu_col'>
                <h3>Research & Development</h3>
                  {SubMenuResearchAndDevelopment?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
                </div>
              </div>
            </div>
                 
            </ul>
            </li></ul>
            <ul className='has_sub_menu'><li>Legal
              
            <ul className='sub_menu services_sub_menus mega_menu_legal'>
            <div className='services_sub_menu_inner'>
            <div className='services_sub_menu'>
                <div className='services_menu_top_left mega_menu_col'>
                  <h3>Governance</h3>
                  {SubMenuGovernance?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
                </div>
                <div className='services_menu_top_middle mega_menu_col'>
                <h3>Acts & Laws</h3>
                  {SubMenuActsAndLaws?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
                </div>
                <div className='services_menu_top_right mega_menu_col'>
                <h3>Rules & Regulations</h3>
                  {SubMenuRulesAndRegulations?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
                </div>
            </div>
            </div>
            </ul>

            </li></ul>
            <ul className='has_sub_menu'><li>Fiscal
            <ul className='sub_menu'>
                  {SubMenuFiscal?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
            </ul>
            </li>
            </ul>
            <ul className='has_sub_menu'><li>Statistics
            <ul className='sub_menu'>
                  {SubMenuStatistics?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
            </ul>
            </li></ul>
            <ul className='has_sub_menu'><li>Initiatives
            <ul className='sub_menu'>
                  {SubMenuIntiatives?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
            </ul>
            </li></ul>
            <ul className='has_sub_menu'><li>Who is Who
            <ul className='sub_menu'>
                  {SubMenuWhoIsWho?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
            </ul>  
            </li></ul>
            <ul className='has_sub_menu'><li>CSR
            <ul className='sub_menu right-0'>
                  {SubMenuCSR?.map((data,i) =>
                      <Link to={data?.link} key={i}>{data?.name}</Link>
                      )
                  }
            </ul>
            </li></ul>
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