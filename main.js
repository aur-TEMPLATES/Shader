import {Scene, PerspectiveCamera, WebGLRenderer, PlaneGeometry, ShaderMaterial, Mesh} from "three";
import FragmentShader from "./shaders/fragment.glsl";
import VertexShader from "./shaders/vertex.glsl";

function init() {

    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;

    const canvas = document.querySelector("canvas");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    const scene = new Scene();
    const camera = new PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    const renderer = new WebGLRenderer({canvas});

    const geometry = new PlaneGeometry(1, 1, 1, 1);
    const material = new ShaderMaterial({
        vertexShader: VertexShader,
        fragmentShader: FragmentShader
    });

    const plane = new Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 1;

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        WIDTH = window.innerWidth;
        HEIGHT = window.innerHeight;
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
        renderer.setSize(WIDTH, HEIGHT);
    }

    requestAnimationFrame(animate);
    window.addEventListener("resize", onWindowResize, false);
}

document.addEventListener("DOMContentLoaded", init);

