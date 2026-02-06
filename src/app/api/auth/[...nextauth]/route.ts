import NextAuth from "next-auth/next";
import nextAuthConfig from "@/app/entities/session/next-auth-config";

const authHandler = NextAuth(nextAuthConfig);

export { authHandler as GET, authHandler as POST };

// Роутинг