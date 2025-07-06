import { user, usuarios } from "../assets/data/users.js";
import { colocaError } from "../js/validaciones.js";

localStorage.setItem('users',JSON.stringify(user));
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
    console.log(usuariosGuardados);
    usuariosGuardados.push(userNuevo);
    localStorage.setItem('usuarios',JSON.stringify(usuariosGuardados))
    
}

export function controlarUser(usu, pass) {
    let usuariosGuard = JSON.parse(localStorage.getItem('usuarios'));

    for (const usua of usuariosGuard) {
        if (usua.correo.trim() === usu.value.trim()) {
            if (usua.contrasenia === pass.value) {
                return true;
            } else {
                colocaError(pass,'Contraseña incorrecta');
                return false
            }
        }
    }
    colocaError(usu,'Usuario incorrecto');
}

