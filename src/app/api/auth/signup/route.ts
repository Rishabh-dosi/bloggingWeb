import bcrypt from 'bcrypt';
import { connectDb } from '../../../../../config/connectDb';
import User from '../../../../../models/userModel';
import { NextResponse } from 'next/server';
import { addImageToSupabase } from '../../createPost/createImageUrl';

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const userName = formData.get('userName') as string;
        const profileImg = formData.get('profileImg') as File | null;
        console.log('here' , email, password, userName, profileImg);
        var profileImgUrl;
        if (profileImg) {
            profileImgUrl = await addImageToSupabase(profileImg, 'profileImg');
            console.log(profileImgUrl);
        }
        await connectDb();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exist" }, { status: 400 });
        }
        console.log("here", userName, email, password);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, userName: userName, profileImgUrl });
        await newUser.save();
        return NextResponse.json({ message: "User succesfully created" }, { status: 200 });
    }
    catch (e) {
        console.log(e);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });

    }
    
}