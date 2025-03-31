import express from "express";
import User from "../models/User";
import {createUser, verifyUserCredentials} from "../database/prisma-data-store";
import jwt,{Secret} from 'jsonwebtoken';

const router = express.Router();

router.post("/login", async (req, res) => {
    console.log('Login')
    console.log(req.body); // Log to check structure
    const username = req.body.user.username;
    const password = req.body.user.password;

    const user : User = {username, password};

    try{
        const isVerified =  await verifyUserCredentials(user);

        if(isVerified){
            const token = jwt.sign({ username }, process.env.SECRET_KEY as Secret, {expiresIn: "15m"});
            const refreshToken = jwt.sign({ username }, process.env.REFRESH_TOKEN as Secret, {expiresIn: "7d"});
            console.log(token);
            res.json({accessToken : token, refreshToken : refreshToken});
        }else{
            res.status(403).send('Invalid credentials');
        }
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }

})
router.post("/register", async (req, res) => {
    console.log('Register', req.body);
    const username = req.body.user.username;
    const password = req.body.user.password;

    const user : User = {username, password};

    try{
        const registration = await createUser(user);
        res.status(201).json(registration);
    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }

})
router.post("/refresh-token", async (req, res) => {
    const authHeader = req.headers.authorization;
    const refresh_token = authHeader?.split(' ')[1];

    if(!refresh_token)res.status(401).send('No token provided');

    try{
        const payload = jwt.verify(refresh_token as string, process.env.REFRESH_TOKEN as Secret) as {username: string, iat: number};
        const token = jwt.sign({ username: payload.username }, process.env.SECRET_KEY as Secret, {expiresIn: "15m"});
        res.json({accessToken : token});
    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
})
export function authenticateToken(req : express.Request, res : express.Response, next : express.NextFunction){
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    console.log("TOKEN "+token);
    if(!token)res.status(401).send('No token provided');
    try{
        const payload = jwt.verify(token as string, process.env.SECRET_KEY as Secret) as {username: string, iat: number};
        console.log("User Name "+payload.username);
        req.body.username = payload.username;
        next();
    }catch(err){
        res.status(401).send("Something went Wrong !!!");
    }
}
export default router;