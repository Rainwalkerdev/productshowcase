import * as THREE from "three";

export const GenerateInitMaterials = () => {
  const cristalMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x8c8c8c,
    metalness: 0.0,
    roughness: 0.2,
    transparent: true,
    opacity: 1,
    envMapIntensity: 1.0,
    transmission: 1,
  });
  const sodaMaterial = new THREE.MeshStandardMaterial({
    color: 0x000,
    metalness: 1,
    roughness: 1,
    transparent: false,
    opacity: 1,
  });

  const fallouyBoyTexture = new THREE.TextureLoader().load(
    "/public/FalloutBoy.png"
  );
  fallouyBoyTexture.flipY = false;

  const brandMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 1,
    roughness: 0.5,
    transparent: true,
    envMapIntensity: 1,
    map: fallouyBoyTexture,
  });

  return { cristalMaterial, sodaMaterial, brandMaterial };
};

export const GenerateAnimations = (Scene) => {
  const Animations = [
    //InitAnimations - Page 0
    {
      target: scene.getObjectByName.("BottleGroup").position,
      pointTime: 0,
      animationProperties: {
        x: 0,
        onUpdate: () => {},
      }
  }

  //Nuka Cola - Page 1 
];
};
