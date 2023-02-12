import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { open } from '../store/sideBarSlice';
import CommonStructure from '../components/structure/commonStructure';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export default function Main() {
  return (
    <CommonStructure title="홈">
      현재 만들어진 기능(2023.01.10.):
      <br />- 방명록 기능 (상단 MENU 클릭 {'>'} 방명록 클릭)
      <Canvas
        style={{
          margin: '0 auto',
          width: '95%',
          height: 'calc(100vh - 100px)',
        }}
        camera={{
          position: [0, 10, 0],
        }}
        onCreated={({ camera, gl, scene }) => {
          camera.lookAt(new THREE.Vector3(0, 0, 0));
          scene.background = new THREE.Color('lightblue');
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
        shadows
      >
        <directionalLight position={[0, 3, 0]} castShadow />
        <Model />
      </Canvas>
    </CommonStructure>
  );
}

const Model = () => {
  const mixer = useRef<THREE.AnimationMixer>();
  const object = useLoader(GLTFLoader, '/object/portfolio_test.glb');

  useEffect(() => {
    if (object) {
      mixer.current = new THREE.AnimationMixer(object.scene);
      object.animations.forEach((clip) => {
        const action = mixer?.current?.clipAction(clip);
        action?.setDuration(5);
        action?.play();
      });
    }
  }, [object]);

  useFrame((state, delta) => {
    mixer?.current?.update(delta);
  });

  return object ? <primitive object={object.scene} /> : null;
};
