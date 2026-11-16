// Создание сцены
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

// Добавление света
const light = new THREE.DirectionalLight(0xffffff, 0.7);
light.position.set(1, 1, 1);
scene.add(light);

// Рендеринг сцены
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('scene-container') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Добавление объектов
const houseModel = new THREE.Group();

// Создаём модель дома
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const house = new THREE.Mesh(geometry, material);
houseModel.add(house);
scene.add(houseModel);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Скримеры
const addScareEffect = () => {
  const scareModel = new THREE.Group();
  const scareGeometry = new THREE.BoxGeometry(5, 5, 5);
  const scareMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const scare = new THREE.Mesh(scareGeometry, scareMaterial);
  scene.add(scareModel);
  scareModel.add(scare);
  
  const screamSound = new Audio('path/to/scream.mp3');
  screamSound.play();
  
  TweenMax.to(scareModel, 2, {
    position: new THREE.Vector3(0, 0, -20),
    onComplete: () => {
      scene.remove(scareModel);
    }
  });
};

// Обработчик клика
document.getElementById('start-button').addEventListener('click', () => {
  addScareEffect();
});
