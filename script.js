const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    80,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
    );

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

const light = new THREE.DirectionalLight( 0xffffff, 1, 100);
light.position.set( 0 ,0, 100 ); //default; light shining from top
light.castShadow = true; // default false
scene.add( light );

light.rotation.y =  5
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default


renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

 

const geoProtonAndNeutron = new THREE.SphereGeometry( 1.8, 32, 32 );
const geoElectron = new THREE.SphereGeometry( 0.8, 32, 32 );

const materialProton = new THREE.MeshLambertMaterial( {color: 0xf5291b} );
const materialNeutron = new THREE.MeshLambertMaterial( {color: 0x0a58ff} );
const materialElectron = new THREE.MeshLambertMaterial( {color: 0x0afff3} );

const Proton0 = new THREE.Mesh( geoProtonAndNeutron, materialProton );
const Proton1 = new THREE.Mesh( geoProtonAndNeutron, materialProton );
const Proton2 = new THREE.Mesh( geoProtonAndNeutron, materialProton );
const Proton3 = new THREE.Mesh( geoProtonAndNeutron, materialProton );
const Proton4 = new THREE.Mesh( geoProtonAndNeutron, materialProton );
const Proton5 = new THREE.Mesh( geoProtonAndNeutron, materialProton );
const Proton6 = new THREE.Mesh( geoProtonAndNeutron, materialProton );
const Proton7 = new THREE.Mesh( geoProtonAndNeutron, materialProton );
const Proton8 = new THREE.Mesh( geoProtonAndNeutron, materialProton );
const Proton9 = new THREE.Mesh( geoProtonAndNeutron, materialProton );

const Neutron1 = new THREE.Mesh( geoProtonAndNeutron, materialNeutron );
const Neutron2 = new THREE.Mesh( geoProtonAndNeutron, materialNeutron );
const Neutron3 = new THREE.Mesh( geoProtonAndNeutron, materialNeutron );
const Neutron4 = new THREE.Mesh( geoProtonAndNeutron, materialNeutron );
const Neutron5 = new THREE.Mesh( geoProtonAndNeutron, materialNeutron );
const Neutron6 = new THREE.Mesh( geoProtonAndNeutron, materialNeutron );
const Neutron7 = new THREE.Mesh( geoProtonAndNeutron, materialNeutron );
const Neutron8 = new THREE.Mesh( geoProtonAndNeutron, materialNeutron );

const Electron1 = new THREE.Mesh( geoElectron, materialElectron );
const Electron2 = new THREE.Mesh( geoElectron, materialElectron );

const Electron3 = new THREE.Mesh( geoElectron, materialElectron );
const Electron4 = new THREE.Mesh( geoElectron, materialElectron );
const Electron5 = new THREE.Mesh( geoElectron, materialElectron );
const Electron6 = new THREE.Mesh( geoElectron, materialElectron );
const Electron7 = new THREE.Mesh( geoElectron, materialElectron );
const Electron8 = new THREE.Mesh( geoElectron, materialElectron );
const Electron9 = new THREE.Mesh( geoElectron, materialElectron );
const Electron10 = new THREE.Mesh( geoElectron, materialElectron );

// scene.add( Proton0 )
scene.add( Proton1 );
scene.add( Proton2 );
scene.add( Proton3 );
scene.add( Proton4 );
scene.add( Proton5 );
scene.add( Proton6 );
scene.add( Proton7 );
scene.add( Proton8 );
scene.add( Proton9 );

scene.add( Neutron1 );
scene.add( Neutron2 );
scene.add( Neutron3 );
scene.add( Neutron4 );
scene.add( Neutron5 );
scene.add( Neutron6 );
scene.add( Neutron7 );
scene.add( Neutron8 );

scene.add( Electron1 );
scene.add( Electron2 );

scene.add( Electron3 );
scene.add( Electron4 );
scene.add( Electron5 );
scene.add( Electron6 );
scene.add( Electron7 );
scene.add( Electron8 );
scene.add( Electron9 );
scene.add( Electron10 );


