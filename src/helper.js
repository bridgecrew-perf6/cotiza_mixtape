

//calcula el total a pagar segun el estilo musical

export function calcularEstilo(estilo) {
    let incremento;

    switch(estilo){

        case 'reggaeton':
            incremento = 1;
            break;
        case 'house':
            incremento = 1.30;
            break;
        case 'hiphop':
            incremento = 1.40;
            break;
        case 'reggae':
            incremento = 1.50;
            break;
        case 'dubstep':
            incremento = 1.60;
            break;
        case 'rock':
            incremento = 1.70;
            break;
        case 'party':
            incremento = 2;
            break;
        case 'street':
            incremento = 2;
            break;
        default:
            break;

    }
    return incremento;

}

// calcula el tipo de mixtape

export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1 : 2;
}

//muestra la primera letra mayuscula

export function primerMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}