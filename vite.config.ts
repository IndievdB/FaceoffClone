import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'FaceoffClone/src/assets'),
            '@components': path.resolve(__dirname, 'FaceoffClone/src/components'),
            '@constants': path.resolve(__dirname, 'FaceoffClone/src/constants'),
            '@contexts': path.resolve(__dirname, 'FaceoffClone/src/contexts'),
            '@data': path.resolve(__dirname, 'FaceoffClone/src/data'),
            '@hooks': path.resolve(__dirname, 'FaceoffClone/src/hooks'),
            '@store': path.resolve(__dirname, 'FaceoffClone/src/store'),
            '@styles': path.resolve(__dirname, 'FaceoffClone/src/styles'),
            '@utilities': path.resolve(__dirname, 'FaceoffClone/src/utilities'),
        },
    },
});
