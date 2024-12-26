interface prompt{
    title: string,
    content: string,
    imageUrl: string
}


export default function BlogCard({ title, content, imageUrl }: prompt) {
    return (
        <div className="bg-blueGray-800 rounded-lg p-4 shadow-md mb-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <img src={imageUrl} alt="" />
            <p className="text-sm text-blueGray-300 mb-2">{content}</p>
            
        </div>
    );
}
