import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
// import {Button} from './Button/Button';

import '../../App.css'

function Header() {

    const [click, setClick] = useState(false);
    const [, setButton] = useState(true);

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
                        <NavLink to="/Products" className="HeaderLinks" onClick={closeMenu}>
                            <i>Products</i> &nbsp; <i class="fas fa-tags"></i>
                        </NavLink>
                    </li>
                    <li className="HeaderItem">
                        <NavLink to="/ShoppingCart" className="HeaderLinks" onClick={closeMenu}>
                            <i>Shopping Cart</i> &nbsp; <i class="fas fa-cart-arrow-down"></i>
                        </NavLink>
                    </li>
                    <li className="HeaderItem">
                        <NavLink to="/SignIn" className="HeaderLinkss" onClick={closeMenu}>
                            <i>Sing In</i>
                        </NavLink>
                    </li>
                    <li className="HeaderItem">
                        <NavLink to="/SingUp" className="HeaderLinkss" onClick={closeMenu}>
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