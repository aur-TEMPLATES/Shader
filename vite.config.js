import { glslify } from 'vite3-plugin-glslify'
import { defineConfig } from 'vite';

export default defineConfig({
    root: "src",
    plugins: [
        glslify()
    ],
});