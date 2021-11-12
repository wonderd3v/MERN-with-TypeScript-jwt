import React, { SyntheticEvent, useState } from 'react';
import { IAuthModel } from "../../models/auth.model"
import authServices from '../../services/auth.services';
import { Redirect } from 'react-router';
import './auth.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    

    let user: IAuthModel = {
        userName:'',
        email: email,
        password: password
    }

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        authServices.logIn(user);

        const token = await authServices.getTokenFromInstance(user);
        localStorage.setItem('token', token);
        setRedirect(true);
    }

    if(redirect){
        return <Redirect to='/' />
    }

    return (
        <div className="form-signin">
            <form onSubmit={submit} className="text-center">
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                     onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                     onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            </form>
        </div>
    )
}

export default Login;
