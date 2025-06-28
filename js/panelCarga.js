import { provincias } from "../assets/data/provincias.js";
import { ciudades } from "../assets/data/ciudades.js";
import { estaVacio, completo } from "./validaciones.js";
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
const inputInstitucion = document.getElementById('institucion')
const inputDireccion = document.getElementById('direccion')

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
        td.innerHTML='<i class="fa-solid fa-trash-can"></i>'
        tr.appendChild(td);
        listaEscuelas.appendChild(tr)
    }
})
/* borrar fila */

const tablaEscuela = document.getElementById('tablaEscuela');

tablaEscuela.addEventListener('click',(e)=>{
    if (e.target.classList.contains('fa-trash-can')) {
        const fila = e.target.closest('tr');
        fila.remove();
        
    }
})
