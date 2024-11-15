import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mjpeluqueria/',  // Asegúrate de que esta línea esté presente
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

