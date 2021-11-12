import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props:{user:{}}) => {
  
    return <>
        <div className="card m-auto w-50" >

            <div className="card-body">
                {/*// @ts-ignore */}
                <h5 className="card-title">{props.user.username ? props.user.username : 'No estas logeado'}</h5>
                {/*// @ts-ignore */}
                <h6 className="card-subtitle mb-2 text-muted">{props.user.email ? props.user.email : ''}</h6>
                {/*// @ts-ignore */}
                <p className="card-text"> {props.user.username ? `Hola de nuevo ${props.user.username} esperemos que te encuentres bien` : ''} </p>

                 <Link to="/home"className="btn btn-dark">Go to courses</Link>   
            </div>
        </div>
    </>
}

export default Profile;