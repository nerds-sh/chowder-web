import React, {useEffect} from 'react'
import {
    ArToolkitProfile,
    ArToolkitSource,
    ArToolkitContext,
    ArMarkerControls
} from '@ar-js-org/ar.js/three.js/build/ar-threex.js';
import * as THREE from 'three';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

export const Ar = () => {

    let loader = new GLTFLoader();

    useEffect(() => {
        loader.load('./assets/scene.gltf', (gltf) => {
            ArToolkitContext.baseURL = './'
            const renderer = new THREE.WebGLRenderer({
                alpha: true
            });
            renderer.setClearColor(new THREE.Color('lightgrey'), 0)
            renderer.setPixelRatio( 2 );
            renderer.setSize(640, 480);
            renderer.domElement.style.position = 'absolute'
            renderer.domElement.style.top = '0px'
            renderer.domElement.style.left = '0px'
            document.body.appendChild(renderer.domElement);

            const onRenderFcts = [];
            let arToolkitContext, arMarkerControls;

            const scene = new THREE.Scene();

            const camera = new THREE.Camera();
            scene.add(camera);
            const artoolkitProfile = new ArToolkitProfile()
            artoolkitProfile.sourceWebcam()

            const arToolkitSource = new ArToolkitSource(artoolkitProfile.sourceParameters)

            arToolkitSource.init(function onReady() {
                initARContext();
                onResize()
            })

            window.addEventListener('resize', function () {
                onResize()
            })

            const onResize = () => {
                arToolkitSource.onResizeElement()
                arToolkitSource.copyElementSizeTo(renderer.domElement)
                if (arToolkitContext.arController !== null) {
                    arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas)
                }
            }

            const initARContext = () => { 
                arToolkitContext = new ArToolkitContext({
                    cameraParametersUrl: ArToolkitContext.baseURL + '../data/camera_para.dat',
                    detectionMode: 'mono'
                })
                arToolkitContext.init(() => { 
                    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());

                    arToolkitContext.arController.orientation = getSourceOrientation();
                    arToolkitContext.arController.options.orientation = getSourceOrientation();

                    console.log('arToolkitContext', arToolkitContext);
                    window.arToolkitContext = arToolkitContext;
                })
                arMarkerControls = new ArMarkerControls(arToolkitContext, camera, {
                    type: 'pattern',
                    patternUrl: ArToolkitContext.baseURL + '../data/patt.hiro',
                    changeMatrixMode: 'cameraTransformMatrix'
                })

                scene.visible = false
            }


            const getSourceOrientation = () => {
                if (!arToolkitSource) {
                    return null;
                }

                if (arToolkitSource.domElement.videoWidth > arToolkitSource.domElement.videoHeight) {
                    return 'landscape';
                } else {
                    return 'portrait';
                }
            }

            onRenderFcts.push( () => {
                if (!arToolkitContext || !arToolkitSource || !arToolkitSource.ready) {
                    return;
                }

                arToolkitContext.update(arToolkitSource.domElement)
                scene.visible = camera.visible
            })

            const light = new THREE.AmbientLight( 0xFFFFFF ); 
            scene.add( light );

            gltf.scene.scale.set(0.05, 0.05, 0.05)
            scene.add(gltf.scene)
            onRenderFcts.push(() => {
                renderer.render(scene, camera);
            })

            let lastTimeMsec = null
            requestAnimationFrame(function animate(nowMsec) {
                requestAnimationFrame(animate);
                lastTimeMsec = lastTimeMsec || nowMsec - 1000 / 60
                const deltaMsec = Math.min(200, nowMsec - lastTimeMsec)
                lastTimeMsec = nowMsec
                onRenderFcts.forEach((onRenderFct) => {
                    onRenderFct(deltaMsec / 1000, nowMsec / 1000)
                })
            })

        });
    }, [])

    return <div
        style={{width: "800px", height: "800px"}}
    />
}