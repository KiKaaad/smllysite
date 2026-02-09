import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { dbClient } from "@/components/shared/lib/db";
import { compact } from "lodash-es";
import { privateConfig } from "@/components/shared/config/private";
import {useSession} from "next-auth/react";

export const nextAuthConfig: AuthOptions = {
    adapter: PrismaAdapter(dbClient) as AuthOptions["adapter"],
    providers: compact([
        privateConfig.GITHUB_ID && privateConfig.GITHUB_SECRET &&
        GithubProvider({
            clientId: privateConfig.GITHUB_ID ?? "",                                  // !!!!
            clientSecret: privateConfig.GITHUB_SECRET ?? "",                          // !!!!
        }),
    ]),
}
// Провайдеры авторизации и как это делать:
// GithubProvider({
//     clientId: process.env.GITHUB_ID,
//     clientSecret: process.env.GITHUB_SECRET,
// }),
// OtherProvider({
//     clientId: process.env.OTHER_ID,
//     clientSecret: process.env.OTHER_SECRET,
// }),