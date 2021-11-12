import http from "../config/axios-config";
import { IAuthModel } from "../models/auth.model";

const register = async (userData: IAuthModel) => {

    await http.post("/auth/singup", {
        "username": `${userData.userName}`,
        "email": `${userData.email}`,
        "password": `${userData.password}`,
    });
}

const logIn = async (userData: IAuthModel) => {

    const request = await http.post("/auth/singin", {
        "email": `${userData.email}`,
        "password": `${userData.password}`
    });
    
    return request;
}

const getTokenFromInstance = async (userData: IAuthModel) => {

    const request = await http.post("/auth/singin", {
        "email": `${userData.email}`,
        "password": `${userData.password}`
    });

    return request.headers["auth-token"];
}

const profile = async (authToken:string | null) => {
    
    let request = await http.get("/auth/profile",
        // @ts-ignore
        {
            headers:{
                "auth-token":`${authToken}`
            }
        }
    );

    let response = request.data;
    return response;
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    logIn,
    profile,
    getTokenFromInstance
}

