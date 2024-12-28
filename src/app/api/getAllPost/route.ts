import { NextResponse } from "next/server";
import Post from "../../../../models/postModel";
import { connectDb } from "../../../../config/connectDb";

export async function GET() {
    connectDb();
    const data = await Post.find();
    if (data) {
        return NextResponse.json({data})
    }
    else {
        return NextResponse.json({ message: "failure" }, { status: 400 });
    }
}