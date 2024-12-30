'use client';
import { useEffect, useState } from "react";

export default function ProfileTabs({userId}) {
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


    return (
        <div className="w-[80vw] mx-auto mt-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
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
                        <div>
                            <p>Your posts will appear here...</p>
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