import bcrypt from 'bcrypt';
import { connectDb } from '../../../../../config/connectDb';
import User from '../../../../../models/userModel';
import { NextResponse } from 'next/server';
import { addImageToSupabase } from '../../createPost/createImageUrl';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const userName = formData.get('userName') as string;
        const profileImg = formData.get('profileImg') as File | null;
        let profileImgUrl;

        // If profile image exists, upload it to Supabase
        if (profileImg) {
            profileImgUrl = await addImageToSupabase(profileImg, 'profileImg');
        }

        // Connect to the database
        connectDb();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({ email, password: hashedPassword, userName, profileImgUrl });
        console.log("till here");

        // Save the new user to the database
        const user = await newUser.save();

        // Create user data and JWT token
        const userData = {
            id: user._id,
            email: user.email,
            userName: user.userName,
            profileImgUrl: profileImgUrl || null,
        };
        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return NextResponse.json({ message: "JWT secret is not defined" }, { status: 500 });
        }

        const token = jwt.sign(userData, jwtSecret, { expiresIn: "1h" });

        // Set the token in cookies and return the success response
        const response = NextResponse.json({ message: "User successfully created" }, { status: 200 });
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            path: '/'
        });
        return response;

    } catch (e) {
        console.error(e);

        // Ensure a valid response is returned in case of an error
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
