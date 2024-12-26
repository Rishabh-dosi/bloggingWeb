import { NextResponse } from "next/server";
import Post from "../../../../models/postModel";

export async function GET() {
    const data = await Post.find();
    if (data) {
        return NextResponse.json({data})
    }
    else {
        return NextResponse.json({ message: "failure" }, { status: 400 });
    }
}