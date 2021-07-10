// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../src/assets/images/Logo.png'
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from './Button';
import './Header.css'

function Header() {

    const [click, setClick] = useState(false);
    const [button_, setButton] = useState(true);

    const reverseClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButtons = () => {
        if(window.innerWidth <= 960)
            setButton(false);
        else 
            setButton(true);
    }

    useEffect(() => {
        showButtons();
    }, [])

    window.addEventListener('resize', showButtons);

    return (
        <>
          <nav className="Header">
            <div className = "HeaderContainer">
                <NavLink to="/" className="HeaderLogo" onClick={closeMenu}>
                    <img src={Logo} alt="Logo" /><i>E-Commerce</i>  
                </NavLink>
                <div className="HeaderMenu" onClick={reverseClick} >
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}  />
                </div>

                <ul className={click ? 'HeaderNavActive' : 'HeaderNav'}>
                    <li className="HeaderItem">
                        <NavLink to="/products" className="HeaderLinks" onClick={closeMenu}>
                            <i>Products</i>
                        </NavLink>
                    </li>
                    <li className="HeaderItem">
                        <NavLink to="/shopping-cart" className="HeaderLinks" onClick={closeMenu}>
                            <i>Shopping Cart</i> &nbsp; <i class="fas fa-cart-arrow-down"></i>
                        </NavLink>
                    </li>
                    <li className="HeaderItem">
                        <NavLink to="/sign-in" className="HeaderLinkss" onClick={closeMenu}>
                            <i>Sing In</i>
                        </NavLink>
                    </li>
                    <li className="HeaderItem">
                        <NavLink to="/sing-up" className="HeaderLinkss" onClick={closeMenu}>
                            <i>Sign Up</i>
                        </NavLink>
                    </li>
                </ul>
            </div>
          </nav>
        </>
    );
};

export default Header;