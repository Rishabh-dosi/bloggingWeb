// const fetchBlogsData = async () =>{
//   const response = await fetch('https://localhost:3000/api/getAllPost')
//   const responseData = await response.json();
//   return responseData;
// }

import BlogCard from "./components/BlogComponent";

export default async function Home() {
  let data = await fetch('http://localhost:3000/api/getAllPost')
  let posts = await data.json()
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
            <img src="/main-poster-img.png" alt="Main Poster" className="object-contain h-full" />
          </div>
        </div>

        <div className="relative text-center py-20 bg-gray-100 parallax-section mt-2 bg-parallax bg-cover bg-fixed">
          <div className="absolute w-full h-full gradie"></div>
          <h2 className="text-3xl font-semibold mb-6">Explore Our Latest Blogs</h2>
          <p className="text-xl">Dive into insightful and thought-provoking articles!</p>
        </div>

        {/* -----------------------------------Show Blogs---------------------------------------- */}
        <section>
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 text-black pt-4 cursor-pointer">
            {posts.data.map((post: any) => (

              <BlogCard key={post.id} post={post} />
            )

            )
            }
          </div>
        </section>
      </div>
    </>
  )
}
