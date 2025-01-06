import BackButton from "@/app/components/BackButton";

export default async function PostPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id;
    const base_url = process.env.NODE_ENV == 'production' ? 'vibeverse-pguv8wbzj-rishabh-dosis-projects.vercel.app' : 'http://localhost:3000'

    const postData = await fetch(`${base_url}/api/getPostById/${id}`);
    const postResponse = await postData.json();
    return (

        <div className="flex-col gap-4 justify-center relative">
            <div className="absolute left-0 top-0 text-black rounded-sm w-fit p-2 md:block hidden">
                <BackButton/>
            
            </div>

            <div className="text-white font-bold text-2xl bg-[rgb(177,222,53)] p-4 relative md:w-[640px] pr-10 mx-auto">
                {postResponse?.title || "undefined"}
            </div>
            <div className="pt-5 w-full mx-auto">
                <div className="flex justify-center">
                    <img src={postResponse.imageUrl} alt="image" className="block md:w-[640px]" />
                </div>
            </div>
            <div className="mx-auto md:w-[640px] text-black pt-2">
                {postResponse.content}
            </div>
            
        </div>
    )

}