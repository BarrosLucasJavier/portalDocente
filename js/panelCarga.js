import { provincias } from "../assets/data/provincias.js";
import { ciudades } from "../assets/data/ciudades.js";
import { cursosLetra, cursosNumero } from "../assets/data/cursos.js";
import { completo } from "./validaciones.js";
import { limpiar } from "./funciones.js";

/* Pestañas */
const cargaCurso = document.getElementById('cargaCurso');
const cargaEscuelas = document.getElementById('cargaEscuelas');
const cargaAlumno = document.getElementById('cargaAlumno');

cargaEscuelas.addEventListener('click',()=>{
    cargaEscuelas.classList.add('posicionAdelante');
    cargaCurso.classList.remove('posicionAdelante');
    cargaAlumno.classList.remove('posicionAdelante');
    
})
cargaCurso.addEventListener('click',()=>{
    cargaCurso.classList.add('posicionAdelante');
    cargaEscuelas.classList.remove('posicionAdelante');
    cargaAlumno.classList.remove('posicionAdelante');
});
cargaAlumno.addEventListener('click',()=>{
    cargaAlumno.classList.add('posicionAdelante');
    cargaCurso.classList.remove('posicionAdelante');
    cargaEscuelas.classList.remove('posicionAdelante');    
});
/* -------------- Pestaña Escuelas --------------------- */
/* cargar provincias */
let selectProvincias = document.getElementById('provincia');
let selectCiudad = document.getElementById('ciudad');
for (const provincia of provincias) {
    let option = document.createElement('option');
    option.value = provincia;
    option.textContent = provincia;
    selectProvincias.appendChild(option);
}

/* carga ciudades */
selectProvincias.addEventListener('click',()=>{   
    for (const ciudad of ciudades) {
        if (ciudad.nombre == selectProvincias.value) {
            selectCiudad.innerHTML='<option value="">Seleccione una Ciudad</option>';
            for (const localidad of ciudad.ciudades) {
                let option = document.createElement('option');
                option.value = localidad.nombre;
                option.textContent = localidad.nombre;
                selectCiudad.appendChild(option);
            }
        }    
    }
});

/* carga de lista */
const listaEscuelas = document.getElementById('listadoEscuelas');
const btnEscuela = document.getElementById('btnEscuela');
const inputInstitucion = document.getElementById('institucion');
const inputDireccion = document.getElementById('direccion');

listaEscuelas.classList.add('desaparece');

btnEscuela.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let valoresEscuelas = [inputInstitucion, selectProvincias,selectCiudad, inputDireccion];

    if (completo(valoresEscuelas)) {

        let tr = document.createElement('tr');

        for (const valor of valoresEscuelas) {
                let td = document.createElement('td');
                td.textContent = valor.value;
                tr.appendChild(td);
            }
            
        let td = document.createElement('td');
        td.innerHTML='<i class="fa-solid fa-trash-can"></i>';
        tr.appendChild(td);
        listaEscuelas.appendChild(tr);
        listaEscuelas.classList.remove('desaparece');
        limpiar(valoresEscuelas);
    }
})

/* borrar fila */
const tablaEscuela = document.getElementById('tablaEscuela');

tablaEscuela.addEventListener('click',(e)=>{
    if (e.target.classList.contains('fa-trash-can')) {
        const fila = e.target.closest('tr');
        fila.remove();
        const filasRestantes = tablaEscuela.querySelectorAll('tbody tr');
        
        if (filasRestantes.length === 1) {
            listaEscuelas.classList.add('desaparece');
        }
    }
    
})

/* -------------- Pestaña Cursos --------------------- */
/* curso select */
const selectTipo = document.getElementById('divisionCursoTipo');
const selectLetraoNumero = document.getElementById('divisionCurso');
const turnoInput = document.getElementById('turno');
const anioInput = document.getElementById('anioCurso');

selectTipo.addEventListener('click',()=>{
    selectLetraoNumero.innerHTML='<option value="">Seleccione una opción</option>';
    if (selectTipo.value == 'letra') {
        for (const letra of cursosLetra) {
                let option = document.createElement('option');
                option.value = letra;
                option.textContent = letra;
                selectLetraoNumero.appendChild(option);
            }
        } else {
        for (const numero of cursosNumero) {
                let option = document.createElement('option');
                option.value = numero;
                option.textContent = numero;
                selectLetraoNumero.appendChild(option);
            }
        
    }
})
/* cargar lista */
const listaCursos = document.getElementById('listadoCursos');
const btnCurso = document.getElementById('btnCurso');

listaCursos.classList.add('desaparece');

btnCurso.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let valoresCursos= [turnoInput, anioInput,selectLetraoNumero ];

    if (completo(valoresCursos)) {

        let tr = document.createElement('tr');

        for (const valor of valoresCursos) {
                let td = document.createElement('td');
                td.textContent = valor.value === 'Maniana' ? 'Mañana' : valor.value;
                tr.appendChild(td);
            }
            
        let td = document.createElement('td');
        td.innerHTML='<i class="fa-solid fa-trash-can"></i>';
        tr.appendChild(td);
        listaCursos.appendChild(tr);
        listaCursos.classList.remove('desaparece');
        limpiar(valoresCursos);
    }
})

/* borra fila */
const tablaCurso = document.getElementById('tablaCurso');
tablaCurso.addEventListener('click',(e)=>{
    if (e.target.classList.contains('fa-trash-can')) {
        const fila = e.target.closest('tr');
        fila.remove();
        const filasRestantes = tablaCurso.querySelectorAll('tbody tr');

        if (filasRestantes.length === 1) {
            listaCursos.classList.add('desaparece');
        }
    }
})

/* -------------- Pestaña Alumnos --------------------- */
/* cargar lista */
const listaAlumno = document.getElementById('listadoAlumnos');
const btnAlumno = document.getElementById('btnAlumno');
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');

listaAlumno.classList.add('desaparece');

btnAlumno.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let valoresAlumnos= [inputApellido, inputNombre];

    if (completo(valoresAlumnos)) {

        let tr = document.createElement('tr');

        for (const valor of valoresAlumnos) {
                let td = document.createElement('td');
                td.textContent = valor.value;
                tr.appendChild(td);
            }
            
        let td = document.createElement('td');
        td.innerHTML='<i class="fa-solid fa-trash-can"></i>';
        tr.appendChild(td);
        listaAlumno.appendChild(tr);
        listaAlumno.classList.remove('desaparece');
        limpiar(valoresAlumnos);
    }
})

/* borra fila */
const tablaAlumno = document.getElementById('tablaAlumno');
tablaAlumno.addEventListener('click',(e)=>{
    if (e.target.classList.contains('fa-trash-can')) {
        const fila = e.target.closest('tr');
        fila.remove();
        const filasRestantes = tablaAlumno.querySelectorAll('tbody tr');

        if (filasRestantes.length === 1) {
            listaAlumno.classList.add('desaparece');
        }
    }
})