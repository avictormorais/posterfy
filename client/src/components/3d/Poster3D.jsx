import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Html, OrbitControls, useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function resolveFrameColor(frameColor) {
  if (typeof frameColor !== 'string' || frameColor.trim().length === 0) {
    return null;
  }

  const rawColor = frameColor.trim();

  const parsedColor = new THREE.Color();

  try {
    parsedColor.set(rawColor);
    return `#${parsedColor.getHexString()}`;
  } catch {
    return null;
  }
}

function configureTexture(texture) {
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.premultiplyAlpha = true;
  texture.needsUpdate = true;
}

function LoadingIndicator() {
  return (
    <Html center>
      <div
        style={{
          padding: '8px 10px',
          borderRadius: 10,
          fontSize: 13,
          color: '#0f172a',
          background: 'rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(15, 23, 42, 0.16)',
        }}
      >
        Carregando poster...
      </div>
    </Html>
  );
}

function PosterImagePlane({ imageUrl, plane, onAspectReady }) {
  const texture = useTexture(imageUrl);

  useEffect(() => {
    configureTexture(texture);

    const sourceImage = texture.source?.data ?? texture.image;

    if (
      onAspectReady &&
      sourceImage &&
      Number.isFinite(sourceImage.width) &&
      Number.isFinite(sourceImage.height) &&
      sourceImage.width > 0 &&
      sourceImage.height > 0
    ) {
      onAspectReady(sourceImage.width / sourceImage.height);
    }
  }, [texture, onAspectReady]);

  return (
    <mesh position={plane.position} rotation={plane.rotation} receiveShadow>
      <planeGeometry args={[plane.width, plane.height]} />
      <meshStandardMaterial
        map={texture}
        transparent
        alphaTest={0.001}
        side={THREE.DoubleSide}
        roughness={0.8}
        metalness={0.03}
        envMapIntensity={0.32}
      />
    </mesh>
  );
}

function PosterBackPlane({ imageUrl, plane }) {
  const texture = useTexture(imageUrl);

  useEffect(() => {
    configureTexture(texture);
  }, [texture]);

  return (
    <mesh position={plane.position} rotation={plane.rotation} receiveShadow>
      <planeGeometry args={[plane.width, plane.height]} />
      <meshStandardMaterial
        map={texture}
        transparent
        alphaTest={0.001}
        side={THREE.DoubleSide}
        roughness={0.88}
        metalness={0.02}
        envMapIntensity={0.22}
      />
    </mesh>
  );
}

