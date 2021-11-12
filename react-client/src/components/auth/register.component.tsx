
import React, { SyntheticEvent, useState } from "react";
import authService from "../../services/auth.services";
import { IAuthModel } from "../../models/auth.model";
import { Redirect } from 'react-router-dom';

const Register = () => {
    
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false)

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        
        let newUser: IAuthModel = {
            userName: userName,
            email: email,
            password: password
        }
        authService.register(newUser);
        setRedirect(true);  
    }
    
    if(redirect){
        return <Redirect to="/login" />
    }

    return <>
       <div className="form-signin">
            <form onSubmit={submit} className="text-center">
                <h1 className="h3 mb-3 fw-normal">Register </h1>

                <input type="text" className="form-control" id="floatingInput" placeholder="Username"
                    onChange={e => setUserName(e.target.value)}
                />

                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                     onChange={e => setEmail(e.target.value)}
                />

                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                     onChange={e => setPassword(e.target.value)}
                />

                <button className="w-100 btn btn-lg btn-primary" type="submit"> Submit</button>
            </form>
        </div>
    </>
};

export default Register;