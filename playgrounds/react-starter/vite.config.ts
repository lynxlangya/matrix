// import { ConfigEnv, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// const CWD = process.cwd();
// export default ({ mode }: ConfigEnv) => {
// const { VITE_BASE_PATH = 'dist' } = loadEnv(mode, CWD);
export default () => {
  return {
    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    test: {
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{ts,tsx}'],
    },
  };
};
