import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
        clientId: "",
        clientSecret: '',
        issuer: ''
      }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)