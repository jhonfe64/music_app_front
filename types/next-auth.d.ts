import NextAuth from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            name: string;
            email: string;
            image?: undefined | string;
            status: string;
            id: string;
            artisticName: string;
            token: string;
            artist: string
        };
        expires: string;
    }
}