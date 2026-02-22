import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token

        if (token && !token.isOnboarded) {
            return NextResponse.redirect(new URL("/auth/login", req.url))
        } return NextResponse.next()
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
        pages: {
            signIn: "/auth/signup",
        },
    }
)


// Страницы на которые нельзя попасть, если пользователь на авторизован
export const config = {
    matcher: [
        "/settings/:path*",
        "/dashboard/:path*",
    ],
}
