/******************************************
UFFS / Chapecó SC
Bárbara Pegoraro Markus
Monster
05/07/2021
******************************************/

/*  MANUEL
	Q -> Rotaciona o ombro pra frente
	A -> Rotaciona o ombro pro lado
	W -> Rotaciona o cotovelo
	E -> Rotaciona a bunda
	R -> Rotaciona o joelho
	< -> Rotaciona o tronco sentido antihorario
	> -> Rotaciona o tronco sentido horario
*/

var scene;//nosso mundo virtual
var camera; 
var render;// responsável por gerar as imagems

var elements = [];
var velCubo = 0.10;

var criaBracoEsq = function(tronco) {

	// ombro
	let ombro = new THREE.Mesh(new THREE.SphereGeometry(1,32, 32), new THREE.MeshBasicMaterial({color: 0xffffff})); 
	ombro.position.x = -2.6;
	ombro.position.y = 3.3;
	tronco.add(ombro);

	// movimento ombro
	let ombro_esquerdo = new THREE.Group();
	ombro.add(ombro_esquerdo);
	elements["ombro_esquerdo"] = ombro_esquerdo;

	// braço
	let braco = new THREE.Mesh(new THREE.BoxGeometry(1,5, 1), new THREE.MeshBasicMaterial({color: 0x00ff00})); 
	braco.position.x = -0.2;
	braco.position.y = -2;
	ombro_esquerdo.add(braco);

	// cotovelo
	let cotovelo = new THREE.Mesh(new THREE.SphereGeometry(0.7,32, 32), new THREE.MeshBasicMaterial({color: 0xffffff})); 
	cotovelo.position.y = -2;
	braco.add(cotovelo);

	// movimento cotovelo
	let cotovelo_esquerdo = new THREE.Group();
	cotovelo.add(cotovelo_esquerdo);
	elements["cotovelo_esquerdo"] = cotovelo_esquerdo;

	// antebraço
	let antebraco = new THREE.Mesh(new THREE.BoxGeometry(1,3, 1), new THREE.MeshBasicMaterial({color: 0x00ff00})); 
	antebraco.position.y = -2;
	cotovelo_esquerdo.add(antebraco);

}

var criaBracoDir = function(tronco) {

	// ombro
	let ombro = new THREE.Mesh(new THREE.SphereGeometry(1,32, 32), new THREE.MeshBasicMaterial({color: 0xffffff})); 
	ombro.position.x = 2.6;
	ombro.position.y = 3.3;
	tronco.add(ombro);

	// movimento ombro
	let ombro_direito = new THREE.Group();
	ombro.add(ombro_direito);
	elements["ombro_direito"] = ombro_direito;

	// braço
	let braco = new THREE.Mesh(new THREE.BoxGeometry(1,5, 1), new THREE.MeshBasicMaterial({color: 0x00ff00})); 
	braco.position.x -= -0.2;
	braco.position.y = -2;
	ombro_direito.add(braco);

	// cotovelo
	let cotovelo = new THREE.Mesh(new THREE.SphereGeometry(0.7,32, 32), new THREE.MeshBasicMaterial({color: 0xffffff})); 
	cotovelo.position.y = -2;
	braco.add(cotovelo);

	// movimento cotovelo
	let cotovelo_direito = new THREE.Group();
	cotovelo.add(cotovelo_direito);
	elements["cotovelo_direito"] = cotovelo_direito;

	// antebraço
	let antebraco = new THREE.Mesh(new THREE.BoxGeometry(1,3, 1), new THREE.MeshBasicMaterial({color: 0x00ff00})); 
	antebraco.position.y = -2;
	cotovelo_direito.add(antebraco);

}

