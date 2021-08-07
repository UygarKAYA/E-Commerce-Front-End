import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Card, Form, Button} from 'react-bootstrap'
import '../../App.css'

function SingIn() {

    const [, setUsername] = useState('')
    const [, setPassword] = useState('')

    const history = useHistory();

    function MongoDBToSingIn() {
        history.push('/ProductRequest');
    }    

    return (
        <div className="sing-in">
            <div className="container">
                <Card className={"border border-dark bg-dark text-white"}>
                    <div className="sign-in-h1">
                        <Card.Header>
                            <i>Login Your Account</i>
                        </Card.Header>
                    </div>
                    <div className="sign-in-form">
                        <Form onSubmit={MongoDBToSingIn}>
                            <Card.Body>
                                <Form.Row>
                                    <Form.Label><i class="fas fa-signature"></i> <i>Username</i></Form.Label>
                                    <Form.Control type="text" required name="username"
                                                  autoComplete="off"
                                                  className={"bg-dark text-white"}
                                                  style={{marginBottom: '10px'}}
                                                  onChange={(e)=>setUsername(e.target.value)}
                                                  placeholder="Enter Your Username" />

                                    <Form.Label><i class="fas fa-key"></i> <i>Password</i></Form.Label>
                                    <Form.Control type="password" required name="password"
                                                  autoComplete="off" minLength = "8"
                                                  className={"bg-dark text-white"}
                                                  onChange={(e)=>setPassword(e.target.value)}
                                                  placeholder="Enter Your Password" />
                                </Form.Row>
                            </Card.Body>
                            <Card.Footer>
                                <div style={{textAlign: 'right'}}>
                                    <Button variant="success" type="submit">
                                        <i class="far fa-hdd"></i> &nbsp;
                                        <i>Login Your E-Commerce Account To Add New Product</i>
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Form>           
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default SingIn
