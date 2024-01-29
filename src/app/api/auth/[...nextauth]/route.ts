import NextAuth from "next-auth";
import { artist } from "@/endpoints/artist";
import CredentialsProvider from "next-auth/providers/credentials";
import { UserToken } from "@/interfaces/userInterfaces";
import { UserSession } from "@/interfaces/userInterfaces";
import { NextApiRequest } from "next";
import { User } from "next-auth";



export const handler = NextAuth({
  session: { strategy: "jwt" },


  providers: [
    CredentialsProvider({
      async authorize(credentials:any, req: NextApiRequest)  {
        try {
          //credentials.role === "artist" &&
          const res = await fetch(artist.LOGIN_ARTIST, {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();

          if (res.ok && user) {
            return user as UserToken
          } else {
            return null;
          }
        } catch (error) {
          return error;
        }
      } ,
    }),
  ],
  pages: {
    signIn: "/artist/login",
    error: "/user/sign-up",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userToken = user as UserToken;
      }
      return token;
    },
    async session({ session, token }) {
      const t = token.userToken
      session.user = t as UserSession
      return session;
    },
  },
});

export { handler as GET, handler as POST };
