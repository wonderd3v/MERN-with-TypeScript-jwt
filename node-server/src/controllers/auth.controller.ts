import { Request, Response } from 'express';
import User, { IUser } from "../models/users.model";
import jwt from 'jsonwebtoken';

const singup = async (req:Request, res:Response) => {
    
    const newUser: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role || 2
    });

    newUser.password = await newUser.encryptPassword(newUser.password);
    const savedUser: IUser = await newUser.save();
    const token: string = jwt.sign({ _id: savedUser._id }, process.env.SECRET_KEY || 'SECRET_PROVISIONAL')

    res.header('auth-token', token).send(savedUser);
}

const singin = async (req:Request, res:Response) => {
    
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json('Email wrong');

    const correctPassword = await user.validatePassword(req.body.password);
    if (!correctPassword) return res.status(400).json('Invalid Password');

    const token: string = jwt.sign({ _id: user._id }, process.env.SECRET_KEY || 'SECRET_PROVISIONAL',{
        expiresIn: 900
    })

    res.header('auth-token', token).send(user);
}

const profile = async (req:Request, res:Response) => {
    // @ts-ignore
    const user = await User.findById(req.userId, {password: 0});
    if (!user) return res.status(404).json("No user found");

    res.json(user);
}

const logout = async (req:Request, res:Response) => {
    // @ts-ignore
    res.cookie( 'jwt', '', {expiresIn: 0} );
    res.send({
        message: 'success'
    })
}

export {
    singup,
    singin,
    profile
}