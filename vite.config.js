import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), eslint()],
// });

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    define: {
      "process.env.SUPABASE_KEY": JSON.stringify(env.SUPABASE_KEY),
    },
    plugins: [react(), eslint()],
  };
});
