import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
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
                <div className="sign-in-h1">
                    <h1><i>Login Your Account</i></h1>
                </div>
                <form onSubmit={MongoDBToSingIn}>
                    <label><i>Username</i></label>
                    <input type="text" className="form-control" placeholder="Username" required onChange={(e)=>setUsername(e.target.value)} style={{marginBottom: '8px'}}></input>
                    <label><i>Password</i></label>
                    <input type="password" className="form-control" placeholder="Password" required minLength = "8" onChange={(e)=>setPassword(e.target.value)}></input>
                    <br />
                    <div className="sign-in-button">
                        <button type="submit">
                            <i>Login your E-Commerce account to Add New Product</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingIn
