let scene, camera, renderer,
       init = () => {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
        camera.position.set(-900,-200,-900);
        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);

        let controls = new THREE.OrbitControls(camera);

        controls.addEventListener('change', renderer);
        controls.minDistance = 500;
        controls.maxDistance = 3500;
        
        let materialArray = [],
            texture_ft = new THREE.TextureLoader().load( 'img/corona_ft.png'),
            texture_bk = new THREE.TextureLoader().load( 'img/corona_bk.png'),
            texture_up = new THREE.TextureLoader().load( 'img/corona_up.png'),
            texture_dn = new THREE.TextureLoader().load( 'img/corona_dn.png'),
            texture_rt = new THREE.TextureLoader().load( 'img/corona_rt.png'),
            texture_lf = new THREE.TextureLoader().load( 'img/corona_lf.png');
          
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
        for (let i = 0; i < materialArray.length; i++)
           materialArray[i].side = THREE.BackSide;
        let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000),
            skybox = new THREE.Mesh( skyboxGeo, materialArray );
        scene.add( skybox );  
        animate();
      }
    let animate = () => {
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
      }
      init();