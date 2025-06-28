
export function estaVacio(input) {
    const labelInput = document.querySelector(`label[for=${input.id}]`);
    const errorSpan = labelInput.querySelector('.spanError');
    let vacio = false;
    if (input.value === '') {
        input.classList.add('errorInput');
        if (!errorSpan) {
            labelInput.innerHTML +='<span class="spanError" >Campo Obligatorio</span>';
        }
        vacio = true;
    } else {
        input.classList.remove('errorInput');
        if (errorSpan) {
            errorSpan.remove();
        }
    }
    return vacio;
}

export function completo(inputs) {
    let cantValidos = 0;
    let completo = false;
    for (const input of inputs) {
        if (!estaVacio(input)) {
            cantValidos ++;
        }
    }
    if (cantValidos === inputs.length) {
        completo = true;
    }
    return completo;    
}