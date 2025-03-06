import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/hospital-data-portal/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
