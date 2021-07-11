import React from 'react'
import '../../src/App.css'

function SingIn() {
    return (
        <div className="sing-in">
            <div className="container">
                <div className="sign-in-h1">
                    <h1><i>Login Your Account</i></h1>
                </div>
                <form>
                    <label><i>Username</i></label>
                    <input type="text" className="form-control" placeholder="Username" required></input>
                    <label><i>Password</i></label>
                    <input type="password" className="form-control" placeholder="Password" required minLength = "8"></input>
                    <br />
                    <div className="sign-in-button">
                        <button type="submit" style={{background: "#D18168", borderRadius: "8px"}}><i>Login your E-Commerce account</i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingIn
