import React from 'react'
import axios from 'axios'
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
                <div className="sign-up-h1">
                    <h1><i>Create Account</i></h1>
                </div>
                <div className="sign-up-form">
                    <form onSubmit={event => {event.preventDefault(); SingUpToMongoDB(event);}}>
                        <label><i>Name</i></label>
                        <input type="text" className="form-control" placeholder="Name" required style={{marginBottom: '8px'}}></input>
                        <label><i>Surname</i></label>
                        <input type="text" className="form-control" placeholder="Surname" required style={{marginBottom: '8px'}}></input>
                        <label><i>E-mail</i></label>
                        <input type="email" className="form-control" placeholder="E-mail" required style={{marginBottom: '8px'}}></input>
                        <label><i>Username</i></label>
                        <input type="text" className="form-control" placeholder="Username" required style={{marginBottom: '8px'}}></input>
                        <label><i>Password</i></label>
                        <input type="password" className="form-control" placeholder="Password" required minLength = "8"></input>
                        <div className="sign-up-info">
                            <label><i class="fas fa-info-circle"></i> &nbsp; 
                                <i>Passwords must be at least 8 characters</i>
                            </label>
                        </div>
                        <div className="sign-up-button">
                            <button type="submit">
                                <i>Create your E-Commerce account</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingUp
