window.addEventListener('DOMContentLoaded',()=>{
    
    const user = JSON.parse(localStorage.getItem('users'))[0];
    
    const escuela = document.getElementById('escuela');
    const anio = document.getElementById('anio');
    const division = document.getElementById('division');
    
    user.institucion.forEach((instituc,index) => {
        let option = document.createElement('option');
        option.textContent = instituc.nombre;
        option.value = index;
        escuela.appendChild(option);
    });

    escuela.addEventListener('click',(e)=>{
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
        }
    })
    anio.addEventListener('click',(e)=>{
        const anioSelect = +e.target.value;
        const escuelaSelect = localStorage.getItem('escuela');
        localStorage.setItem('anio',anioSelect);
        division.innerHTML='<option>Seleccione una Division</option>';
        
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
        const divisionSelect = e.target.value;
        const escuelaSelect = localStorage.getItem('escuela');
    })
})



