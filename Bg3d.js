(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') return;
  

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const hero = canvas.closest('.hero');
  let width = hero.clientWidth;
  let height = hero.clientHeight;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 9);

  // Accent + neutral colors matching the site palette
  const accent = new THREE.Color(0x2f6f5e);
  const paper = new THREE.Color(0xf6f5f1);

  // Wireframe icosahedron — signature geometric shape
  const geo = new THREE.IcosahedronGeometry(2.6, 1);
  const wireGeo = new THREE.WireframeGeometry(geo);
  const wireMat = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.5 });
  const wireframe = new THREE.LineSegments(wireGeo, wireMat);
  wireframe.position.set(1.4, 0, 0);
  scene.add(wireframe);

  // Drifting particle field
  const particleCount = 140;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({ color: paper, size: 0.035, transparent: true, opacity: 0.35 });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  function resize() {
    width = hero.clientWidth;
    height = hero.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  window.addEventListener('resize', resize);

  if (prefersReducedMotion) {
    // Render a single static frame, no animation loop
    renderer.render(scene, camera);
    return;
  }

  let frameId;
  function animate() {
    frameId = requestAnimationFrame(animate);
    wireframe.rotation.y += 0.0016;
    wireframe.rotation.x += 0.0007;
    particles.rotation.y += 0.0004;
    renderer.render(scene, camera);
  }
  animate();

  // Pause the render loop when the hero scrolls out of view (perf)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (!frameId) animate();
      } else if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    });
  }, { threshold: 0.05 });
  observer.observe(hero);
})();
