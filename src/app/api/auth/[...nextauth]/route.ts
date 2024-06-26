import NextAuth, { AuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
const authOptions:AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID||"",
      clientSecret: process.env.GITHUB_SECRET||"",
    }),
    // ...add more providers here
  ],
}
const handler =  NextAuth(authOptions);

export {handler as GET, handler as POST}