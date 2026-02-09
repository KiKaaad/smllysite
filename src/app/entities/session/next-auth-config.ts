import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",                                  // !!!!
            clientSecret: process.env.GITHUB_SECRET ?? "",          // !!!!
        }),
    ],
}

export default NextAuth(authOptions)

// Провайдеры авторизации и как это делать:
// GithubProvider({
//     clientId: process.env.GITHUB_ID,
//     clientSecret: process.env.GITHUB_SECRET,
// }),
// OtherProvider({
//     clientId: process.env.OTHER_ID,
//     clientSecret: process.env.OTHER_SECRET,
// }),