import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 3000,
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.indexOf('node_modules') !== -1) {
                        const module = id.split('node_modules/').pop()?.split('/')[0];
                        return `vendor-${module}`;
                    }
                },
            },
        },
    },
});
