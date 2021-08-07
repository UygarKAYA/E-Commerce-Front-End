import React from 'react'
import axios from 'axios'
import {Card, Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import '../../App.css'

function SingUp() {

    const SingUpToMongoDB = event => {
        let name = event.target[0].value;
        let surname = event.target[1].value;
        let email = event.target[2].value;
        let username = event.target[3].value;
        let password = event.target[4].value;

        let SingUpData = {
            name, surname, email,
                username, password
        }

        postSingUpToMongoDB(SingUpData);
    }

    const postSingUpToMongoDB = SingUpData => {
        axios.post('http://localhost:8080/api/users/addUser', SingUpData)
                .then(alert("User Successfully Created"))
                    .catch(error => alert(error));
    }

    return (
        <div className="sing-up">
            <div className="container">
                <Card className={"border border-dark bg-dark text-white"}>
                    <div className="sign-up-h1">
                        <Card.Header>
                            <i>Create Account</i>
                        </Card.Header>
                    </div>
                    <div className="sign-up-form">
                        <Form onSubmit={event => {event.preventDefault(); SingUpToMongoDB(event);}}>
                            <Card.Body>
                                <Form.Row>
                                    <Form.Label><i class="fas fa-signature"></i> <i>Name</i></Form.Label>
                                    <Form.Control type="text" required name="name"
                                                    autoComplete="off"
                                                    className={"bg-dark text-white"}
                                                    style={{marginBottom: '8px'}} 
                                                    placeholder="Enter Your Name" />

                                    <Form.Label><i class="fas fa-signature"></i> <i>Surname</i></Form.Label>
                                    <Form.Control type="text" required name="surname"
                                                  autoComplete="off"
                                                  className={"bg-dark text-white"} 
                                                  style={{marginBottom: '8px'}}
                                                  placeholder="Enter Your Surname" />

                                    <Form.Label><i class="far fa-envelope"></i>&nbsp;<i>E-mail</i></Form.Label>
                                    <Form.Control type="email" required name="email"
                                                  autoComplete="off"
                                                  className={"bg-dark text-white"}
                                                  style={{marginBottom: '8px'}}
                                                  placeholder="Enter Your E-mail" />

                                    <Form.Label><i class="fas fa-signature"></i> <i>Username</i></Form.Label>
                                    <Form.Control type="text" required name="username"
                                                  autoComplete="off"
                                                  className={"bg-dark text-white"}
                                                  style={{marginBottom: '8px'}}
                                                  placeholder="Enter Your Username" />

                                    <Form.Label><i class="fas fa-key"></i> <i>Password</i></Form.Label>
                                    <Form.Control type="password" required name="password"
                                                  autoComplete="off" minLength = "8"
                                                  className={"bg-dark text-white"}
                                                  style={{marginBottom: '4px'}}
                                                  placeholder="Enter Your Password" />

                                    <div className="sign-up-info">
                                        <label><i class="fas fa-info-circle"></i> &nbsp; 
                                            <i>Passwords must be at least 8 characters</i>
                                        </label>
                                    </div>
                                </Form.Row>
                            </Card.Body>
                            <Card.Footer>
                                <div style={{textAlign: 'right'}}>
                                    <Button variant="success" type="submit">
                                        <i class="far fa-hdd"></i> &nbsp;
                                        <i>Create New User</i>
                                    </Button>
                                    &nbsp;
                                    <Button variant="info" type="reset">
                                        <i class="fas fa-undo"></i> &nbsp;
                                        <i>Reset</i>
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

export default SingUp