var criaPernaDir = function(tronco) {

	// bunda
	let bunda = new THREE.Mesh(new THREE.SphereGeometry(1.6,32, 32), new THREE.MeshBasicMaterial({color: 0xffffff})); 
	bunda.position.x -= 1;
	bunda.position.y -= 3.3;
	bunda.position.z -= 1;
	tronco.add(bunda);

	// movimento bunda
	let bunda_direita = new THREE.Group();
	bunda.add(bunda_direita);
	elements["bunda_direita"] = bunda_direita;

	// coxa
	let coxa = new THREE.Mesh(new THREE.BoxGeometry(1.5,6, 1.5), new THREE.MeshBasicMaterial({color: 0x00ff00})); 
	coxa.position.x = -0.2;
	coxa.position.y = -2;
	coxa.position.z = 1;
	bunda_direita.add(coxa);

	// joelho
	let joelho = new THREE.Mesh(new THREE.SphereGeometry(1,32, 32), new THREE.MeshBasicMaterial({color: 0xffffff})); 
	joelho.position.y = -2.5;
	coxa.add(joelho);

	// movimento joelho
	let joelho_direito = new THREE.Group();
	joelho.add(joelho_direito);
	elements["joelho_direito"] = joelho_direito;

	// perna
	let perna = new THREE.Mesh(new THREE.BoxGeometry(1,4, 1), new THREE.MeshBasicMaterial({color: 0x00ff00})); 
	perna.position.y = -2;
	joelho_direito.add(perna);

}

var criaPernaEsq = function(tronco) {

	// bunda
	let bunda = new THREE.Mesh(new THREE.SphereGeometry(1.6,32, 32), new THREE.MeshBasicMaterial({color: 0xffffff})); 
	bunda.position.x = 1;
	bunda.position.y -= 3.3;
	bunda.position.z -= 1;
	tronco.add(bunda);

	// movimento bunda
	let bunda_esquerda = new THREE.Group();
	bunda.add(bunda_esquerda);
	elements["bunda_esquerda"] = bunda_esquerda;

	// coxa
	let coxa = new THREE.Mesh(new THREE.BoxGeometry(1.5,6, 1.5), new THREE.MeshBasicMaterial({color: 0x00ff00})); 
	coxa.position.x = 0.2;
	coxa.position.y = -2;
	coxa.position.z = 1;
	bunda_esquerda.add(coxa);

	// joelho
	let joelho = new THREE.Mesh(new THREE.SphereGeometry(1,32, 32), new THREE.MeshBasicMaterial({color: 0xffffff})); 
	joelho.position.y = -2.5;
	coxa.add(joelho);

	// movimento joelho
	let joelho_esquerdo = new THREE.Group();
	joelho.add(joelho_esquerdo);
	elements["joelho_esquerdo"] = joelho_esquerdo;

	// perna
	let perna = new THREE.Mesh(new THREE.BoxGeometry(1,4, 1), new THREE.MeshBasicMaterial({color: 0x00ff00})); 
	perna.position.y = -2;
	joelho_esquerdo.add(perna);

}

var criaMonstro = function(){

	let red = 	new THREE.Color(1,0,0);
	let green = new THREE.Color(0,1,0);
	let blue = 	new THREE.Color(0,0,1);
	let cores = [red, green, blue];

	let materials = [
		new THREE.MeshBasicMaterial({color: red}),
		new THREE.MeshBasicMaterial({color: green}),
		new THREE.MeshBasicMaterial({color: blue}),
		new THREE.MeshBasicMaterial({color: red}),
		new THREE.MeshBasicMaterial({color: green}),
		new THREE.MeshBasicMaterial({color: blue})
	];	
	
	let tronco = new THREE.Mesh(new THREE.BoxGeometry(4,7, 2), 
								new THREE.MeshBasicMaterial({color: 0x899400})); /// 0,0,0
	elements["tronco"] = tronco;
	tronco.name = "Sol";
	

	let cabeca = new THREE.Mesh(new THREE.SphereGeometry(1.5,32, 32), 
	                            new THREE.MeshBasicMaterial({ color: red })); // 0,10,5

	tronco.add(cabeca);
	elements["cabeca"] = cabeca;

	cabeca.position.y = 5.1;

	criaBracoEsq(tronco);
	criaBracoDir(tronco);
	criaPernaEsq(tronco);
	criaPernaDir(tronco);

	scene.add(tronco);
}

