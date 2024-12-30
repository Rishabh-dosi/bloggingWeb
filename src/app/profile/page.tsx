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
        <section className="text-black flex-col gap-3 mx-auto justify-center w-full">
            <div className="rounded-full border border-black w-[140px] h-[140px] mx-auto overflow-hidden">
                <img src={userInfo.userData.profileImgUrl} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <div className="flex-col pt-2">
                <div className="border border-[rgb(8,12,80)] w-fit min-w-[200px] p-2 rounded-lg mx-auto">{userInfo.userData.userName }</div>
                <div className="border border-[rgb(8,12,80)] w-fit min-w-[200px] p-2 mt-2 rounded-lg mx-auto">{userInfo.userData.email }</div>
            </div>
            <ProfileTabs userId={userInfo.userData.id} />

        </section>
    )
}