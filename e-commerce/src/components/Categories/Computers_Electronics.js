import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import { AddShoppingCart } from '@material-ui/icons';

import airpods from '../../assets/images/Categories/Computers_Electronics/airpods.png'
import canon from '../../assets/images/Categories/Computers_Electronics/canon.png'
import iphone from '../../assets/images/Categories/Computers_Electronics/iphone.png'
import macbook from '../../assets/images/Categories/Computers_Electronics/macbook.png'
import playstation from '../../assets/images/Categories/Computers_Electronics/playstation.png'
import vestel from '../../assets/images/Categories/Computers_Electronics/vestel.png'

const useStyles = makeStyles({
    root: {
      maxWidth: 335,
    }
});

function Computers_Electronics({ product, onAddToCart }) {

    const classes = useStyles();
    // const handleAddToCart = () => onAddToCart(product.id, 1);

    return (
        <div className="computers-electronics">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <Card className={classes.root} style={{marginBottom: '15px'}}>
                            <div style={{height: "485px"}}>
                                <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                    <img className="card-img-top" src={airpods} alt="airpods" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>AirPods</i></h3>
                                        <div className="container"> <div className="footer-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Chip: H1 headphone chip</i></h6>
                                        <h6><i>Connectivity: Bluetooth 5.0</i></h6>
                                        <h6><i>Sensors: Dual beamforming microphones</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$199.00</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0"}}>
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
                                    <img className="card-img-top" src={canon} alt="canon-camera" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Canon EOS R5</i></h3>
                                        <div className="container"> <div className="footer-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Focusing: Dual Pixel CMOS AF</i></h6>
                                        <h6><i>Viewfinder: 0.5 inch OLED color EVF</i></h6>
                                        <h6><i>Flash: E-TTL II Auto Flash</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$3899.00</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0"}}>
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
                                    <img className="card-img-top" src={iphone} alt="iphone" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Iphone 12 Pro Max</i></h3>
                                        <div className="container"> <div className="footer-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Chip: A14 Bionic chip</i></h6>
                                        <h6><i>Operating System: iOS 14</i></h6>
                                        <h6><i>Sensors: LiDAR Scanner, Three‑axis gyro</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$1099.00</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0"}}>
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
                                    <img className="card-img-top" src={playstation} alt="playstation" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>PlayStation 5</i></h3>
                                        <div className="container"> <div className="footer-div-hr"></div></div>
                                        <br/>
                                        <h6><i>CPU: 8x Zen 2 Cores at 3.5GHz with SMT</i></h6>
                                        <h6><i>RAM: 16 GB GDDR6/256-bit RAM</i></h6>
                                        <h6><i>GPU: 10.28 TFLOPS, 36 CUs at 2.23GHz</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$499.99</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0"}}>
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
                                    <img className="card-img-top" src={macbook} alt="macbook" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Apple MacBook Pro</i></h3> 
                                        <div className="container"> <div className="footer-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Chip: M1 Chip with 8-Core</i></h6>
                                        <h6><i>Storage: 512GB SSD storage</i></h6>
                                        <h6><i>RAM: 8GB Accsess Memory</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$1499.00</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0"}}>
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
                                    <img className="card-img-top" src={vestel} alt="vestel-television" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Vestel 50U9510 TV</i></h3>
                                        <div className="container"> <div className="footer-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Resolution: 4K Ultra HD (3840 x 2160)</i></h6>
                                        <h6><i>Operating System: QUI</i></h6>
                                        <h6><i>Number of Cores: 4 Cores</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$599.00</i></h4>
                                        <IconButton aria-label="Add to Cart" 
                                                    // onClick={handleAddToCart} 
                                                        style={{position: "absolute", right: "0"}}>
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

export default Computers_Electronics
