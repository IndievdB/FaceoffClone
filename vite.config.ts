import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@contexts': path.resolve(__dirname, 'src/contexts'),
            '@data': path.resolve(__dirname, 'src/data'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@utilities': path.resolve(__dirname, 'src/utilities'),
        },
    },
});
