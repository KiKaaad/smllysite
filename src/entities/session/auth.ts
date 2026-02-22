import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import prisma from "@/lib/prisma";
import type { NextAuthOptions } from "next-auth";
import {AdapterUser} from "next-auth/adapters";

interface ExtendedAdapterUser extends AdapterUser {
    username?: string | null;
    isOnboarded?: boolean;
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
    ],
    callbacks: {
        async session({ session, user }) {
            const dbUser = user as ExtendedAdapterUser;

            if (session.user) {
                session.user.id = dbUser.id;
                session.user.username = dbUser.username;
                session.user.isOnboarded = dbUser.isOnboarded;
            } return session;
        },
    },
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register',
    },
    session: {
        strategy: "database",
    }
};