var animation = function (){
	
	requestAnimationFrame(animation);
	render.render(scene,camera);
}

var init = function (){
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight, 1, 100);

	render = new THREE.WebGLRenderer();
	render.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(render.domElement);

	camera.position.z = 50;
	camera.position.y = 6;
	camera.position.x = 4;

	criaMonstro();

	animation();	

	document.addEventListener('keydown', onKeyDown); //pegar um evento do teclado. Aperta tecla.

}

var rotacaoOmbro = 0.1;
var rotacaoOmbroDireito = 0.1;
var rotacaoOmbroEsquerdo = 0.1;
var rotacaoCotovelo = 0.1;
var rotacaoBunda = 0.1;
var rotacaoJoelho = -0.1;

var onKeyDown = function (e){

	if (e.keyCode == 189){ //tecla -
		elements.forEach(cubo => {
			cubo.scale.x-= 0.1;
			cubo.scale.y-= 0.1;
			cubo.scale.z-= 0.1;
		});
	}

	if (e.keyCode == 187){ // tecla +
		elements.forEach(cubo => {
			cubo.scale.x+= 0.1;
		});
	}

	if (e.keyCode == 38){ // up
		elements.forEach(cubo => {
			cubo.position.y+= 0.1;
		});
	}

	if (e.keyCode == 40){ // down
		elements.forEach(cubo => {
			cubo.position.y-= 0.1;
		});
	}

	if (e.keyCode == 16){ // down
		earth.rotation.z+=0.1;
	}

	if (e.keyCode == 81){ // q
		if (elements["ombro_esquerdo"].rotation.x < -2.8 || elements["ombro_esquerdo"].rotation.x > 0.1)
			rotacaoOmbro*=-1;
		
		elements["ombro_esquerdo"].rotation.x -= rotacaoOmbro;
		elements["ombro_direito"].rotation.x -= rotacaoOmbro;
	}

	if (e.keyCode == 87){ // w
		if (elements["cotovelo_esquerdo"].rotation.x < -2.8 || elements["cotovelo_esquerdo"].rotation.x > 0.1)
			rotacaoCotovelo*=-1;
		
		elements["cotovelo_esquerdo"].rotation.x -= rotacaoCotovelo;
		elements["cotovelo_direito"].rotation.x -= rotacaoCotovelo;
	}

	if (e.keyCode == 69){ // q
		if (elements["bunda_esquerda"].rotation.x < -0.8 || elements["bunda_esquerda"].rotation.x > 0)
			rotacaoBunda *= -1;

		elements["bunda_esquerda"].rotation.x -= rotacaoBunda;
		elements["bunda_direita"].rotation.x -= rotacaoBunda;
	}

	if (e.keyCode == 82){ // q
		if (elements["joelho_esquerdo"].rotation.x < -0.1 || elements["joelho_esquerdo"].rotation.x > 2)
			rotacaoJoelho *= -1;

		elements["joelho_esquerdo"].rotation.x -= rotacaoJoelho;
		elements["joelho_direito"].rotation.x -= rotacaoJoelho;
	}

	if (e.keyCode == 65){ // a
		if (elements["ombro_esquerdo"].rotation.z < -2.8 || elements["ombro_esquerdo"].rotation.z > 0)
			rotacaoOmbroEsquerdo*=-1;
		if (elements["ombro_direito"].rotation.z > 2.8 || elements["ombro_direito"].rotation.z < 0.1)
			rotacaoOmbroDireito*=-1;

		console.log(elements["ombro_esquerdo"].rotation.z)
		console.log(elements["ombro_direito"].rotation.z)

		elements["ombro_esquerdo"].rotation.z -= rotacaoOmbroEsquerdo;
		elements["ombro_direito"].rotation.z -= rotacaoOmbroDireito;
	}

	if (e.keyCode == 188) // <
		elements["tronco"].rotation.y -= 0.1;
	if (e.keyCode == 190) // >
		elements["tronco"].rotation.y += 0.1;
}

window.onload = this.init;

