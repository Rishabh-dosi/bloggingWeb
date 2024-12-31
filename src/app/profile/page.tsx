import { cookies } from "next/headers"
import ProfileTabs from "../components/ProfileTabs";

export default async function Page() {
    const cookieStore = await cookies(); 
    const token = cookieStore.get("token")?.value;
    console.log(token , 345);
    const userData = await fetch('http://localhost:3000/api/auth/verifyToken', { 
        method: "POST",
        body: JSON.stringify({token}),
    })
    const userInfo = await userData.json();
    console.log(userInfo , 2345);

    return (
        <section className="text-black flex-col gap-3 mx-auto justify-center w-full relative">
            <button
                className="hidden md:block absolute top-4 right-4 p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-200">
                Logout
            </button>
            <div className="rounded-full border border-black w-[140px] h-[140px] mx-auto overflow-hidden">
                <img src={userInfo.userData.profileImgUrl} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex-col pt-2">
                <div className="border-2 border-[rgb(8,12,80)] w-fit min-w-[200px] p-2 rounded-lg mx-auto">{userInfo.userData.userName }</div>
                <div className="border-2 border-[rgb(8,12,80)] w-fit min-w-[200px] p-2 mt-2 rounded-lg mx-auto">{userInfo.userData.email }</div>
            </div>
            <ProfileTabs userId={userInfo.userData.id} />
            <div className="absolute bottom-2 right-2 bg-slate-800 text-white rounded-2xl p-3 hover:bg-slate-900">
                Add Post 
            </div>

        </section>
    )
}