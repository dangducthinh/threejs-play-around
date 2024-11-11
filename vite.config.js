// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public', // Ensure this matches the directory where your static assets are stored
  server: {
    open: true, // Automatically open the browser when the server starts
  },
});
