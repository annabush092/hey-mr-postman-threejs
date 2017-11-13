window.addEventListener("DOMContentLoaded", ()=> {
  console.log("in index")

  const mailbox = document.getElementById('mailbox')

  //RENDERER
  //WebGL Renderer
   var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0xffffff, 1)
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.zIndex = 5;
    document.body.appendChild(renderer.domElement);





  //CAMERA
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 1000)

  //CAMERA CONTROLS NEED TO IMPORT ORBIT LIBRARY
  // var controls = new THREE.OrbitControls(camera);
  //   controls.rotateSpeed = 1.0;
  //   controls.zoomSpeed = 1.2;
  //   controls.panSpeed = 0.8;

  //SCENE
  var scene = new THREE.Scene();

  //LIGHT1
  var keyLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(keyLight);

  //LIGHT2
  var pointLight = new THREE.PointLight(0xffffff, 0.5)
    scene.add(pointLight);

  //CUBE OBJECT
  // var geometry = new THREE.BoxGeometry(300, 125, 10) //maybe CubeGeometry
  // var material = new THREE.MeshLambertMaterial({color: "#a0b563"});
  // var cubeMesh = new THREE.Mesh(geometry, material)
  //   cubeMesh.position.set(0, 250, 0)
  //   scene.add(cubeMesh)

  //PLANE OBJECT
  // var planeMaterial = new THREE.MeshNormalMaterial();
  // var planeGeometry = new THREE.PlaneGeometry(300, 125)
  // var planeMesh = new THREE.Mesh( planeGeometry, planeMaterial );
  //   planeMesh.position.set(0, 0, 0)
  //   scene.add(planeMesh)

  //CSS3D SCENE
  var cssScene = new THREE.Scene();

//HTML TO APPEND
var element = document.createElement('div');
  element.innerHTML = "HELLO WORLD"
  element.className = "three-div"
  element.setAttribute("id", "maya")

  element.addEventListener("click", ()=> {
    console.log("oink oink")
  })

//CSSPLANE
var div = new THREE.CSS3DObject(element);
  div.position.set(0, 0, 0)
  cssScene.add(div);


//CSSRENDERER
var renderer2 = new THREE.CSS3DRenderer();
  renderer2.setSize(window.innerWidth, window.innerHeight);
  renderer2.domElement.style.position = 'absolute';
  renderer2.domElement.style.top = 0;
  document.body.appendChild(renderer2.domElement);

  //RENDER LOOP
  requestAnimationFrame(render);

  function render(){
    div.rotation.y += 0.01;
    div.rotation.x += 0.01;
    renderer2.render(cssScene, camera)
    renderer.render(scene, camera);
    requestAnimationFrame(render);

  }





})
