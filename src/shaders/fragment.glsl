//#pragma glslify: snoise2 = require(glsl-noise/simplex/2d)
//#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)
//#pragma glslify: snoise4 = require(glsl-noise/simplex/4d)
//#pragma glslify: cnoise2 = require(glsl-noise/classic/2d)
//#pragma glslify: cnoise3 = require(glsl-noise/classic/3d)
//#pragma glslify: cnoise4 = require(glsl-noise/classic/4d)
//#pragma glslify: pnoise2 = require(glsl-noise/periodic/2d)
//#pragma glslify: pnoise3 = require(glsl-noise/periodic/3d)
//#pragma glslify: pnoise4 = require(glsl-noise/periodic/4d)

varying vec2 vUv;

void main() {
    gl_FragColor = vec4(vUv, 1.0, 1.0);
}
