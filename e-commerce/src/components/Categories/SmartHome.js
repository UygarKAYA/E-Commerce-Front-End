import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import { AddShoppingCart } from '@material-ui/icons';

import dyson from '../../assets/images/Categories/SmartHome/dyson.png'
import light from '../../assets/images/Categories/SmartHome/light.png'
import nespresso from '../../assets/images/Categories/SmartHome/nespresso.png'
import sharp from '../../assets/images/Categories/SmartHome/sharp.png'
import xenon from '../../assets/images/Categories/SmartHome/xenon-smart.jpg'
import xiaomi from '../../assets/images/Categories/SmartHome/xiaomi-robot-vacuum.png'

const useStyles = makeStyles({
    root: {
      maxWidth: 335,
    }
});

function SmartHome() {

    const classes = useStyles();
    // const handleAddToCart = () => onAddToCart(product.id, 1);

    return (
        <div className="categories">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <Card className={classes.root}>
                            <div style={{height: "485px"}}>
                                <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                    <img className="card-img-top" src={xiaomi} alt="xiaomi-robot-vacuum" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Mi Robot Vacuum-Mop</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Battery Capacity: 3200mAh</i></h6>
                                        <h6><i>Wi-Fi: 2.4GHz 802.11 b/g/n</i></h6>
                                        <h6><i>Running Time: 60-130 minutes</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$690.00</i></h4>
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
                        <Card className={classes.root} style={{marginBottom: '15px'}}>
                            <div style={{height: "485px"}}>
                                <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                    <img className="card-img-top" src={dyson} alt="dyson-air-purifier" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Pure Cool Air Purifier</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Filter: 360 degrees Glass HEPA Filter</i></h6>
                                        <h6><i>Technology: Air MultiplierTM</i></h6>
                                        <h6><i>Certified: Asthma Friendly by AAFA</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$549.99</i></h4>
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
                                    <img className="card-img-top" src={nespresso} alt="nespresso-smart-coffe-machine" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Gina Coffee Machine</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Raw Materials: Glass</i></h6>
                                        <h6><i>Module: Cold Drip</i></h6>
                                        <h6><i>Valve: Stainless Steel</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$260.00</i></h4>
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
                                    <img className="card-img-top" src={xenon} alt="xenon-smart-controller" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Wi-Fi Smart Switch</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Wi-Fi Security Mode: WEP.WPA/WPA2</i></h6>
                                        <h6><i>Remote Control: Android / IOSCE, RoHS</i></h6>
                                        <h6><i>Power Supply: AC 100-250V 50/60Hz</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$550.00</i></h4>
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
                                    <img className="card-img-top" src={sharp} alt="sharp-smart-oven" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Sharp Smart Oven</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Edge Performance: 8 Pass Upper-Element</i></h6>
                                        <h6><i>Voltage Height: 240V</i></h6>
                                        <h6><i>Control Panel: LCD Display</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$2499.99</i></h4>
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
                                    <img className="card-img-top" src={light} alt="smart-light-bulb" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Led Smart Light Bulbs</i></h3> 
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Maximum Compatible Wattage: ‎85 Watts</i></h6>
                                        <h6><i>Average Life: 20000 Hours</i></h6>
                                        <h6><i>Type of Bulb: LED</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$119.99</i></h4>
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

export default SmartHome
