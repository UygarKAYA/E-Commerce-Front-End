import React from 'react'
import {Link} from 'react-router-dom'

import '../../App.css'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="footer-container">
                            <div className="footer-header">
                                <h4><i>About Us</i></h4>
                            </div>
                            <ul className="list-unstyled">
                                <li><i>E-Commerce is an online shopping website closely followed by the global world</i></li>
                                <br/>
                                <li><i>Don't Stay Behind the E-Commerce</i></li>
                            </ul>
                        </div>    
                    </div>

                    <div className="col-sm-3">
                        <div className="footer-container">
                            <div className="footer-header">
                                <h4><i>Categories</i></h4>
                            </div>
                            <ul className="list-unstyled">
                                <li><i><Link to='/Computers&Electronics' className="footer-header-link">Computers & Electronics</Link></i></li>
                                <li><i><Link to='/Books&Movies' className="footer-header-link">Books & Movies</Link></i></li>
                                <li><i><Link to='/SmartHome' className="footer-header-link">Smart Home</Link></i></li>
                                <li><i><Link to='/Fashion' className="footer-header-link">Fashion</Link></i></li>
                                <li><i><Link to='Cosmetics&PersonalCare' className="footer-header-link">Cosmetics & Personal Care</Link></i></li>
                            </ul>
                        </div>    
                    </div>
                    
                    <div className="col-sm-3">
                        <div className="footer-container">
                            <div className="footer-header">
                                <h4><i>Contact Us</i></h4>
                            </div>
                            <ul className="list-unstyled">
                                <li><i>Uygar KAYA</i></li>
                                <li><i>Istanbul, Turkey</i></li>
                                <li><i>uygar.kaya@ozu.edu.tr</i></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <div className="footer-container">
                            <div className="footer-header">
                                <h4><i>Developer</i></h4>
                            </div> 
                            <ul className="list-unstyled">
                                <li><i>Uygar KAYA</i></li>
                                <li><i>Software Engineer Intern at Vitelco</i></li>
                                <li><i>Software Development Department</i></li>
                                <li><i>BSc. Student in Computer Science, Özyeğin University</i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-div-hr"></div>
            </div>
            <div className="container">
                <div className="row" style={{color: "#EAA908"}}>
                    <p className="col-md-8 col-sm-6 col-xs-12">
                    <i>Created By <i>E-Commerce</i> &copy;&nbsp;{new Date().getFullYear()} | All rights reserved</i> 
                    </p>
                </div>
            </div>            
        </div>
    )
}

export default Footer
