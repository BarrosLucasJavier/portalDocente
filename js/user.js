window.addEventListener('DOMContentLoaded',()=>{
    const colorGuardado = localStorage.getItem('color');
    if (colorGuardado) {
        document.documentElement.style.setProperty('--colorPpal', colorGuardado);
    }
    const inputColor = document.getElementById('color');
    const nombre = document.getElementById('nombreUser')
    const apellido = document.getElementById('apellidoUser')
    const logout = document.getElementById('logout')

    const usuarioActual = JSON.parse(localStorage.getItem('usuario'));

    nombre.innerText = usuarioActual.nombre
    apellido.innerText = usuarioActual.apellido

    inputColor.addEventListener('input', ()=>{
        console.log(inputColor.value);
        
        document.documentElement.style.setProperty('--colorPpal', inputColor.value);
        localStorage.setItem('color',inputColor.value)
    })

    logout.addEventListener('click',()=>{
        localStorage.removeItem('usuario')
        window.location.href = '../index.html';

    })
})
