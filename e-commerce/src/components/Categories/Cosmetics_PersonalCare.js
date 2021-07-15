import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import { AddShoppingCart } from '@material-ui/icons';

import garnier_skincare from '../../assets/images/Categories/Cosmetics_Personal Care/garnier-skincare.png'
import la_roche_posay from '../../assets/images/Categories/Cosmetics_Personal Care/la-roche-posay-sun-creame.png'
import lacoste_red from '../../assets/images/Categories/Cosmetics_Personal Care/lacoste-red.png'
import oralB from '../../assets/images/Categories/Cosmetics_Personal Care/oralB.png'
import philips from '../../assets/images/Categories/Cosmetics_Personal Care/philips.png'
import tresemme from '../../assets/images/Categories/Cosmetics_Personal Care/tresemme.png'

const useStyles = makeStyles({
    root: {
      maxWidth: 335,
    }
});

function Cosmetics_PersonalCare({ product, onAddToCart }) {

    const classes = useStyles();
    // const handleAddToCart = () => onAddToCart(product.id, 1);

    return (
        <div className="categories">
            <div className="container">
                <div className="row">
                <div className="col-sm-4">
                        <Card className={classes.root} style={{marginBottom: '15px'}}>
                            <div style={{height: "485px"}}>
                                <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                    <img className="card-img-top" src={tresemme} alt="tresemme" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Expert Step-2</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: TRESemmé</i></h6>
                                        <h6><i>Hair Type: Thick</i></h6>
                                        <h6><i>Liquid Volume: 25 Fluid Ounces</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$25.00</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0", color:"black"}}>
                                            <AddShoppingCart />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </div>    
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card className={classes.root}>
                            <div style={{height: "485px"}}>
                                <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                    <img className="card-img-top" src={garnier_skincare} alt="garnier_skincare" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Power White</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: Garnier Men</i></h6>
                                        <h6><i>Including: Ultra-Absorbent Charcoal</i></h6>
                                        <h6><i>Duties: Cleansing, Exfoliation and Mask</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$6.99</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0", color:"black"}}>
                                            <AddShoppingCart />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </div>    
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card className={classes.root}>
                            <div style={{height: "485px"}}>
                                <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                    <img className="card-img-top" src={philips} alt="philips" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Shaver Hair Clipper</i></h3> 
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Shaving Area: Beard</i></h6>
                                        <h6><i>Type: Wireless</i></h6>
                                        <h6><i>Blade System: V-Track pro</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$235.00</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0", color:"black"}}>
                                            <AddShoppingCart />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </div>    
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card className={classes.root}>
                            <div style={{height: "485px"}}>
                                <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                    <img className="card-img-top" src={lacoste_red} alt="lacoste_red" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Red Pour Homme Edt</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: Lacoste</i></h6>
                                        <h6><i>Ingredients: Aqua/Water/Eau</i></h6>
                                        <h6><i>Item Weight: 125 ml</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$34.99</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0", color:"black"}}>
                                            <AddShoppingCart />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </div>    
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card className={classes.root}>
                            <div style={{height: "485px"}}>
                                <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                    <img className="card-img-top" src={la_roche_posay} alt="la_roche_posay_sun_cream" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Anthelios Melt in Milk</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: La Roche Posay</i></h6>
                                        <h6><i>Protection: UVA, UVB, Infrared-A rays</i></h6>
                                        <h6><i>Application: Face, Neck, Decollete area</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$20.00</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0", color:"black"}}>
                                            <AddShoppingCart />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </div>    
                        </Card>
                    </div>

                    <div className="col-sm-4">
                        <Card className={classes.root}>
                            <div style={{height: "485px"}}>
                                <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                    <img className="card-img-top" src={oralB} alt="oralB" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Vitality Cross Action</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: Oral-B</i></h6>
                                        <h6><i>Power Source: Rechargeable Battery</i></h6>
                                        <h6><i>Type: Electric Toothbrush</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$17.50</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0", color:"black"}}>
                                            <AddShoppingCart />
                                        </IconButton>
                                    </CardActions>
                                </div>
                            </div>    
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cosmetics_PersonalCare
