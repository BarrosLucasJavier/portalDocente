
export function estaVacio(input) {
    
    let vacio = false;
    if (input.value === '') {
        colocaError(input,'Campo obligatorio')
        vacio = true;
    } else {
        quitaError(input)
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
export function validaMail(input) {
    let texto = input.value;
    let partes = texto.split('@');
    let cantArrobas = partes.length - 1;
    
    if (cantArrobas < 1) {
        colocaError(input, 'Falta @')
    } else if (cantArrobas > 1) {
        colocaError(input, 'Solo un @')
    } else {
        if (partes[0].length < 1) {
            colocaError(input, 'Faltan caracteres antes del @')
        } else {
            if (partes[1].length < 1) {
                colocaError(input, 'Faltan caracteres despues del @');
            } else {
                if (partes[1].includes('.')) {
                    if ((partes[1].length - partes[1].lastIndexOf('.')) > 2) {
                        
                    } else {
                        colocaError(input, 'Faltan al menos dos caracteres despues del punto');
                    }
                } else {
                    colocaError(input, 'Falta el punto despues del @');
                }
            }
        }
        
    }

}
export function colocaError(input,msg) {
    const labelInput = document.querySelector(`label[for=${input.id}]`);
    const errorSpan = labelInput.querySelector('.spanError');

    input.classList.add('errorInput');

    if (!errorSpan) {
        labelInput.innerHTML += `<span class="spanError" >${msg}</span>`;
    }
}
export function quitaError(input) {
    const labelInput = document.querySelector(`label[for=${input.id}]`);
    const errorSpan = labelInput.querySelector('.spanError');

    input.classList.remove('errorInput');

    if (errorSpan) {
        errorSpan.remove();
    }
}
export function validaContrasenia(pass, pass1) {
    if (pass.value === pass1.value) {
        if (pass.value.length > 7) {
            return true
        } else {
            colocaError(pass,'Al menos 8 caracteres')
        }
    } else {
        colocaError(pass,'Las contraseñas no coinciden')
        colocaError(pass1,'Las contraseñas no coinciden')
    }
}
