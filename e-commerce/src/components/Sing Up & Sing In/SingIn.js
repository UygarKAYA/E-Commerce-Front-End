import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../../App.css'

function SingIn() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory();

    function MongoDBToSingIn() {
        localStorage.setItem(username, password);
        history.push('/');
    }

    return (
        <div className="sing-in">
            <div className="container">
                <div className="sign-in-h1">
                    <h1><i>Login Your Account</i></h1>
                </div>
                <div>
                    <label><i>Username</i></label>
                    <input type="text" className="form-control" placeholder="Username" required onChange={(e)=>setUsername(e.target.value)}></input>
                    <label><i>Password</i></label>
                    <input type="password" className="form-control" placeholder="Password" required minLength = "8" onChange={(e)=>setPassword(e.target.value)}></input>
                    <br />
                    <div className="sign-in-button">
                        <button type="submit" onClick={MongoDBToSingIn} style={{background: "#D18168", borderRadius: "8px"}}><i>Login your E-Commerce account</i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingIn
