'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormType {
    userName: string;
    email: string;
    password: string;
    profileImg: File | null;
}

export default function RegisterPage() {
    const [formData, setFormData] = useState<FormType>({
        email: "",
        password: "",
        userName: "",
        profileImg: null,
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        if (name === "profileImg" && files) {
            setFormData(prevState => ({
                ...prevState,
                profileImg: files[0],
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const form = new FormData();
        form.append("email", formData.email);
        form.append("userName", formData.userName);
        form.append("password", formData.password);

        if (formData.profileImg) {
            form.append("profileImg", formData.profileImg);
        }
        const base_url = process.env.NODE_ENV == 'production' ? 'https://vibeverse-git-main-rishabh-dosis-projects.vercel.app/' : 'http://localhost:3000'
        const data = await fetch(`${base_url}/api/auth/signup`, {
            method: 'POST',
            body: form,
        });

        if (data.ok) {
            const userInfo = await data.json();
            console.log(userInfo);

            setFormData({
                userName: '',
                email: '',
                password: '',
                profileImg: null,
            });

            router.push('/profile');
        } else {
            console.error('Failed to register');
        }
    };

    return (
        <div className="flex justify-center">
            <form
                className="space-y-4 max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg h-[400px] w-[70vw]"
                onSubmit={handleSubmit}
            >
                <div className="text-center text-[rgb(8,12,80)] text-2xl font-bold mb-8">
                    Create New Account
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-[rgb(8,12,80)] focus:outline-none focus:ring-2 focus:ring-[rgb(8,12,80)]"
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder="Enter Your username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-[rgb(8,12,80)] focus:outline-none focus:ring-2 focus:ring-[rgb(8,12,80)]"
                    />
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter Your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-[rgb(8,12,80)] focus:outline-none focus:ring-2 focus:ring-[rgb(8,12,80)]"
                    />
                </div>

                <div>
                    <input
                        type="file"
                        name="profileImg"
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
                    <Link href={'/auth/login'}>Already have an account?</Link>
                </div>
            </form>
        </div>
    );
}
