import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: "717168523490973",
      clientSecret: "60bc56be322ddc8140a0f6472a599b97",
    }),
    GoogleProvider({
      clientId:
        "858988238576-rpvp3v56ulmnngkbnctr8mr63j5okpe7.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
});
