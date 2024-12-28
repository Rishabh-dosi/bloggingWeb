'use client';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default async function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));

    };
    const handleSubmit = async (e: any) =>{
        e.preventDefault();
        const data = await fetch('http://localhost:3000/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        if (data.ok) {
            const user = await data.json();
            console.log(user.userName, 44);
        }
    }

    return (
        <div className="flex justify-center">
            <form className="space-y-4 max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg h-[400px] w-[70vw]" onSubmit={handleSubmit}>
                <div className="text-center text-[rgb(8,12,80)] text-2xl font-bold mb-8">
                    Login to TellMe
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Enter Your email"
                        value={formData.email}
                        name="email"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md text-[rgb(8,12,80)] focus:outline-none focus:ring-2 focus:ring-[rgb(8,12,80)]"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Enter Your password"
                        value={formData.password}
                        name="password"
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
                    <Link href={'/auth/register'}>New to TellMe</Link>
                </div>
            </form>
        </div>
    )
}