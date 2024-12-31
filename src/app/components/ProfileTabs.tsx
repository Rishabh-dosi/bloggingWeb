'use client';
import { useEffect, useState } from "react";
import BlogCard from "./BlogComponent";
interface prompt{
    userId: string
}

export default function ProfileTabs({userId}: prompt) {
    const [activeTab, setActiveTab] = useState("myPosts");
    const [myposts, setMyPost] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/getAllPost/${userId}`);
                const responseData = await response.json();
                setMyPost(responseData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userId])
    console.log(myposts);   


    return (
        <div className="w-[80vw] mx-auto mt-6">
            <div className="bg-white p-4 rounded-lg md:min-h-[300px]">
                <div className="flex border-b-2">
                    <button
                        onClick={() => setActiveTab("myPosts")}
                        className={`w-1/2 py-2 text-center font-semibold text-lg focus:outline-none border-b-2 ${activeTab === "myPosts" ? "border-gray-600" : "border-transparent"} hover:border-gray-400 active:border-gray-600`}
                    >
                        My Posts
                    </button>

                    <button
                        onClick={() => setActiveTab("savedPosts")}
                        className={`w-1/2 py-2 text-center font-semibold text-lg focus:outline-none border-b-2 ${activeTab === "savedPosts" ? "border-gray-600" : "border-transparent"} hover:border-gray-400 active:border-gray-600`}
                    >
                        Saved Posts
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-4">
                    {activeTab === "myPosts" && (
                        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 text-black pt-4 cursor-pointer">
                            {myposts.map((post: any, index:number) => (
                                <BlogCard key={index} post={post} />
                            )

                            )
                            }
                        </div>
                    )}
                    {activeTab === "savedPosts" && (
                        <div>
                            <p className="text-red-500 font-bold">This Feature is upcoming</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}