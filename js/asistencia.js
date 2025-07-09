window.addEventListener('DOMContentLoaded',()=>{
    
    const user = JSON.parse(localStorage.getItem('usuarioDatos'));    
    
    const escuela = document.getElementById('escuela');
    const curso = document.getElementById('curso')
    const tablaAsist = document.getElementById('tablaAsistencia');
    
    user.institucion.forEach((instituc,index) => {
        let option = document.createElement('option');
        option.textContent = instituc.nombre;
        option.value = index;
        escuela.appendChild(option);
    });

    escuela.addEventListener('click',(e)=>{
        const escuelaSelect = +e.target.value;
        localStorage.setItem('escuela', escuelaSelect);
        
        if (e.target.value) {
            user.institucion[escuelaSelect].curso.forEach((aniox, index)=>{
                    let option = document.createElement('option');
                    option.textContent = aniox.anio + ' - ' + aniox.division;
                    option.value = index;
                    curso.appendChild(option)
            }) 
        } else{
            tablaAsist.innerHTML='';
        }
    })

    curso.addEventListener('click',(e)=>{
        if (e.target.value) {
            tablaAsist.innerHTML='';
            const cursoSelect = e.target.value;
            localStorage.setItem('curso',cursoSelect);
            const escuelaSelect = localStorage.getItem('escuela');
            let alumnado =user.institucion[escuelaSelect].curso[cursoSelect].alumnos;
            const selectAsistencia = `<select class="asistencia-select">
                                        <option value=""></option>
                                        <option value="P">P</option>
                                        <option value="A">A</option>
                                        <option value="T">T</option>
                                        <option value="J">J</option>
                                    </select>`;
            alumnado.forEach(alumno => {
                const fila = document.createElement('tr');
                fila.innerHTML = `<td>${alumno.apellido}, ${alumno.nombre}</td>` + `<td>${selectAsistencia}</td>`.repeat(20)
                tablaAsist.appendChild(fila)    
            }) 
        }       
    })

    /* guardado */
    const btnGuardar = document.getElementById('guardar');
    const guardadoP = document.getElementById('guardadoP')
    btnGuardar.addEventListener('click',()=>{
    
        for (let i = 0; i < tablaAsist.rows.length; i++) {
            const fila = tablaAsist.rows[i];
            const datos = [];
            for (let j = 1; j < fila.cells.length; j++) {
                const td = fila.cells[j];
                const select = td.querySelector('select');
                if (select) {
                    datos.push(select.value)
                } else {
                    datos.push('');
                }
            }
            
            user.institucion[localStorage.getItem('escuela')].curso[+localStorage.getItem('curso')].alumnos[i].asistencia = datos;
        }
        guardadoP.textContent = 'Datos guardados'
    })
})
