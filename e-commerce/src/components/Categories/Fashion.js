import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import { AddShoppingCart } from '@material-ui/icons';

import celvin_klein from '../../assets/images/Categories/Fashion/celvin-klein.png'
import fred_perry_shoes from '../../assets/images/Categories/Fashion/fred-perry-shoes.png'
import fred_perry from '../../assets/images/Categories/Fashion/fred-perry.png'
import lacoste from '../../assets/images/Categories/Fashion/lacoste.png'
import nike from '../../assets/images/Categories/Fashion/nike.png'
import tommy_hilfiger from '../../assets/images/Categories/Fashion/tommy-hilfiger.png'

const useStyles = makeStyles({
    root: {
      maxWidth: 335,
    }
});

function Fashion({ product, onAddToCart }) {

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
                                    <img className="card-img-top" src={fred_perry} alt="fred_perry" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Shirt</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: Fred Perry</i></h6>
                                        <h6><i>Gender: Male</i></h6>
                                        <h6><i>Color: Green</i></h6>
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
                                    <img className="card-img-top" src={lacoste} alt="lacoste" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>v-necked T-Shirt</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: Lacoste</i></h6>
                                        <h6><i>Gender: Female</i></h6>
                                        <h6><i>Type: 94% cotton</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$35.00</i></h4>
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
                                    <img className="card-img-top" src={fred_perry_shoes} alt="fred_perry_shoes" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Casual Shoes</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: Fred Perry</i></h6>
                                        <h6><i>Size: 44</i></h6>
                                        <h6><i>Color: Brown</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$95.50</i></h4>
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
                                    <img className="card-img-top" src={celvin_klein} alt="celvin_klein" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Bag</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: Celvin Klein</i></h6>
                                        <h6><i>Gender: Female</i></h6>
                                        <h6><i>Color: Black</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$69.99</i></h4>
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
                                    <img className="card-img-top" src={nike} alt="nike" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Dry Strke JSY</i></h3> 
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: Nike</i></h6>
                                        <h6><i>Gender: Female</i></h6>
                                        <h6><i>Color: Black</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$10.50</i></h4>
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
                                    <img className="card-img-top" src={tommy_hilfiger} alt="tommy_hilfiger" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Hat</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Brand: Tommy Hilfiger</i></h6>
                                        <h6><i>Type: Unisex</i></h6>
                                        <h6><i>Color: Navy Blue</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$30.00</i></h4>
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

export default Fashion
