window.addEventListener('DOMContentLoaded',()=>{
    
    const user = JSON.parse(localStorage.getItem('users'))[0];
    
    const escuela = document.getElementById('escuela');
    const anio = document.getElementById('anio');
    const division = document.getElementById('division');
    const tablaAsist = document.getElementById('tablaAsistencia');
    
    user.institucion.forEach((instituc,index) => {
        let option = document.createElement('option');
        option.textContent = instituc.nombre;
        option.value = index;
        escuela.appendChild(option);
    });

    escuela.addEventListener('click',(e)=>{
        anio.innerHTML = '<option>Seleccione un año</option>';
        division.innerHTML='<option>Seleccione una division</option>';
        const aniosArray = [];
        const escuelaSelect = +e.target.value;
        localStorage.setItem('escuela', escuelaSelect);
        
        if (e.target.value) {
            user.institucion[escuelaSelect].curso.forEach((aniox)=>{
                if (!aniosArray.includes(+aniox.anio)) {
                    aniosArray.push(+aniox.anio);
                    let option = document.createElement('option');
                    option.textContent = aniox.anio;
                    option.value = aniox.anio;
                    anio.appendChild(option)
                }
            }) 
        } else{
            tablaAsist.innerHTML='';
        }
    })

    anio.addEventListener('click',(e)=>{
        const anioSelect = +e.target.value;
        const escuelaSelect = localStorage.getItem('escuela');
        localStorage.setItem('anio',anioSelect);
        division.innerHTML='<option>Seleccione una division</option>';
        
        user.institucion[escuelaSelect].curso.forEach(curs => {            
            if (+curs.anio == anioSelect ) {
                let option = document.createElement('option');
                option.textContent = curs.division;
                option.value = curs.division;
                division.appendChild(option)
            }
        })
        
    })

    division.addEventListener('click',(e)=>{
        tablaAsist.innerHTML='';
        const divisionSelect = e.target.value;
        const escuelaSelect = localStorage.getItem('escuela');
        const anioSelect = +localStorage.getItem('anio');
        let alumnado =[];
        const selectAsistencia = `<select class="asistencia-select">
                                    <option value=""></option>
                                    <option value="P">P</option>
                                    <option value="A">A</option>
                                    <option value="T">T</option>
                                    <option value="J">J</option>
                                </select>`;

        user.institucion[escuelaSelect].curso.forEach((curs, index) =>{          
            if (+curs.anio === anioSelect && curs.division === divisionSelect) {
                alumnado = user.institucion[escuelaSelect].curso[index].alumnos;
            }
        })

        alumnado.forEach(alumno => {
            const fila = document.createElement('tr');
            fila.innerHTML = `<td>${alumno.apellido}, ${alumno.nombre}</td>` + `<td>${selectAsistencia}</td>`.repeat(20)
            tablaAsist.appendChild(fila)    
        })
        
    })
})
