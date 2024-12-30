// const fetchBlogsData = async () =>{
//   const response = await fetch('https://localhost:3000/api/getAllPost')
//   const responseData = await response.json();
//   return responseData;
// }

import BlogCard from "./components/BlogComponent";

export default async function Home() {
  let data = await fetch('http://localhost:3000/api/getAllPost')
  let posts = await data.json()  
  console.log(posts.data , 998);
  return (
    <>
      <div>
        <div className="mx-auto flex h-[400px] justify-center align-middle" style={{ backgroundImage: "url('/banner-img.png')" }}>
          <div className="text-white my-auto text-[40px] font-bold text-center"> Welcome <br />TellME</div>
        </div>
        {/* -----------------------------------Show Blogs---------------------------------------- */}
        <section>
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 text-black pt-4 cursor-pointer">
            {posts.data.map((post: any) => (
              <BlogCard key={post.id} post={post}/>
            )
            
            )
            }
          </div>
        </section>
      </div>
    </>
  )
}
