/* eslint react-hooks/exhaustive-deps : 0 */

import React, {useEffect} from 'react'
import '../App.css'
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
    let scene, camera, arToolkitContext, arMarkerControls, renderer, arToolkitProfile, arToolkitSource, onRenderFcts

    useEffect(() => {
        loader.load('./assets/scene.glb', (gltf) => {
            ArToolkitContext.baseURL = './'
            renderer = new THREE.WebGLRenderer({
                alpha: true
            });
            renderer.setClearColor(new THREE.Color('lightgrey'), 0)
            renderer.setPixelRatio( 2 );
            renderer.setSize(640, 480);
            renderer.domElement.style.position = 'absolute'
            renderer.domElement.style.top = '0px'
            renderer.domElement.style.left = '0px'
            document.body.appendChild(renderer.domElement);

            onRenderFcts = [];

            scene = new THREE.Scene();

            camera = new THREE.Camera();
            scene.add(camera);
            arToolkitProfile = new ArToolkitProfile()
            arToolkitProfile.sourceWebcam()

            arToolkitSource = new ArToolkitSource(arToolkitProfile.sourceParameters)

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
            let clientX = 0, clientY = 0
            let deltaX, deltaY
            gltf.scene.scale.set(0.1, 0.1, 0.1)
            scene.add(gltf.scene)
            
            let startX = 0, startY = 0
            let isMoving = false
            
            window.addEventListener("touchstart", (e) => {
               startX = e.changedTouches[0].clientX
               startY = e.changedTouches[0].clientY
               isMoving = true 
            })
            
            window.addEventListener("touchmove", (e) => {
                deltaX = e.changedTouches[0].clientX 
                deltaY = e.changedTouches[0].clientY 
                if(isMoving) {
                    gltf.scene.rotation.z = clientX + (gltf.scene.rotation.z + deltaX - startX) / 200
                    gltf.scene.rotation.x = clientY + (clientY + gltf.scene.rotation.x + deltaY - startY) / 200
                }
            }) 
            
            window.addEventListener("touchend", () => {
                clientX = gltf.scene.rotation.z
                clientY = gltf.scene.rotation.x
                
                isMoving = false
            })
            
            onRenderFcts.push(() => {
                renderer.render(scene, camera);
                arToolkitContext && onResize()
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
        
        const html = document.getElementsByTagName('html')[0]
        html.classList.add('stop-scrolling')
        
        return () => {
            html.classList.remove('stop-scrolling')
            onRenderFcts = []
            arToolkitSource.dispose()
            arMarkerControls.dispose()
            arToolkitContext.dispose()
            renderer.dispose()
            document.body.removeChild(renderer.domElement)
            window.removeEventListener("touchstart", () => null)
            window.removeEventListener("touchmove", () => null)
            window.removeEventListener("touchend", () => null)
            window.removeEventListener("resize", () => null)
        } 
    }, [loader])

    return <div
        style={{width: "800px", height: "800px" }}
    />
}
