import { NextResponse } from "next/server";
import { connectDb } from "../../../../config/connectDb";
import Post from "../../../../models/postModel";
import { addImageToSupabase } from "./createImageUrl";

export async function POST(req: Request) {
    try {
        const { content, imageUrl, userId, file, title } = await req.json()
        var imgUrl;
        if (file) {
            imgUrl = await addImageToSupabase(file);
        }
        await connectDb();
        const post = new Post({ content, imageUrl: imgUrl || imageUrl, userId, title });
        await post.save();
        return NextResponse.json({ message: "Success" }, { status: 200 })

    }
    catch (e: any) {
        console.log(e);
        return NextResponse.json({ message: "fail" }, { status: 500 })

        throw new Error(e);
    }

}