function main () {
    // scene camera renderer -3 must!
    const canvas = document.querySelector('#c')

    const fav = 75
    //const aspect = 2
    const aspect = canvas.clientWidth / canvas.clientHeight
    const near = 0.1
    const far = 2000
    
    
    const camera = new THREE.PerspectiveCamera(fav, aspect, near, far)
    camera.position.z = 1


    const renderer = new THREE.WebGLRenderer({ canvas })

    function func()
    {
        var chb = document.getElementsByClassName('chb');
        

        if(chb[3].checked && chb[2].checked)
        {
           HOPE = './images/6.jpg';
        }
        else if(chb[3].checked && chb[1].checked)
        {
           HOPE = './images/5.jpg';
        }
        else if(chb[3].checked && chb[0].checked || chb[3].checked)
        {
           HOPE = './images/4.jpg';
        }
        else if(chb[0].checked)
        {
           HOPE = './images/1.jpeg';
        }
        else if(chb[1].checked)
        {
           HOPE = './images/2.jpg';
        }
        else if(chb[2].checked)
        {
           HOPE = './images/3.jpg';
        }
        else{
           HOPE = './images/1.jpeg';
        }
        
   }


   func()


    new THREE.OrbitControls(camera, canvas)
    const scene = new THREE.Scene()
    const loader = new THREE.TextureLoader()
    const texture = loader.load(
        HOPE,

        () => {
            const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
            rt.fromEquirectangularTexture(renderer, texture)
            scene.background = rt.texture
        }
    )



        function render () {
            const width = canvas.clientWidth
            const height = canvas.clientHeight
            camera.aspect = width / height          
            camera.updateProjectionMatrix() 
            renderer.setSize(width, height, false )
            renderer.render(scene, camera)
            requestAnimationFrame(render)
        }

        requestAnimationFrame(render)


}

main()



