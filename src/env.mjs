import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_DISCORD_USER_ID: z.string(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_DISCORD_USER_ID: process.env.NEXT_PUBLIC_DISCORD_USER_ID,
  },
});
