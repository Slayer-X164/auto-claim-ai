import { createAuthClient } from "better-auth/react";
import { organizationClient } from "better-auth/client/plugins";
import { AppError } from "./error-handler";

export const authClient = createAuthClient({
  plugins:[
    organizationClient()
  ],
});

export const signIn = async () => {
  const data = await authClient.signIn.social({
    provider:"google",
    callbackURL:"/onboarding"
  })
  if(data?.error) throw new AppError(data.error.message || "Something went wrong",401,"UNAUTHORIZED")
  return data
}