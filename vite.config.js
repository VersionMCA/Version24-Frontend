/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig((command, mode) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      __PORT__: JSON.stringify(env.PORT),
      __URL__: JSON.stringify(env.URL),
    },

    server: {},
  };
});
