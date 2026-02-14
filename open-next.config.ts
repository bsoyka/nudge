// open-next.config.ts - configured without incremental cache for local preview
import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

export default defineCloudflareConfig({
  incrementalCache: undefined,
});
