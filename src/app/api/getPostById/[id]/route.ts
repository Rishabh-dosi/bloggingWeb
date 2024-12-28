import { NextResponse } from "next/server";
import { connectDb } from "../../../../../config/connectDb";
import Post from "../../../../../models/postModel";



export async function GET(req: Request) {
    const id = await req.url.split('getPostById/')[1];
    connectDb();
    const postData = await Post.findById(id);

    return NextResponse.json(postData);
}