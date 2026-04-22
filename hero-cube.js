import {
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
} from "https://unpkg.com/three@0.167.1/build/three.module.js";

const container = document.getElementById("canvas-container");

if (!container) {
  console.warn("Hero cube unavailable: canvas container is missing.");
} else {
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

  function getTargetScale() {
    return window.innerWidth < 768 ? 0.235 : 0.34;
  }

  function getMobileAdjustedY() {
    return window.innerWidth < 768 ? { start: 0.55, end: 0.78 } : { start: 0.3, end: 0.76 };
  }

  function getMobileAdjustedZ() {
    return window.innerWidth < 768 ? { start: -3.6, end: -0.42 } : { start: -2.8, end: -0.2 };
  }

  function getMobileAdjustedX() {
    return 0;
  }

  function easeOutSoft(value) {
    return 1 - Math.pow(1 - value, 2);
  }

  function setSize() {
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.setSize(width, height, false);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  function onPointerMove(event) {
    const bounds = container.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    pointer.targetX = (relativeX - 0.5) * 0.24;
    pointer.targetY = (relativeY - 0.5) * 0.18;
  }

  function animate(now) {
    const elapsed = now - emergence.start;
    const progress = Math.min(elapsed / emergence.duration, 1);
    const eased = easeOutSoft(progress);
    const scale = getTargetScale() * eased;
    const floatOffset = Math.sin(now * 0.001) * 0.05;
    const yRange = getMobileAdjustedY();
    const zRange = getMobileAdjustedZ();
    const xOffset = getMobileAdjustedX();
    const isMobile = window.innerWidth < 768;

    pointer.x += (pointer.targetX - pointer.x) * 0.035;
    pointer.y += (pointer.targetY - pointer.y) * 0.035;

    cube.scale.setScalar(scale);
    cube.position.x = isMobile ? 0 : xOffset + pointer.x * 0.18;
    cube.position.y = MathUtils.lerp(yRange.start, yRange.end, eased) + floatOffset;
    cube.position.z = MathUtils.lerp(zRange.start, zRange.end, eased);
    cube.rotation.x = -0.18 + pointer.y;
    cube.rotation.y += 0.0044;
    cube.rotation.z = pointer.x * 0.35;
    coreLight.position.copy(cube.position);

    edgeMaterial.opacity = 0.08 + eased * 0.18;
    glowMaterial.opacity = 0.008 + eased * 0.02;

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
  }

  setSize();
  window.addEventListener("resize", setSize);
  window.addEventListener("mousemove", onPointerMove, { passive: true });

  container.addEventListener(
    "mouseleave",
    () => {
      pointer.targetX = 0;
      pointer.targetY = 0;
    },
    { passive: true }
  );

  window.requestAnimationFrame(animate);
}
