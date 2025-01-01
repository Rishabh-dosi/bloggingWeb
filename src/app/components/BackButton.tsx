'use client'
import { useRouter } from "next/navigation"
export default function BackButton() {
    const router = useRouter();
    return (
        <button className="text-white bg-[rgb(32,33,69)] p-2" onClick={()=> router.back()}>
            Back
        </button>
    )
}