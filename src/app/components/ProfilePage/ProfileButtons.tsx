'use client'
import Link from 'next/link';
import { useState } from 'react';
import { prompt } from '../ProfileTabs';

export default function ProfileButtons({ userId }: prompt) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const handleLogout = async () => {
        const base_url = process.env.NODE_ENV == 'production' ? 'https://vibeverse-git-main-rishabh-dosis-projects.vercel.app' : 'http://localhost:3000'
        const resp = await fetch(`${base_url}/api/auth/logout`, {
            method: "POST"
        })
        localStorage.clear();

    }


    return (
        <>
            <div className="hidden md:flex absolute top-4 right-4 space-x-4">
                <button
                    onClick={handleLogout}
                    className="p-2 px-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-200"
                >
                    Logout
                </button>
                <Link href={`/addpost/${userId}`}
                    className="p-2 px-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-200"
                >
                    Add Post
                </Link>
            </div>

            <div className="md:hidden absolute top-4 right-4">
                <button
                    onClick={toggleDropdown}
                    className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-200"
                >
                    Options
                </button>
                {isDropdownOpen && (
                    <div className="mt-2 bg-white shadow-lg rounded-lg p-2 w-32 absolute right-0">
                        <button className="block w-full text-left p-2 text-yellow-500 hover:bg-yellow-100 rounded" onClick={handleLogout}>
                            Logout
                        </button>
                        <Link href={`/addpost/${userId}`} className="block w-full text-left p-2 text-yellow-500 hover:bg-yellow-100 rounded">
                            Add Post
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}
