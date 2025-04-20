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

export const GenerateAnimations = (
  scene,
  colors,
  cristalMaterial,
  sodaMaterial
) => {
  const Animations = [
    //InitAnimations - Page 0
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 0,
      animationProperties: {
        x: 0,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 0,
      animationProperties: {
        y: 0,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 0,
      animationProperties: {
        cristal: "#8c8c8c",
        soda: "#000",
        onUpdate: () => {
          cristalMaterial.color.set(
            new THREE.Color(colors.cristal.replace(",1)", ")"))
          );
          cristalMaterial.needsUpdate = true;
          sodaMaterial.color.set(
            new THREE.Color(colors.soda.replace(",1)", ")"))
          );
          sodaMaterial.needsUpdate = true;
        },
      },
    },

    //Nuka Cola - Page 1
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 2,
      animationProperties: {
        x: 1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 2,
      animationProperties: {
        y: Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 2,
      animationProperties: {
        cristal: "#555555",
        soda: "#000000",
        onUpdate: () => {
          cristalMaterial.color.set(
            new THREE.Color(colors.cristal.replace(",1)", ")"))
          );
          cristalMaterial.needsUpdate = true;
          sodaMaterial.color.set(
            new THREE.Color(colors.soda.replace(",1)", ")"))
          );
          sodaMaterial.needsUpdate = true;
        },
      },
    },
    //Quantum Cola - Page 2
    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 4,
      animationProperties: {
        x: -1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 4,
      animationProperties: {
        y: -Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 4,
      animationProperties: {
        cristal: "#108587",
        soda: "#D0FFFF",
        onUpdate: () => {
          cristalMaterial.color.set(
            new THREE.Color(colors.cristal.replace(",1)", ")"))
          );
          cristalMaterial.needsUpdate = true;
          sodaMaterial.color.set(
            new THREE.Color(colors.soda.replace(",1)", ")"))
          );
          sodaMaterial.needsUpdate = true;
        },
      },
    },

    //Sunset SArsararrilla - Page 3

    {
      target: scene.getObjectByName("BottleGroup").position,
      pointTime: 6,
      animationProperties: {
        x: 1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("BottleGroup").rotation,
      pointTime: 6,
      animationProperties: {
        y: Math.PI * 2,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 6,
      animationProperties: {
        cristal: "#7E3810",
        soda: "#602A0C",
        onUpdate: () => {
          cristalMaterial.color.set(
            new THREE.Color(colors.cristal.replace(",1)", ")"))
          );
          cristalMaterial.needsUpdate = true;
          sodaMaterial.color.set(
            new THREE.Color(colors.soda.replace(",1)", ")"))
          );
          sodaMaterial.needsUpdate = true;
        },
      },
    },
  ];
  return Animations;
};
