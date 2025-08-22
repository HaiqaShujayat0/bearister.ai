import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Disable SSR to avoid localStorage/DOM access during server render
  ssr: false,
} satisfies Config;
