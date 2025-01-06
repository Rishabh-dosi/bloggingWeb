'use client'
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AddBlogPostForm({
    params,
}: {
    params: Promise<{ userId: string }>
}) {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: null
    });
    const [userId, setUserId] = useState<string>("");
    const base_url = process.env.NODE_ENV == 'production' ? 'https://vibeverse-git-main-rishabh-dosis-projects.vercel.app/' : 'http://localhost:3000'


    useEffect(() => {
        const fetchUserId = async () => {
            const userData = await params;
            setUserId(userData.userId);
        };
        fetchUserId();
    }, [params]);
    const handleChange = (e: any) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData({ ...formData, image: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const apiData = new FormData();
        apiData.append('title', formData.title);
        apiData.append('content', formData.content);
        if (formData.image) {
            apiData.append('file', formData.image);
        }
        apiData.append('userId', userId);

        const response = await fetch(`${base_url}/api/createPost`, {
            method: "POST",
            body: apiData
        })

    };

    return (
        <div className="flex justify-center">
            <form
                className="space-y-4 max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg h-auto w-[70vw]"
                onSubmit={handleSubmit}
            >
                <div className="text-center text-[rgb(8,12,80)] text-2xl font-bold mb-8">
                    Add a Blog Post
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Enter Post Title"
                        value={formData.title}
                        name="title"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-[rgb(8,12,80)] focus:outline-none focus:ring-2 focus:ring-[rgb(8,12,80)]"
                    />
                </div>

                <div>
                    <textarea
                        placeholder="Enter Post Content"
                        value={formData.content}
                        name="content"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-[rgb(8,12,80)] focus:outline-none focus:ring-2 focus:ring-[rgb(8,12,80)]"
                        rows={6}
                    />
                </div>

                <div>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-[rgb(8,12,80)] focus:outline-none focus:ring-2 focus:ring-[rgb(8,12,80)]"
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="w-full py-2 bg-[rgb(8,12,80)] text-white font-semibold rounded-md hover:bg-opacity-80 cursor-pointer"
                    />
                </div>

                <div className="text-[rgb(8,12,80)] text-center">
                    <Link href={'/blog'}>Go Back to Blog</Link>
                </div>
            </form>
        </div>
    );
}
