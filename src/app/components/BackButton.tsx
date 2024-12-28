'use client'

export default function BackButton() {
    return (
        <button className="text-white bg-[rgb(32,33,69)] p-2" onClick={()=> router.back()}>
            Back
        </button>
    )
}