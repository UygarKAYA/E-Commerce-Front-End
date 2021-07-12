import React from 'react'
import '../../App.css'

function SingUp() {
    return (
        <div className="sing-up">
            <div className="container">
                <div className="sign-up-h1">
                    <h1><i>Create Account</i></h1>
                </div>
                <form>
                    <label><i>Name</i></label>
                    <input type="text" className="form-control" placeholder="Name" required></input>
                    <label><i>Surname</i></label>
                    <input type="text" className="form-control" placeholder="Surname" required></input>
                    <label><i>E-mail</i></label>
                    <input type="email" className="form-control" placeholder="E-mail" required></input>
                    <label><i>Username</i></label>
                    <input type="text" className="form-control" placeholder="Username" required></input>
                    <label><i>Password</i></label>
                    <input type="password" className="form-control" placeholder="Password" required minLength = "8"></input>
                    <label><i class="fas fa-info-circle"></i> &nbsp; <i>Passwords must be at least 8 characters</i></label>
                    <br />
                    <div className="sign-up-button">
                        <button type="submit" style={{background: "#D18168", borderRadius: "8px"}}><i>Create your E-Commerce account</i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingUp
