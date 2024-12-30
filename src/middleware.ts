import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const cookieStore = await cookies()
    console.log(cookieStore.get("token") , 2234);
    
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile'],
}