import BlogCard from "./components/BlogComponent";

export default async function Home() {
  const base_url = process.env.NODE_ENV == 'production' ? 'https://vibeverse-git-main-rishabh-dosis-projects.vercel.app/' : 'http://localhost:3000'
  let response = await fetch(`${base_url}/api/getAllPost`)
  console.log("API Response Status:", response.status);

  if (!response.ok) {
    const errorText = await response.text(); // Get the raw response text for debugging
    console.error("Error fetching data:", errorText);
    throw new Error("Failed to fetch posts");
  }

  let posts = await response.json();
  return (
    <>
      <div>
        <div className="mx-auto flex h-[400px] md:h-[80vh] justify-between items-center px-4" style={{ backgroundImage: "url('/banner-img.png')" }}>
          {/* Text Section */}
          <div className="text-white text-[40px] font-bold text-center md:text-left ml-5">
            <p>Welcome to VibeVerse</p>
            <p className="text-lg"> A trending solution for posting your Daily Life Solutions</p>

          </div>

          {/* Image Section */}
          <div className="hidden md:block w-[40%] mr-5">
            <img src="/main-poster-img.png" alt="Main Poster" className="object-contain h-full skew-y-3 animate-rotate-3d" />
          </div>
        </div>

        <div className="relative text-center py-20 bg-gray-100 parallax-section mt-2 bg-parallax bg-cover bg-fixed">
          <div className="absolute w-full h-full gradie"></div>
          <h2 className="text-3xl font-semibold mb-6">Explore Our Latest Blogs</h2>
          <p className="text-xl">Dive into insightful and thought-provoking articles!</p>
        </div>

        {/* -----------------------------------Show Blogs---------------------------------------- */}
        <section>
          <div className="text-center text-[rgb(8,12,80)] mx-auto my-3 text-3xl"> 𝓗𝓮𝓻𝓮 𝓐𝓻𝓮 𝓼𝓸𝓶𝓮 𝓣𝓻𝓮𝓷𝓭𝓲𝓷𝓰 𝓟𝓸𝓼𝓽 </div>
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 text-black pt-4 cursor-pointer">
            {posts.data.map((post: any) => (

              <BlogCard key={post?.id} post={post} />
            )

            )
            }
          </div>
        </section>
      </div>
    </>
  )
}
