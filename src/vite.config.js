import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0", // 외부에서 접근 가능
    port: 3000, // 필요한 포트 번호로 설정
    hmr: {
      clientPort: 443, // 필요한 경우 클라이언트 포트 설정
    },
  },
});
