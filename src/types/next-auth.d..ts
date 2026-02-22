import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            username?: string | null
            isOnboarded?: boolean
        } & DefaultSession["user"]
    }

    interface User {
        isOnboarded?: boolean
    }

    interface AdapterUser {
        username?: string | null
        isOnboarded?: boolean
    }

    export {};

    declare global {
        interface Navigator {
            deviceMemory?: number;
        }
    }


}
