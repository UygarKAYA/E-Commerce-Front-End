import React from 'react'
import data from '../data'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton'
import { AddShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
      maxWidth: 335,
    }
});

function Computers_Electronics(props) {

    const classes = useStyles();
    const {addProduct} = props

    return (
        <div className="categories">
            <div className="container">
                <div className="row">
                    {data.Computer_and_Electronics.map((product) => (
                        <div className="col-sm-4" key={product.id}>
                            <Card className={classes.root} style={{marginBottom: '15px'}}>
                                <div style={{height: "485px"}}>
                                    <div className="card text-white bg-dark mb-3 card text-center" style={{height: "500px"}}>
                                        <img className="card-img-top" src={product.image} alt={product.name} style={{height: "250px"}} />
                                        <CardContent style={{background: "#343a40", color: "white"}}>
                                            <h3><i>{product.name}</i></h3>
                                            <div className="container"> <div className="container-div-hr"></div></div>
                                            <br/>
                                            <h6><i>{product.description_1}</i></h6>
                                            <h6><i>{product.description_2}</i></h6>
                                            <h6><i>{product.description_3}</i></h6>
                                        </CardContent>
                                        <CardActions disableSpacing className={classes.cardActions}>
                                            <h4><i>${product.price}</i></h4>
                                            <IconButton aria-label="Add to Cart" 
                                                         onClick={addProduct} 
                                                            style={{position: "absolute", right: "0", color:"black"}}>
                                                <AddShoppingCart />
                                            </IconButton>
                                        </CardActions>
                                    </div>
                                </div>    
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Computers_Electronics
