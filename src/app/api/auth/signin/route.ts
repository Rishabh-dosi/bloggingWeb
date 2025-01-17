import { NextResponse } from "next/server";
import User from "../../../../../models/userModel"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import { connectDb } from "../../../../../config/connectDb";


export async function POST(req: Request) {
    try {
        connectDb();
        const { email, password } = await req.json()
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "USER NOT EXIST" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            const userData = {
                id: user._id,
                userName: user.userName,
                profileImgUrl: user?.profileImgUrl,
                email: user.email
            }
            const jwtSecret = process.env.JWT_SECRET;
            if (!jwtSecret) {
                return NextResponse.json({ message: "JWT secret is not defined" }, { status: 500 });
            }
            const token = await jwt.sign(userData, jwtSecret, { expiresIn: "1h" });
           console.log(token, 887);
            
            // return NextResponse.json({ user }, { status: 200 }).cookies.set("token", token, {
            //     httpOnly: true,
            // });
            const response = NextResponse.json({ user }, { status: 200 });

            // Setting the cookie with options
            response.cookies.set('token', token, {
                httpOnly: true,    
                secure: process.env.NODE_ENV === 'production',  
                sameSite: 'strict', 
                maxAge: 60 * 60 * 24 * 7, 
                path: '/'  
            });
            return response;
        }
        return NextResponse.json({ message: "kuch bhi" }, { status: 400 });
    }
    catch (e) {
        console.log(e);
        return NextResponse.json({ message: "Nhi" }, {status: 500})
    }

}