import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            name?: string;
            email: string;
            password?: string;
            image?: string;
            role: string;
        };
    }
    interface User {
        id: string;
        email: string;
        name?: string;
        image?: string;
    }
}