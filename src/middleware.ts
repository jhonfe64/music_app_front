import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {

    const session = req.cookies.get("next-auth.session-token")

    if (session === undefined) {
        return NextResponse.redirect(new URL(`/`, req.url));
    } else {

    }
}

export const config = {
    matcher: [
        '/artist/dashboard/home',
        '/artist/dashboard/profile',
        '/artist/dashboard/albums',
        '/artist/dashboard/estadistics',
        '/artist/dashboard/merchandising',
        '/artist/dashboard/albums',
        '/artist/dashboard/songs',
        '/artist/dashboard/help'
    ]
}