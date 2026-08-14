import { betterAuth } from "better-auth";
import {drizzleAdapter} from "better-auth/adapters/drizzle"
import {db} from "@/app/lib/db/db"
import { organization } from "better-auth/plugins";
import { role } from "better-auth/plugins/access";

export const auth = betterAuth({
  database: drizzleAdapter(db,{provider:"pg"}),
  baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
  cookiePrefix:"autoclaim",
  plugins:[
    organization({
      creatorRole:"admin",
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

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
