/** @type {import('vite').UserConfig} */
import legacy from '@vitejs/plugin-legacy'

export default {
  "base":"/nodejs_tests",
  plugins: [
    legacy({
      targets: ['defaults', 'IE 11'],
    }),
  ],
}