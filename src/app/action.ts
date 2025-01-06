export async function getAllPost() {
    const response = await fetch('/api/getAllPosts');
    const resposneData = await response.json();
    return resposneData;
}