import Link from "next/link";

interface prompt {
    post: {
        _id: string,
        title: string,
        content: string,
        imageUrl: string
    }
}


export default function BlogCard(post: prompt) {

    
    return (
        <Link href={`/post/${post?.post._id}`}>
            <div
                className="w-full h-[200px] bg-cover bg-no-repeat bg-center relative transition-transform duration-300 ease-in-out transform hover:scale-110 hover:translate-x-1 hover:translate-y-1"
                style={{ backgroundImage: `url(${post?.post?.imageUrl})` }}
            >
                
                <div className="text-white p-4 absolute bottom-0 left-0 w-full font-extrabold text-[18px] hover:bg-gradient-to-b from-[rgba(0,0,0,0.39)] to-slate-900">{post?.post?.title || "Undefined"}</div>
            </div>
        </Link>
    );
}