function PosterObject({
  modelUrl,
  imageUrl,
  backImageUrl,
  showFrame,
  frameColor,
  imageFit,
  innerFrameCoverage,
  imageFrontOffset,
  backImageOffset,
  modelOffset,
  modelRotation,
  verticalFill,
  cameraFov,
  cameraPositionZ,
  maxModelSize,
  enableMouseParallax,
  autoRotate,
  autoRotateSpeed,
  globalPointerRef,
  onReady,
}) {
  const groupRef = useRef(null);
  const autoRotateAngleRef = useRef(0);
  const [imageAspect, setImageAspect] = useState(null);
  const { scene } = useGLTF(modelUrl);

  const [rotationX, rotationY, rotationZ] = modelRotation;
  const [offsetX, offsetY, offsetZ] = modelOffset;

  const handleImageAspect = useCallback((nextAspect) => {
    if (!Number.isFinite(nextAspect) || nextAspect <= 0) {
      return;
    }

    setImageAspect((currentAspect) => {
      if (currentAspect && Math.abs(currentAspect - nextAspect) < 0.0001) {
        return currentAspect;
      }

      return nextAspect;
    });
  }, []);

  const { normalizedScene, baseRotation, posterPlane, backPlane } = useMemo(() => {
    const resolvedFrameColor = resolveFrameColor(frameColor);
    const clonedScene = scene.clone(true);
    const box = new THREE.Box3().setFromObject(clonedScene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    const rawDimensions = {
      x: size.x,
      y: size.y,
      z: size.z,
    };

    const depthAxis = ['x', 'y', 'z'].reduce((smallestAxis, axis) => {
      return rawDimensions[axis] < rawDimensions[smallestAxis] ? axis : smallestAxis;
    }, 'x');

    const remainingAxes = ['x', 'y', 'z'].filter((axis) => axis !== depthAxis);
    const heightAxis =
      rawDimensions[remainingAxes[0]] >= rawDimensions[remainingAxes[1]]
        ? remainingAxes[0]
        : remainingAxes[1];
    const widthAxis = remainingAxes.find((axis) => axis !== heightAxis) ?? remainingAxes[0];

    const clampedVerticalFill = Math.min(Math.max(verticalFill, 0.1), 1);
    const cameraDistance = Math.max(Math.abs(cameraPositionZ - offsetZ), 0.0001);
    const visibleWorldHeight = 2 * Math.tan(THREE.MathUtils.degToRad(cameraFov) / 2) * cameraDistance;
    const targetModelHeight = visibleWorldHeight * clampedVerticalFill;
    const modelRawHeight = Math.max(rawDimensions[heightAxis], 0.0001);
    const uniformScale = (targetModelHeight / modelRawHeight) * maxModelSize;

    const dimensions = {
      x: rawDimensions.x * uniformScale,
      y: rawDimensions.y * uniformScale,
      z: rawDimensions.z * uniformScale,
    };

    const currentFrameAspect = dimensions[widthAxis] / Math.max(dimensions[heightAxis], 0.0001);
    const targetFrameAspect =
      showFrame && Number.isFinite(imageAspect) && imageAspect > 0 ? imageAspect : currentFrameAspect;
    const widthStretchFactor = targetFrameAspect / Math.max(currentFrameAspect, 0.0001);
    const safeStretchFactor =
      Number.isFinite(widthStretchFactor) && widthStretchFactor > 0 ? widthStretchFactor : 1;

    const axisStretch = {
      x: 1,
      y: 1,
      z: 1,
    };

    axisStretch[widthAxis] = showFrame ? safeStretchFactor : 1;

    dimensions.x *= axisStretch.x;
    dimensions.y *= axisStretch.y;
    dimensions.z *= axisStretch.z;

    const adjustedWidth = dimensions[widthAxis];
    const adjustedHeight = dimensions[heightAxis];

    const depthHalf = dimensions[depthAxis] / 2;
    const baseInset = showFrame ? Math.max(Math.min(depthHalf * 0.12, 0.014), 0.0015) : 0;
    const rawFrontOffset = showFrame && Number.isFinite(imageFrontOffset) ? imageFrontOffset : 0;
    const minFrontOffset = -Math.max(depthHalf - 0.001, 0);
    const maxFrontOffset = Math.max(depthHalf * 0.5, 0.001);
    const clampedFrontOffset = THREE.MathUtils.clamp(rawFrontOffset, minFrontOffset, maxFrontOffset);
    const effectiveFrontOffset = showFrame ? clampedFrontOffset : 0;
    const forwardOffset = showFrame ? Math.max(Math.abs(effectiveFrontOffset), 0.0005) : 0.0012;

    const frontNormal = showFrame
      ? new THREE.Vector3(
          depthAxis === 'x' ? 1 : 0,
          depthAxis === 'y' ? 1 : 0,
          depthAxis === 'z' ? 1 : 0
        )
      : new THREE.Vector3(0, 0, 1);

    const baseRotation = new THREE.Euler(rotationX, rotationY, rotationZ);
    const frontSign = showFrame && frontNormal.clone().applyEuler(baseRotation).z < 0 ? -1 : 1;

    const posterPosition = [0, 0, 0];
    const depthPosition = showFrame ? frontSign * (depthHalf - baseInset + effectiveFrontOffset) : 0;

    if (showFrame) {
      if (depthAxis === 'x') {
        posterPosition[0] = depthPosition;
      } else if (depthAxis === 'y') {
        posterPosition[1] = depthPosition;
      } else {
        posterPosition[2] = depthPosition;
      }
    }

    const posterNormal = frontNormal.clone().multiplyScalar(frontSign);
    const posterQuaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      posterNormal
    );
    const posterRotation = new THREE.Euler().setFromQuaternion(posterQuaternion);

    const baseCoverage = showFrame ? innerFrameCoverage : 1;
    const coverage = Math.min(Math.max(baseCoverage, 0.5), 1);
    const openingWidth = adjustedWidth * coverage;
    const openingHeight = adjustedHeight * coverage;
    const openingAspect = openingWidth / Math.max(openingHeight, 0.0001);
    const artAspect = imageAspect && Number.isFinite(imageAspect) ? imageAspect : openingAspect;

    let posterWidth = openingWidth;
    let posterHeight = openingHeight;

    if (imageFit === 'cover') {
      if (openingAspect > artAspect) {
        posterHeight = openingWidth / Math.max(artAspect, 0.0001);
      } else {
        posterWidth = openingHeight * artAspect;
      }
    } else {
      if (openingAspect > artAspect) {
        posterWidth = openingHeight * artAspect;
      } else {
        posterHeight = openingWidth / Math.max(artAspect, 0.0001);
      }
    }

    const posterPlane = {
      width: posterWidth,
      height: posterHeight,
      position: posterPosition,
      rotation: [posterRotation.x, posterRotation.y, posterRotation.z],
    };

    const backPosition = [0, 0, 0];
    const backInset = Math.max(depthHalf * 0.5, 0.0022);
    const rawBackOffset = showFrame && Number.isFinite(backImageOffset) ? backImageOffset : 0;
    const minBackOffset = -Math.max(depthHalf - backInset - 0.001, 0);
    const maxBackOffset = Math.max(depthHalf * 0.5, 0.001);
    const clampedBackOffset = THREE.MathUtils.clamp(rawBackOffset, minBackOffset, maxBackOffset);
    const backOffsetNoFrame = 0.0012;

    if (showFrame) {
      const backDepthPosition = -frontSign * Math.max(depthHalf - backInset + clampedBackOffset, 0.0001);

      if (depthAxis === 'x') {
        backPosition[0] = backDepthPosition;
      } else if (depthAxis === 'y') {
        backPosition[1] = backDepthPosition;
      } else {
        backPosition[2] = backDepthPosition;
      }
    } else {
      backPosition[0] = -posterNormal.x * backOffsetNoFrame;
      backPosition[1] = -posterNormal.y * backOffsetNoFrame;
      backPosition[2] = -posterNormal.z * backOffsetNoFrame;
    }

    const backNormal = posterNormal.clone().multiplyScalar(-1);
    const backQuaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      backNormal
    );
    const backRotation = new THREE.Euler().setFromQuaternion(backQuaternion);

    const backPlane = {
      width: posterWidth,
      height: posterHeight,
      position: backPosition,
      rotation: [backRotation.x, backRotation.y, backRotation.z],
    };

    clonedScene.position.sub(center);
    clonedScene.scale.set(
      uniformScale * axisStretch.x,
      uniformScale * axisStretch.y,
      uniformScale * axisStretch.z
    );

    clonedScene.traverse((child) => {
      if (!child.isMesh || !child.material) {
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;

      if (Array.isArray(child.material)) {
        child.material = child.material.map((material) =>
          material && typeof material.clone === 'function' ? material.clone() : material
        );
      } else if (typeof child.material.clone === 'function') {
        child.material = child.material.clone();
      }

      const materials = Array.isArray(child.material) ? child.material : [child.material];

      materials.forEach((material) => {
        if (!material) {
          return;
        }

        if (resolvedFrameColor && material.color?.isColor) {
          material.color.set(resolvedFrameColor);
        }

        if ('metalness' in material && typeof material.metalness === 'number') {
          material.metalness = Math.max(material.metalness, 0.32);
        }

        if ('roughness' in material && typeof material.roughness === 'number') {
          material.roughness = Math.min(material.roughness, 0.42);
        }

        if ('envMapIntensity' in material && typeof material.envMapIntensity === 'number') {
          material.envMapIntensity = Math.max(material.envMapIntensity, 0.58);
        }

        material.needsUpdate = true;
      });
    });

    return {
      normalizedScene: clonedScene,
      baseRotation,
      posterPlane,
      backPlane,
    };
  }, [
    scene,
    imageAspect,
    frameColor,
    imageFit,
    innerFrameCoverage,
    imageFrontOffset,
    backImageOffset,
    rotationX,
    rotationY,
    rotationZ,
    verticalFill,
    cameraFov,
    cameraPositionZ,
    offsetZ,
    maxModelSize,
    showFrame,
  ]);

  useEffect(() => {
    if (!onReady) {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      onReady();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [onReady]);

  useEffect(() => {
    autoRotateAngleRef.current = 0;
  }, [modelUrl, imageUrl, backImageUrl, showFrame, autoRotate]);

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return;
    }

    const pointerX = globalPointerRef?.current?.x ?? state.pointer.x;
    const pointerY = globalPointerRef?.current?.y ?? state.pointer.y;
    const targetX = enableMouseParallax ? -pointerY * 0.2 : 0;
    const targetY = enableMouseParallax ? pointerX * 0.3 : 0;

    if (autoRotate) {
      autoRotateAngleRef.current += delta * autoRotateSpeed;
    }

    const autoRotateAngle = autoRotate ? autoRotateAngleRef.current : 0;

    groupRef.current.rotation.x += (baseRotation.x + targetX - groupRef.current.rotation.x) * 0.08;
    groupRef.current.rotation.y +=
      (baseRotation.y + targetY + autoRotateAngle - groupRef.current.rotation.y) * 0.08;
    groupRef.current.rotation.z += (baseRotation.z - groupRef.current.rotation.z) * 0.08;
  });

  return (
    <group ref={groupRef} position={[offsetX, offsetY, offsetZ]} rotation={[baseRotation.x, baseRotation.y, baseRotation.z]}>
      {showFrame ? <primitive object={normalizedScene} /> : null}
      {backImageUrl ? <PosterBackPlane imageUrl={backImageUrl} plane={backPlane} /> : null}
      {imageUrl ? <PosterImagePlane imageUrl={imageUrl} plane={posterPlane} onAspectReady={handleImageAspect} /> : null}
    </group>
  );
}

export default function Poster3D({
  modelUrl,
  imageUrl,
  backImageUrl,
  showFrame = true,
  frameColor,
  width = '100%',
  height = '100%',
  className,
  style,
  imageFit = 'cover',
  innerFrameCoverage = 0.21,
  imageFrontOffset = 0.01,
  backImageOffset = 0,
  modelOffset = [0, 0, 0],
  modelRotation = [0, -Math.PI / 2, 0],
  verticalFill = 0.8,
  enableDragCamera = true,
  cameraFov = 45,
  cameraPosition = [0, 0, 3],
  maxModelSize = 1,
  enableMouseParallax = true,
  enableFadeIn = true,
  autoRotate = false,
  autoRotateSpeed = 0.35,
}) {
  const globalPointerRef = useRef({ x: 0, y: 0 });
  const effectiveModelRotation = showFrame ? modelRotation : [0, 0, 0];
  const [isContentReady, setIsContentReady] = useState(!enableFadeIn);

  useEffect(() => {
    setIsContentReady(!enableFadeIn);
  }, [modelUrl, imageUrl, backImageUrl, showFrame, enableFadeIn]);

  const handleReady = useCallback(() => {
    setIsContentReady(true);
  }, [modelUrl, imageUrl, backImageUrl, showFrame, enableFadeIn]);

  useEffect(() => {
    if (!enableMouseParallax) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      globalPointerRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      globalPointerRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enableMouseParallax]);

  const wrapperStyle = {
    width,
    height,
    position: 'relative',
    background: 'transparent',
    cursor: enableDragCamera || enableMouseParallax ? 'grab' : 'default',
    opacity: isContentReady ? 1 : 0,
    transition: enableFadeIn ? 'opacity 440ms cubic-bezier(0.22, 1, 0.36, 1)' : 'none',
    willChange: enableFadeIn ? 'opacity' : undefined,
    ...style,
  };

  return (
    <div className={className} style={wrapperStyle}>
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true }}
        camera={{ position: cameraPosition, fov: cameraFov }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.03;
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <ambientLight intensity={0.2} color="#f8f8ff" />
        <hemisphereLight args={['#f6f8ff', '#737a83', 0.62]} />
        <directionalLight
          castShadow
          position={[3.6, 4.6, 4.2]}
          intensity={1.35}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.00015}
          shadow-normalBias={0.02}
          shadow-camera-near={0.5}
          shadow-camera-far={18}
          shadow-camera-left={-3}
          shadow-camera-right={3}
          shadow-camera-top={3}
          shadow-camera-bottom={-3}
        />
        <spotLight
          castShadow
          position={[-2.2, 2.4, 3.2]}
          angle={0.5}
          penumbra={0.9}
          intensity={0.5}
          color="#ffd9b8"
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <directionalLight position={[-3.4, 1.6, -2.8]} intensity={0.38} color="#8da9c4" />
        <Environment preset="city" intensity={0.58} />

        {modelUrl ? (
          <Suspense fallback={<LoadingIndicator />}>
            <PosterObject
              modelUrl={modelUrl}
              imageUrl={imageUrl}
              backImageUrl={backImageUrl}
              showFrame={showFrame}
              frameColor={frameColor}
              imageFit={imageFit}
              innerFrameCoverage={innerFrameCoverage}
              imageFrontOffset={imageFrontOffset}
              backImageOffset={backImageOffset}
              modelOffset={modelOffset}
              modelRotation={effectiveModelRotation}
              verticalFill={verticalFill}
              cameraFov={cameraFov}
              cameraPositionZ={cameraPosition[2]}
              maxModelSize={maxModelSize}
              enableMouseParallax={enableMouseParallax}
              autoRotate={autoRotate}
              autoRotateSpeed={autoRotateSpeed}
              globalPointerRef={globalPointerRef}
              onReady={handleReady}
            />
          </Suspense>
        ) : null}

        {enableDragCamera ? (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.08}
            target={modelOffset}
          />
        ) : null}
      </Canvas>
    </div>
  );
}
