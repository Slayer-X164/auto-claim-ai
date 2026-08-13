import { createAuthClient } from "better-auth/react";
import { organizationClient } from "better-auth/client/plugins";

const authClient = createAuthClient({
  plugins:[
    organizationClient()
  ],
});

export const signIn = async () => {
  const data = await authClient.signIn.social({
    provider:"google",
    callbackURL:"/dashboard"
  })
  if(data?.error) throw new Error(data.error.message)
  return data
}