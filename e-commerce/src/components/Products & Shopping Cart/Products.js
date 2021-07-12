import React from 'react'
import {Link} from 'react-router-dom'

import ComputersElectronics from '../../assets/images/computer&Electronics.png'
import SmartHome from '../../assets/images/smartHome.png'
import Fashion from '../../assets/images/fashion.jpg'
import BooksMovies from '../../assets/images/book&movies.png'
import CosmeticsPersonalCare from '../../assets/images/cosmetics&PersonalCare.png'

import '../../App.css'

function Products() {
    return (
        <div className="products">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card text-white bg-dark mb-3 card text-center" style={{width: "32rem"}}>
                            <img className="card-img-top" src={ComputersElectronics} alt="CardImage" />
                            <div className="card-body">
                                <h5 className="card-title"><i>Computers & Electronics</i></h5>
                                <p className="card-text"><i>You can find products related to Computer & Electronics appliances here</i></p>
                                <Link to="/Computers&Electronics" target= "_blank" className="btn btn-primary"><i>Computers & Electronics</i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="card text-white bg-danger mb-3 card text-center" style={{width: "32rem"}}>
                            <img className="card-img-top" src={SmartHome} alt="CardImage" />
                            <div className="card-body">
                                <h5 className="card-title"><i>Smart Home</i></h5>
                                <p className="card-text"><i>You can find products related to smart home appliances here</i></p>
                                <Link to="/SmartHome" target= "_blank" className="btn btn-primary"><i>Smart Home</i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card text-white bg-warning mb-3 card text-center" style={{width: "20rem"}}>
                            <img className="card-img-top" src={BooksMovies} alt="CardImage" />
                            <div className="card-body">
                                <h5 className="card-title"><i>Books & Movies</i></h5>
                                <p className="card-text"><i>You can find products related to Books & Movies appliances here</i></p>
                                <Link to="/Books&Movies" target= "_blank" className="btn btn-primary"><i>Books & Movies</i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card bg-light mb-3 card text-center" style={{width: "20rem"}}>
                            <img className="card-img-top" src={Fashion} alt="CardImage" />
                            <div className="card-body">
                                <h5 className="card-title"><i>Fashion</i></h5>
                                <p className="card-text"><i>You can find products related to Fashion appliances here</i></p>
                                <Link to="/Fashion" target= "_blank" className="btn btn-primary"><i>Fashion</i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card text-white bg-success mb-3 card text-center" style={{width: "20rem"}}>
                            <img className="card-img-top" src={CosmeticsPersonalCare} alt="CardImage" />
                            <div className="card-body">
                                <h5 className="card-title"><i>Cosmetics & Personal Care</i></h5>
                                <p className="card-text"><i>You can find Cosmetics & Personal Care products here</i></p>
                                <Link to="/Cosmetics&PersonalCare" target= "_blank" className="btn btn-primary"><i>Cosmetics & Personal Care</i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
