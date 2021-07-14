import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import airpords from '../../assets/images/Categories/Computers_Electronics/airpods.png'
// import canon from '../../assets/images/Categories/Computers_Electronics/canon.png'
// import iphone from '../../assets/images/Categories/Computers_Electronics/iphone.png'
// import macbook from '../../assets/images/Categories/Computers_Electronics/macbook.png'
// import playstation from '../../assets/images/Categories/Computers_Electronics/playstation.png'
// import vestel from '../../assets/images/Categories/Computers_Electronics/vestel.png'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    }
});

function Computers_Electronics() {
    const classes = useStyles();
    return (
        <div className="computers-electronics">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card text-center">
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="airpods" image={airpords}/>
                                    <CardContent style={{background: "green"}}>
                                        <h3>Airpods</h3>
                                        <p> Lizards are a widespread group of squamate reptiles, with over 6,000 species, 
                                            ranging across all continents except Antarctica</p>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <h3>150$</h3>
                                    <div className="card-right" style={{width: "18rem"}}>
                                        <Button size="small" color="primary">
                                        Learn More
                                        </Button>
                                    </div>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Computers_Electronics
