export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-blueGray-900 p-4">
        <h1 className="text-2xl font-bold text-center">Welcome to DarkBlog</h1>
      </header>
      <main className="container mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">All Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Mock Blog Cards */}
          <div className="bg-blueGray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold">Blog Title 1</h3>
            <p className="text-sm text-blueGray-300">
              This is a sample blog content snippet.
            </p>
            <span className="text-blueGray-500 text-xs">By Author 1</span>
          </div>
          {/* Add more cards as needed */}
        </div>
      </main>
    </div>
  );
}
