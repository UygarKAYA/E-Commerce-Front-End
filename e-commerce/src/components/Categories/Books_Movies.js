import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import { AddShoppingCart } from '@material-ui/icons';

import crime_and_punishment from '../../assets/images/Categories/Books_Movies/crime-and-punishment.png'
import gramophone from '../../assets/images/Categories/Books_Movies/gramophone.png'
import kafa from '../../assets/images/Categories/Books_Movies/kafa.png'
import kapalı_gözler from '../../assets/images/Categories/Books_Movies/kapalı-gözler.png'
import Kindle from '../../assets/images/Categories/Books_Movies/Kindle.png'
import the_social_network from '../../assets/images/Categories/Books_Movies/the-social-network.png'

const useStyles = makeStyles({
    root: {
      maxWidth: 335,
    }
});

function Books_Movies() {

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
                                    <img className="card-img-top" src={crime_and_punishment} alt="crime_and_punishment" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Crime & Punishment</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Print Length: 430 pages</i></h6>
                                        <h6><i>Publisher: Dover Publications</i></h6>
                                        <h6><i>Language: English</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$10.49</i></h4>
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
                                    <img className="card-img-top" src={gramophone} alt="gramophone" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Crosley CR6016A-RE</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Connectivity Technology:	Wired</i></h6>
                                        <h6><i>Material: Wood, Plastic and Metal</i></h6>
                                        <h6><i>Item Weight: 6 Pounds</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$175.90</i></h4>
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
                                    <img className="card-img-top" src={the_social_network} alt="the_social_network" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>The Social Network</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Director:‎ David Fincher</i></h6>
                                        <h6><i>Release date: ‎January 11, 2011</i></h6>
                                        <h6><i>Type: Drama/History</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$5.50</i></h4>
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
                                    <img className="card-img-top" src={kafa} alt="kafa" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Magazine</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Stock Code: KAFA.2107.S082</i></h6>
                                        <h6><i>Realesed Month: July</i></h6>
                                        <h6><i>Volume Number: 82</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$1.75</i></h4>
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
                                    <img className="card-img-top" src={Kindle} alt="Kindle" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Kindle Oasis</i></h3> 
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Connectivity: 4GB LTE</i></h6>
                                        <h6><i>Storage: 32GB storage</i></h6>
                                        <h6><i>Number of Contents: 150</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$269.99</i></h4>
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
                                    <img className="card-img-top" src={kapalı_gözler} alt="kapalı_gözler" style={{height: "250px"}} />
                                    <CardContent style={{background: "#343a40", color: "white"}}>
                                        <h3><i>Close Eyes</i></h3>
                                        <div className="container"> <div className="container-div-hr"></div></div>
                                        <br/>
                                        <h6><i>Record Type: 12" (inch)</i></h6>
                                        <h6><i>Music Genre: Classical</i></h6>
                                        <h6><i>Number of Pieces: 16</i></h6>
                                    </CardContent>
                                    <CardActions disableSpacing className={classes.cardActions}>
                                        <h4><i>$40.90</i></h4>
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

export default Books_Movies
