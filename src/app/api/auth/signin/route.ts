import { NextResponse } from "next/server";
import User from "../../../../../models/userModel"
import bcrypt from 'bcrypt'


export async function POST(req: Request) {
    try {
        const { email, password } = await req.json()
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ message: "USER NOT EXIST" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            return NextResponse.json({ user }, { status: 200 });
        }
        return NextResponse.json({ message: "kuch bhi" }, { status: 400 });
    }
    catch (e) {
        console.log(e);
        return NextResponse.json({ message: "Nhi" }, {status: 500})
    }

}