Proton1.position.x = 4
Proton2.position.x = -4
Proton3.position.y = 3
Proton4.position.y =-4
Proton5.position.z = 4
Proton6.position.z = 4
Proton6.position.x = 2
Proton6.position.y = 2
Proton7.position.z = 4
Proton7.position.x = 2
Proton7.position.y = -2
Proton8.position.z =-4
Proton9.position.y = -2
Proton9.position.x = -2
Proton9.position.z = 1

Neutron1.position.x = 2.8
Neutron1.position.y = 2.8
Neutron2.position.x = -2.8
Neutron2.position.y = -2.8
Neutron3.position.x = 2.8
Neutron3.position.y = -2.8
Neutron4.position.x = -2.8
Neutron4.position.y = 2.8

Neutron5.position.x = 1.5
Neutron5.position.z = 3.5
Neutron6.position.x = -1.5
Neutron6.position.z = 3
Neutron7.position.x = 0
Neutron7.position.y = -2.5
Neutron7.position.z = 0
Neutron8.position.x = -0.2
Neutron8.position.y = 3.8
Neutron8.position.z = -1

camera.position.z = 70;
// camera.position.x = 50;
// camera.rotation.y = 3.14


pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set(1,1,2);
camera.add(pointLight);

// const camZ = Math.cos(((22/7)/180)*180)*50
// const camX = Math.sin(((22/7)/180)*180)*50

// camera.position.x = camX;
// camera.position.z = camZ;
// camera.rotation.y = ((22/7)/180)* (360-180)





let deg =1;
const timer = setInterval(()=> {
    deg+=1;
    if(deg==361){
        deg = 0;
    }
},10)

// document.querySelector('#range1').addEventListener('change',()=>{

// })

function animate(){
    requestAnimationFrame(animate);

    const r = 40;
    const z = Math.sin(((22/7)/180)*deg)*r
    const x = Math.cos(((22/7)/180)*deg)*r
   
    // Electron1.position.z = z
    Electron1.position.x = (Math.sin(((22/7)/180)*deg)*r)/4
    Electron1.position.y = (Math.cos(((22/7)/180)*deg)*r)/4

    Electron2.position.z = (Math.sin(((22/7)/180)*(deg-180))*r)/4
    Electron2.position.y = (Math.cos(((22/7)/180)*(deg-180))*r)/4
    Electron2.position.x =   Electron2.position.y

    /////////////
    Electron3.position.y = (Math.sin(((22/7)/180)*deg)*r)/2
    Electron3.position.z = (Math.cos(((22/7)/180)*deg)*r)/2

    Electron4.position.x = (Math.sin(((22/7)/180)*(deg-45))*r)/2
    Electron4.position.z = (Math.cos(((22/7)/180)*(deg-45))*r)/2

    Electron5.position.z = (Math.sin(((22/7)/180)*(deg-45*2))*r)/2
    Electron5.position.y = (Math.cos(((22/7)/180)*(deg-45*2))*r)/2
    Electron5.position.x = Electron5.position.y

    Electron6.position.z = (Math.sin(((22/7)/180)*(deg-45*3))*r)/2
    Electron6.position.y = (Math.cos(((22/7)/180)*(deg-45*3))*r)/2
    Electron6.position.x = Electron6.position.y*-1

    Electron7.position.x = (Math.sin(((22/7)/180)*(deg-45*4))*r)/2
    Electron7.position.y = (Math.cos(((22/7)/180)*(deg-45*4))*r)/2
    Electron7.position.z =   Electron7.position.y

    Electron8.position.x = (Math.sin(((22/7)/180)*(deg-45*5))*r)/2
    Electron8.position.y = (Math.cos(((22/7)/180)*(deg-45*5))*r)/2
    Electron8.position.z = Electron8.position.y * -1

    Electron9.position.x = (Math.sin(((22/7)/180)*(deg-45*6))*r)/2
    Electron9.position.y = (Math.cos(((22/7)/180)*(deg-45*6))*r)/2

////////////////////////

    // Electron3.position.x = (Math.sin(((22/7)/180)*deg)*r)/4*3
    // Electron3.position.y = (Math.cos(((22/7)/180)*deg)*r)/4*3

    // Electron4.position.x =(Math.sin(((22/7)/180)*deg)*r)
    // Electron4.position.y = (Math.cos(((22/7)/180)*deg)*r)


    renderer.render(scene,camera)
}

animate();