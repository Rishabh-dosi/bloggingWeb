import { NextResponse } from "next/server";
import Post from "../../../../../models/postModel";

export async function GET(req: Request) {
    const url = await req.url;
    const id = url.split("getAllPost/")[1];
    const response = await Post.findById({ id });
    const respData = await response.json();
    return NextResponse.json(respData);
}