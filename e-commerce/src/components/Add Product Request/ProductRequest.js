import React, {Component} from 'react'
import axios from 'axios'
import {Card, Table, ButtonGroup} from 'react-bootstrap'
import {Form, Button, Col} from 'react-bootstrap'

class ProductRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requestProduct: [],
            name: '', price: '', categories: '', 
                description1: '', description2: '', description3: ''
        }

        this.productRequestToMongoDB = this.productRequestToMongoDB.bind(this)
        this.submitChange = this.submitChange.bind(this)
    }

    requestProductDefaultData = {
        name: '', price: '', categories: '', 
            description1: '', description2: '', description3: ''
    }

    submitChange = event => {this.setState ({ [event.target.name]: event.target.value })}
    resetProduct = () => {this.setState(() => this.requestProductDefaultData)}

    // @GetMapping
    componentDidMount() {
        axios.get('http://localhost:8080/api/requestProducts/allRequestProducts')
            .then(response => response.data)
            .then(data => {this.setState({requestProduct: data})})
    }

    // @PostMapping
    productRequestToMongoDB(event) {
        
        event.preventDefault();
        const productRequestData = {
            productName: this.state.name,
            productPrice: this.state.price, 
            productCategories: this.state.categories, 
            firstDescription: this.state.description1,
            secondDescription: this.state.description2,
            thirdDescription: this.state.description3
        }

        axios.post("http://localhost:8080/api/requestProducts/addRequestProducts", productRequestData)
            .then(response => {
                if(response.data != null) {
                    alert("The Request has been Successfully Added");
                    this.setState(this.requestProductDefaultData);
                }
            })
    }

    // @DeleteMapping
    deleteRequestProduct = (requestProductID) => {
        axios.delete("http://localhost:8080/api/requestProducts/deletePurchasedProducts/" + requestProductID)
            .then(
                this.setState({
                    requestProduct: this.state.requestProduct.filter(requestProductt => requestProductt.id !== requestProductID)
                })
            )
    }

    // @GetMapping
    // componentDidUpdate() {
    //     const requestProductID = +this.props.match.params.ID;

    //     if(requestProductID) {
    //         axios.get('http://localhost:8080/api/requestProducts/allRequestProductsByID/' + requestProductID)
    //             .then(response => {
    //                 if(response.data != null) {
    //                     this.setState({
    //                         ID: response.data.ID,
    //                         name: response.data.name, 
    //                         price: response.data.price, 
    //                         categories: response.data.categories, 
    //                         description1: response.data.description1, 
    //                         description2: response.data.description2,
    //                         description3: response.data.description3 
    //                     })
    //                 }
    //             })
    //     }
    // }

    render() {
        return (
            <div className="productRequest">
                <div className="container">
                    <div className="productRequestInfo">
                        <Card className={"border border-dark bg-dark text-white"}>
                            <Card.Header style={{textAlign: 'center'}}>
                                <i>Add Request Product</i>
                            </Card.Header>
                            <Form onReset={this.resetProduct} onSubmit={this.productRequestToMongoDB} id="RequestFormID">
                                <Card.Body>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridName">
                                            <Form.Label><i class="fas fa-signature"></i> <i>Product Name</i></Form.Label>
                                            <Form.Control type="text" required name="name"
                                                          value={this.state.name} 
                                                          onChange={this.submitChange}
                                                          autoComplete="off"
                                                          className={"bg-dark text-white"} 
                                                          placeholder="Enter Product Name" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridPrice">
                                            <Form.Label><i class="fas fa-barcode"></i> <i>Product Price</i></Form.Label>
                                            <Form.Control type="text" required name="price"
                                                          value={this.state.price}
                                                          onChange={this.submitChange}
                                                          autoComplete="off"
                                                          className={"bg-dark text-white"} 
                                                          placeholder="Enter Product Price" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridCategories">
                                            <Form.Label><i class="fas fa-align-left"></i> <i>Product Categories</i></Form.Label>
                                            <Form.Control type="text" required name="categories"
                                                          value={this.state.categories} 
                                                          onChange={this.submitChange}
                                                          autoComplete="off"
                                                          className={"bg-dark text-white"} 
                                                          placeholder="Enter Product Categories" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridDescription1">
                                            <Form.Label><i class="fas fa-pencil-alt"></i> <i>Product Description 1</i></Form.Label>
                                            <Form.Control type="text" required name="description1"
                                                          value={this.state.description1} 
                                                          onChange={this.submitChange}
                                                          autoComplete="off"
                                                          className={"bg-dark text-white"} 
                                                          placeholder="Enter Product Description" />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGridDescription2">
                                            <Form.Label><i class="fas fa-pencil-alt"></i> <i>Product Description 2</i></Form.Label>
                                            <Form.Control type="text" required name="description2"
                                                          value={this.state.description2} 
                                                          onChange={this.submitChange}
                                                          autoComplete="off"
                                                          className={"bg-dark text-white"} 
                                                          placeholder="Enter Product Description" />
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="formGridDescription3">
                                            <Form.Label><i class="fas fa-pencil-alt"></i> <i>Product Description 3</i></Form.Label>
                                            <Form.Control type="text" required name="description3"
                                                          value={this.state.description3} 
                                                          onChange={this.submitChange}
                                                          autoComplete="off"
                                                          className={"bg-dark text-white"} 
                                                          placeholder="Enter Product Description" />
                                        </Form.Group>
                                    </Form.Row>
                                </Card.Body>
                                <Card.Footer>
                                    <div style={{textAlign: 'right'}}>
                                        <Button variant="success" type="submit">
                                            <i class="far fa-hdd"></i> &nbsp;
                                            <i>Add New Request</i>
                                        </Button>
                                        &nbsp;
                                        <Button variant="info" type="reset">
                                            <i class="fas fa-undo"></i> &nbsp;
                                            <i>Reset</i>
                                        </Button>
                                    </div>
                                </Card.Footer>
                            </Form>
                        </Card>    
                    </div>
                    <br />
                    <div className="productRequestTable">
                        <Card className={"border border-dark bg-dark text-white"}>
                            <Card.Header style={{fontSize: '20px'}}>
                                <i>Request Product</i>
                            </Card.Header>
                            <div className="col-sm-1">
                                <Card.Body>
                                    <Table bordered hover striped variant="dark">
                                        <thead>
                                            <tr>
                                                <th style={{paddingRight: '49px', paddingLeft: '50px'}}><i>Name</i></th>
                                                <th style={{paddingRight: '20px', paddingLeft: '20px'}}><i>Price</i></th>
                                                <th style={{paddingRight: '37px', paddingLeft: '38px'}}><i>Categories</i></th>
                                                <th style={{paddingRight: '49px', paddingLeft: '50px'}}><i>Description</i></th>
                                                <th style={{paddingRight: '49px', paddingLeft: '50px'}}><i>Description</i></th>
                                                <th style={{paddingRight: '49px', paddingLeft: '50px'}}><i>Description</i></th>
                                                <th style={{paddingRight: '10px', paddingLeft: '10px'}}><i>Delete</i></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.requestProduct.length === 0 ? (
                                                    <tr>
                                                        <td colSpan='8' style={{textAlign: 'center'}}><i>There are no Request to Add the MongoDB Database</i></td>
                                                    </tr>
                                                ) : (
                                                    this.state.requestProduct.map((requestProducts) => (
                                                        <tr key={requestProducts.id}>
                                                            <td><i>{requestProducts.productName}</i></td>
                                                            <td><i>{requestProducts.productPrice}</i></td>
                                                            <td><i>{requestProducts.productCategories}</i></td>
                                                            <td><i>{requestProducts.firstDescription}</i></td>
                                                            <td><i>{requestProducts.secondDescription}</i></td>
                                                            <td><i>{requestProducts.thirdDescription}</i></td>
                                                            <td>
                                                                <ButtonGroup>
                                                                    {/* <Button size='sm' variant='outline-primary' onClick={this.requestProductByID.bind(this, requestProducts.id)}><i class="far fa-edit"></i></Button> */}
                                                                    {/* &nbsp; */}
                                                                    <Button variant='outline-danger' onClick={this.deleteRequestProduct.bind(this, requestProducts.id)}><i class="fas fa-trash"></i></Button>
                                                                </ButtonGroup>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )
                                            }   
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductRequest