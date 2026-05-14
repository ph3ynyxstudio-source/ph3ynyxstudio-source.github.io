const HERO_CUBE_STATE_KEY = "__ph3ynyxHeroCubeState";

function whenDomReady(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback, { once: true });
    return;
  }

  callback();
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function hideCubeContainer(container) {
  container.style.display = "none";
}

function showCubeContainer(container) {
  container.style.display = "";
}

async function initHeroCube() {
  if (window[HERO_CUBE_STATE_KEY]?.initialized) {
    return;
  }

  const container = document.getElementById("canvas-container");
  if (!container) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) {
    hideCubeContainer(container);

    const state = {
      initialized: true,
      destroy() {
        reduceMotion.removeEventListener("change", onReducedMotionOnlyChange);
        showCubeContainer(container);
        delete window[HERO_CUBE_STATE_KEY];
      },
    };

    function onReducedMotionOnlyChange(event) {
      if (!event.matches) {
        state.destroy();
        void initHeroCube();
      }
    }

    window[HERO_CUBE_STATE_KEY] = state;
    reduceMotion.addEventListener("change", onReducedMotionOnlyChange);
    return;
  }

  showCubeContainer(container);

  if (!supportsWebGL()) {
    return;
  }

  let three;
  try {
    three = await import("https://unpkg.com/three@0.167.1/build/three.module.js");
  } catch (error) {
    console.warn("Hero cube disabled: unable to load Three.js.", error);
    return;
  }

  if (!container.isConnected || container.dataset.heroCubeMounted === "true") {
    return;
  }

  const {
    AmbientLight,
    BoxGeometry,
    EdgesGeometry,
    LineBasicMaterial,
    LineSegments,
    MathUtils,
    Mesh,
    MeshBasicMaterial,
    MeshPhysicalMaterial,
    PerspectiveCamera,
    PointLight,
    Scene,
    SRGBColorSpace,
    WebGLRenderer,
  } = three;

  const scene = new Scene();
  const camera = new PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 0.18, 6.4);

  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.domElement.setAttribute("aria-hidden", "true");
  container.appendChild(renderer.domElement);
  container.dataset.heroCubeMounted = "true";

  const ambientLight = new AmbientLight(0xffffff, 0.1);
  scene.add(ambientLight);

  const keyLight = new PointLight(0x89ecff, 0.1, 18, 2);
  keyLight.position.set(2.6, 2.4, 4.8);
  scene.add(keyLight);

  const rimLight = new PointLight(0x5f8cff, 0.1, 14, 2);
  rimLight.position.set(-3.2, -1.1, -1.6);
  scene.add(rimLight);

  const coreLight = new PointLight(0x00ffff, 0.1, 10, 2);
  coreLight.position.set(0, 0, 0);
  scene.add(coreLight);

  const geometry = new BoxGeometry(1.7, 1.7, 1.7);
  const material = new MeshPhysicalMaterial({
    color: 0x000000,
    metalness: 0.9,
    roughness: 0.1,
    emissive: 0x00ffff,
    emissiveIntensity: 0.05,
    transparent: true,
    opacity: 0.7,
  });
  const cube = new Mesh(geometry, material);
  cube.scale.setScalar(0);
  cube.position.set(0, 0.68, 0);
  scene.add(cube);

  const edgeGeometry = new EdgesGeometry(geometry);
  const edgeMaterial = new LineBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.34,
  });
  const edges = new LineSegments(edgeGeometry, edgeMaterial);
  cube.add(edges);

  const glowGeometry = new BoxGeometry(1.76, 1.76, 1.76);
  const glowMaterial = new MeshBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.02,
  });
  const glowCube = new Mesh(glowGeometry, glowMaterial);
  cube.add(glowCube);

  const pointer = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  };

  const emergence = {
    start: performance.now(),
    duration: 6200,
  };

  let rafId = 0;
  let isVisible = !document.hidden;
  let isDestroyed = false;
  let reducedMotionEnabled = reduceMotion.matches;

  const state = {
    initialized: true,
    destroy() {
      if (isDestroyed) {
        return;
      }

      isDestroyed = true;
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      renderer.dispose();
      geometry.dispose();
      glowGeometry.dispose();
      material.dispose();
      edgeGeometry.dispose();
      edgeMaterial.dispose();
      glowMaterial.dispose();
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reduceMotion.removeEventListener("change", onReducedMotionChange);
      container.removeEventListener("mouseleave", onMouseLeave);
      renderer.domElement.remove();
      if (reduceMotion.matches) {
        hideCubeContainer(container);
      } else {
        showCubeContainer(container);
        container.dataset.heroCubeMounted = "false";
      }
      delete window[HERO_CUBE_STATE_KEY];
    },
  };

  window[HERO_CUBE_STATE_KEY] = state;

  function getTargetScale() {
    return window.innerWidth < 768 ? 0.235 : 0.34;
  }

  function getMobileAdjustedY() {
    return window.innerWidth < 768
      ? { start: 0.84, end: 0.78 }
      : { start: 0.48, end: 0.76 };
  }

  function getMobileAdjustedZ() {
    return window.innerWidth < 768
      ? { start: -3.6, end: -0.42 }
      : { start: -2.8, end: -0.2 };
  }

  function easeOutSoft(value) {
    return 1 - Math.pow(1 - value, 2);
  }

  function easeOutBack(value) {
    const overshoot = 1.28;
    const t = value - 1;
    return 1 + (overshoot + 1) * Math.pow(t, 3) + overshoot * Math.pow(t, 2);
  }

  function setSize() {
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    if (!width || !height) {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(width, height, false);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function onPointerMove(event) {
    const bounds = container.getBoundingClientRect();
    if (!bounds.width || !bounds.height) {
      return;
    }

    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    pointer.targetX = (relativeX - 0.5) * 0.24;
    pointer.targetY = (relativeY - 0.5) * 0.18;
  }

  function onMouseLeave() {
    pointer.targetX = 0;
    pointer.targetY = 0;
  }

  function onVisibilityChange() {
    isVisible = !document.hidden;
    if (isVisible && !reducedMotionEnabled && !rafId) {
      rafId = requestAnimationFrame(animate);
    }
  }

  function onReducedMotionChange(event) {
    reducedMotionEnabled = event.matches;
    if (reducedMotionEnabled) {
      state.destroy();
      void initHeroCube();
    }
  }

  function animate(now) {
    rafId = 0;
    if (isDestroyed || reducedMotionEnabled || !isVisible || !container.isConnected) {
      return;
    }

    const elapsed = now - emergence.start;
    const progress = Math.min(elapsed / emergence.duration, 1);
    const eased = easeOutSoft(progress);
    const arrival = easeOutBack(progress);
    const scale = getTargetScale() * eased;
    const floatOffset = Math.sin(now * 0.001) * 0.05;
    const yRange = getMobileAdjustedY();
    const zRange = getMobileAdjustedZ();
    const isMobile = window.innerWidth < 768;

    pointer.x += (pointer.targetX - pointer.x) * 0.035;
    pointer.y += (pointer.targetY - pointer.y) * 0.035;

    cube.scale.setScalar(scale);
    cube.position.x = isMobile ? 0 : pointer.x * 0.18;
    cube.position.y = MathUtils.lerp(yRange.start, yRange.end, arrival) + floatOffset;
    cube.position.z = MathUtils.lerp(zRange.start, zRange.end, eased);
    cube.rotation.x = pointer.y * 0.55;
    cube.rotation.y += isMobile ? 0.0028 : 0.0044;
    cube.rotation.z = pointer.x * 0.12;
    coreLight.position.copy(cube.position);

    edgeMaterial.opacity = 0.08 + eased * 0.18;
    glowMaterial.opacity = 0.008 + eased * 0.02;

    renderer.render(scene, camera);
    rafId = requestAnimationFrame(animate);
  }

  setSize();
  window.addEventListener("resize", setSize, { passive: true });
  window.addEventListener("mousemove", onPointerMove, { passive: true });
  document.addEventListener("visibilitychange", onVisibilityChange, {
    passive: true,
  });
  reduceMotion.addEventListener("change", onReducedMotionChange);
  container.addEventListener("mouseleave", onMouseLeave, { passive: true });

  rafId = requestAnimationFrame(animate);
}

whenDomReady(() => {
  void initHeroCube();
});
