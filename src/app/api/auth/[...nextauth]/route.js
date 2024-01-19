import NextAuth from "next-auth";
import { artist } from "@/endpoints/artist";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
  session: { strategy: "jwt" },

  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
          //credentials.role === "artist" &&
          const res = await fetch(artist.loginArtist, {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();

          if (res.ok && user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          return error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/artist/login",
    error: "/user/sign-up",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userToken = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.userToken = token.userToken;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
