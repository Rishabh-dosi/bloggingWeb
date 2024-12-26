import { NextResponse } from "next/server";
import { connectDb } from "../../../../config/connectDb";
import Post from "../../../../models/postModel";

export async function POST(req : Request) {
    try {
        const { content, imageUrl, userId } = await req.json()
    await connectDb();
    const post = new Post({ content, imageUrl, userId });
        await post.save();
        return NextResponse.json({message: "Success"}, {status: 200})
    
    }
    catch (e : any) {
        console.log(e);
        return NextResponse.json({ message: "fail" }, { status: 500 })

        throw new Error(e);
    }
    
}