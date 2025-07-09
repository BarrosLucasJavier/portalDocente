const inputColor = document.getElementById('color');

inputColor.addEventListener('input', ()=>{
    console.log(inputColor.value);
    
    document.documentElement.style.setProperty('--colorPpal', inputColor.value);
    localStorage.setItem('color',inputColor.value)
})