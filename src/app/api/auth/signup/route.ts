import bcrypt from 'bcrypt';
import { connectDb } from '../../../../../config/connectDb';
import User from '../../../../../models/userModel';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { email, password, userName } = await req.json();
        await connectDb();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exist" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, userName: userName });
        await newUser.save();
        return NextResponse.json({ message: "User succesfully created" }, { status: 200 });
    }
    catch (e) {
        console.log(e);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });

    }
    
}