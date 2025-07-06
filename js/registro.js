import { completo, validaMail, quitaError, validaContrasenia } from "./validaciones.js";
import { guardarUsuarios, controlarUser } from "./main.js";
document.addEventListener('DOMContentLoaded',()=>{

    /* botones */
    const btnRegistro = document.getElementById('registro');
    const btnRegistrar = document.getElementById('btnRegistrar');
    const btnLogin = document.getElementById('login');
    /* contenedores formulario login y registro */
    const formRegistro = document.getElementById('formRegistro');
    const formLogin = document.getElementById('formLogin');
    /* inputs registro */
    const email = document.getElementById('emailR');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const contrasenia = document.getElementById('contrasenia');
    const contrasenia2 = document.getElementById('contrasenia2');
    const datos = [email, nombre, apellido, contrasenia, contrasenia2];
    /* inputs login */
    const usu = document.getElementById('usuarioL');
    const pass = document.getElementById('passwordL');


    formRegistro.style.display='none';
    formLogin.style.display='block';

    btnLogin.addEventListener('click',(e)=>{
        e.preventDefault();
        if (completo([usu,pass]) && controlarUser(usu, pass) ) {
            localStorage.setItem('usuarioActual',usu.id)
            window.location.href = './panelCarga.html'
        } else {
            
        }
        ;
        ;
    })
    btnRegistro.addEventListener('click',(e)=>{
        e.preventDefault();
        formRegistro.style.display='block';
        formLogin.style.display='none';
    })

    btnRegistrar.addEventListener('click',(e)=>{
        e.preventDefault();
        
        if (completo(datos) && validaMail(datos[0]) && validaContrasenia(datos[3],datos[4])) {
            guardarUsuarios(datos);
            window.location.href = './panelCarga.html'
        }
        
    })

    email.addEventListener('input', ()=>{
        quitaError(email);
    });
    nombre.addEventListener('input', ()=>{
        quitaError(nombre);
    });
    apellido.addEventListener('input', ()=>{
        quitaError(apellido);
    });
    contrasenia.addEventListener('input', ()=>{
        quitaError(contrasenia);
    });
    contrasenia2.addEventListener('input', ()=>{
        quitaError(contrasenia2);
    });
    usu.addEventListener('input', ()=>{
        quitaError(usu);
    });
    pass.addEventListener('input', ()=>{
        quitaError(pass);
    });
})