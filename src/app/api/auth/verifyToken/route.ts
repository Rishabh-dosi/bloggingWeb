import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { token } = await req.json()
        console.log(token, 8762);
        if (token) {
            const userData = await jwt.verify(token, process.env.JWT_SECRET);
            console.log(userData);
            return NextResponse.json({ userData });
        }
        return NextResponse.json({message: "Please Login"})
    } catch (e) {
        console.log(e);
        return NextResponse.json({ message: "Token Expired" });
    }
}