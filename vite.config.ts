import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default () => {
  const env = loadEnv("dev", process.cwd());
  return defineConfig({
    base: `/${env.VITE_TEAM_NAME}/`,
    plugins: [react()],
    css: {
      preprocessorOptions: {
        css: {
          // 确保 Vite 识别 CSS 文件
        }
      }
    }
  });
};
