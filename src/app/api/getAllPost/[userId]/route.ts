import { NextResponse } from "next/server";
import Post from "../../../../../models/postModel";
import { ObjectId } from "mongoose";

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const id = url.pathname.split("getAllPost/")[1];

        // Convert the id to an ObjectId
        // const userId = new ObjectId(id);

        // Fetch posts where userId matches
        const response = await Post.find({ userId: id });

        return NextResponse.json(response);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}