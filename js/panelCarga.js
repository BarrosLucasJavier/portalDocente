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
