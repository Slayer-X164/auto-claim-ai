import { betterAuth } from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle"
import {db} from "@/app/db/db"
import { organization } from "better-auth/plugins";
import { role } from "better-auth/plugins/access";

export const auth = betterAuth({
  plugins:[
    organization({
      teams:{
        enabled:false,
      },
      roles:{
        admin: role({
          organization:["update"],
          member:["create","read","update","delete"],
          invitation:["create","read","update","delete"]
        }),
        reviewer: role({
          member:["read"],
        })
      }
    })
  ],
  database: drizzleAdapter(db,{provider:"pg"}),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
