import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        //console.log("ami authOption teke credentials bolsi ", credentials); //right
        const user = await loginUser(credentials);
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
};
export default NextAuth(authOptions);
