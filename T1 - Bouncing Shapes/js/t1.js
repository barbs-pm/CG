/******************************************
UFFS / Chapecó SC
Bárbara Pegoraro Markus
Sphere and Hexagon Ring Boucing in ThreeJS
29/06/2021
******************************************/

var scene; //mundo virtual
var camera; //area de visualização
var renderer; //responsavel por renderizar tudo

// declarações esfera
var sphere;
var velocidadeSphereX = 0.2;
var velocidadeSphereY = 0.18;

// declarações hexágono
var ring;
var velocidadeRingX = 0.2;
var velocidadeRingY = 0.15;

// criar a esfera
var createSphere = function(){
	let geometria = new THREE.SphereGeometry(1, 32, 32); // definir as dimensões do objeto
	let material = new THREE.MeshBasicMaterial({color: "rgb(73, 178, 227)"}); // definir a cor
	
	sphere = new THREE.Mesh(geometria, material);
	
	scene.add(sphere);
};

// criar hexágono
var createRing = function(){
	let geometria = new THREE.RingGeometry(2, 2.1, 6); // definir as dimensões do objeto
	let material = new THREE.MeshBasicMaterial({color: "rgb(176, 83, 189)"}); // definir a cor

	ring = new THREE.Mesh(geometria, material);

	scene.add(ring);
};

// movimento da esfera
var animationSphere = function (){
	requestAnimationFrame(animationSphere); //adiciona o método na fila de renderização

	if (this.sphere.position.x >= 30 || this.sphere.position.x <= -10)
        velocidadeSphereX = velocidadeSphereX * -1;
    
    if (this.sphere.position.y >= 18 || this.sphere.position.y <= -0.15)
        velocidadeSphereY = velocidadeSphereY * -1;
    
    this.sphere.position.x += velocidadeSphereX;
    this.sphere.position.y += velocidadeSphereY;
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
};

// movimento do hexágono
var animationRing = function (){
	requestAnimationFrame(animationRing); //adiciona o método na fila de renderização

	if (this.ring.position.x >= 25 || this.ring.position.x <= -5)
        velocidadeRingX = velocidadeRingX * -1;
    
    if (this.ring.position.y >= 15 || this.ring.position.y <= -0.20)
        velocidadeRingY = velocidadeRingY * -1;
    
    this.ring.position.x += velocidadeRingX;
    this.ring.position.y += velocidadeRingY;
	renderer.render(scene, camera); //tira uma foto do estado e mostra na tela
};

var init = function (){
	scene = new THREE.Scene(); //declarar cena
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 20, 100); // declarar camera
	
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera.position.z = 30;
	camera.position.x = 10;
	camera.position.y = 10;

	createSphere();
	createRing();
	animationSphere();
	animationRing();
};
window.onload = this.init