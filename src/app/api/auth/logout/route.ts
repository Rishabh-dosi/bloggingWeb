import { cookies } from "next/headers";

export async function POST(req: Request) {
    const cookieStore = await cookies();
    for (const cookie of cookieStore.getAll()) {
        cookieStore.delete(cookie.name);
    }
    return new Response('Cookies deleted', { status: 200 });
}