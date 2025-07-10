window.addEventListener('DOMContentLoaded',()=>{

    const colorGuardado = localStorage.getItem('color');
    if (colorGuardado) {
        document.documentElement.style.setProperty('--colorPpal', colorGuardado);
    }

    let user = JSON.parse(localStorage.getItem('usuarioDatos'));    
    
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
        curso.innerHTML = '<option value="">Seleccione un curso</option>';
        
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
            
            alumnado.forEach(alumno => {
                let fila = document.createElement('tr');
                let td = `<td>${alumno.apellido}, ${alumno.nombre}</td>`;

                for (let i = 0; i < 20; i++) {
                    const valor = alumno.asistencia?.[i] || "";
                    
                    td += `<td>
                            <select>
                                <option value="" ${valor === "" ? "selected" : ""}></option>
                                <option value="P" ${valor === "P" ? "selected" : ""}>P</option>
                                <option value="A" ${valor === "A" ? "selected" : ""}>A</option>
                                <option value="T" ${valor === "T" ? "selected" : ""}>T</option>
                                <option value="J" ${valor === "J" ? "selected" : ""}>J</option>
                            </select>
                        </td>`
                }
                fila.innerHTML = td;
                tablaAsist.appendChild(fila)    
            }) 
        }       
    })

    /* guardado */
    const btnGuardar = document.getElementById('guardar');
    const guardadoP = document.getElementById('guardadoP')
    
    btnGuardar.addEventListener('click',()=>{
        const esc = localStorage.getItem('escuela');
        const cur = +localStorage.getItem('curso');
        
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
            
            user.institucion[esc].curso[cur].alumnos[i].asistencia = datos;
        }
        guardadoP.textContent = 'Datos guardados';
        setTimeout(()=>{
            guardadoP.textContent = '';
        },3000)
        localStorage.setItem('usuarioDatos',JSON.stringify(user)); 
    })

    /* cancel */
    const btnCancelar = document.getElementById('cancelar');

    btnCancelar.addEventListener('click',()=>{
        curso.dispatchEvent(new Event('click'));
    })
})
