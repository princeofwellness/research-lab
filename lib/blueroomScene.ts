import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { toRaw } from 'vue';

export default class BlueroomScene {
    root: HTMLElement
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    controls: OrbitControls
    material: THREE.LineBasicMaterial
    ambientLight: THREE.AmbientLight
    gltfLoader: GLTFLoader

    constructor(root: HTMLElement){
        this.root = root;
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });

        const dracoLoader =  new DRACOLoader();
        dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

        this.gltfLoader = new GLTFLoader();
        this.gltfLoader.setDRACOLoader(dracoLoader);

        this.renderer.setSize( 540, 640 );
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.scene.background = new THREE.Color( 0xE8E1DA);
        this.cameraSetup();

        this.controls = new OrbitControls( this.camera, this.renderer.domElement );
        this.draw()
        this.root.appendChild( this.renderer.domElement );


    }

    cameraSetup (){

        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        this.camera.position.set( -20, 10, 20 );
        this.camera.lookAt(0,0,0)
    }

    draw () {
        // LINE

        this.material = new THREE.LineBasicMaterial( { color: 0xffffff } );


        // GRID
        const gridHelper = new THREE.GridHelper( 500, 50 );
        this.scene.add( gridHelper );

        //AXES
        const axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( axesHelper );

        //LIGHTS
        var light = new THREE.PointLight(  0xFFFFFF, 50, 1000 );
        light.position.set( 5, 6, 1 );
        this.scene.add( light );

        var light2 = new THREE.DirectionalLight(  0xFFFFFF, 2 );
        light2.position.set( -5, 6, 1 );
        light2.lookAt(0,-20,6)
        this.scene.add( light2 );

        this.ambientLight = new THREE.RectAreaLight( 0xaaaaaa, 2)
        this.scene.add( this.ambientLight );



        let box = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        let lightCube1 = new THREE.Mesh( box, material );
        lightCube1.position.set(light.position.x, light.position.y, light.position.z)
        this.scene.add( lightCube1 );
        let lightCube2 = new THREE.Mesh( box, material );
        lightCube2.position.set(light2.position.x, light2.position.y, light2.position.z)
        this.scene.add( lightCube2 );


        this.gltfLoader.load(
            '/static/blueroom.glb',
             (gltf) => {
                this.scene.add(gltf.scene);
            },
            function (error) {
                console.error('An error occurred while loading the model:', error);
            }
        );

        setInterval(() => {
            console.log(this.camera.position)
            console.log(this.camera.rotation)
        }, 2000)
    }

    render = () => {
        requestAnimationFrame( this.render );
        this.renderer.render(toRaw(this.scene), this.camera)
        this.controls.update();

    }

}