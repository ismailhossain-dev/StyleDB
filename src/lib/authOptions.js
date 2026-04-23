import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        console.log(credentials);
        //console.log("ami authOption teke credentials bolsi ", credentials); //right
        // const user = await loginUser(credentials);
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
};
export default NextAuth(authOptions);
