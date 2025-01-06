import { NextResponse } from "next/server";
import Post from "../../../../models/postModel";
import { connectDb } from "../../../../config/connectDb";

export async function GET() {
    try {
        // Ensure that the database is connected properly
        await connectDb();

        // Fetch posts from the database
        const data = await Post.find();

        if (data && data.length > 0) {
            return NextResponse.json({ data });
        } else {
            return NextResponse.json({ message: "No posts found" }, { status: 404 });
        }
    } catch (error) {
        console.error('Database connection or fetching error:', error);
        return NextResponse.json({ message: "Database connection error" }, { status: 500 });
    }
}