import { userDatos, usuarios } from "../assets/data/users.js";
import { colocaError } from "../js/validaciones.js";

localStorage.setItem('userDatos',JSON.stringify(userDatos));
localStorage.setItem('usuarios',JSON.stringify(usuarios));

export function guardarUsuarios(datos) {
    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios'));
    
    let userNuevo = {
        id: (usuariosGuardados[usuariosGuardados.length - 1].id) + 1,
        correo: datos[0].value,
        nombre: datos[1].value,
        apellido: datos[2].value,
        contrasenia: datos[3].value
    }
    usuariosGuardados.push(userNuevo);
    localStorage.setItem('usuarios',JSON.stringify(usuariosGuardados));
}

export function controlarUser(usu, pass) {
    let usuariosGuard = JSON.parse(localStorage.getItem('usuarios'));

    for (const usua of usuariosGuard) {
        if (usua.correo.trim() === usu.value.trim()) {
            if (usua.contrasenia === pass.value) {
                return usua.id;
            } else {
                colocaError(pass,'Contraseña incorrecta');
                return false
            }
        }
    }
    colocaError(usu,'Usuario incorrecto');
}

export function seteoDatos(id) {
    let todosUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    let todosDatos = JSON.parse(localStorage.getItem('userDatos'));

    for (const elUsusario of todosUsuarios ) {
        
        if (elUsusario.id === id) {
            localStorage.setItem('usuario',JSON.stringify(elUsusario));
            break;
        }
    }
    for (const datos of todosDatos) {
        if (datos.id === id) {
            localStorage.setItem('usuarioDatos',JSON.stringify(datos));
            break;
        }
    }
}