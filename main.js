let nombre = prompt('Bienvenido a Sciencie2everyone, favor de ingrsar su nombre');

console.log(nombre)

alert(`Buenos dias ${nombre}. ¿Listo para aprender algo nuevo hoy?`)


const cursos = [
    'algebra',
    'calculo',
    'trigonometria',
    'fisica',
    'quimica'
];

let cursoSeleccionado = prompt('Selecciona de entre los siguientes cursos disponibles: Algebra, Calculo, Trigonometria, Fisica, Quimica');
cursoSeleccionado.toLowerCase();
console.log(cursoSeleccionado);

while(!cursoSeleccionado) {
    cursoSeleccionado = prompt('Favor de seleccionar alguno de los cursos disponibles: Algebra, Calculo, Trigonometria, Fisica, Quimica');
    cursoSeleccionado = cursoSeleccionado.toLowerCase();
    console.log(cursoSeleccionado)
}

switch(cursoSeleccionado) {
    case 'algebra':
        alert(`Has selecciónado ${cursoSeleccionado}. En horabuena!`)
        break;
    case 'calculo':
        alert(`Has selecciónado ${cursoSeleccionado}. En horabuena!`)
        break;
    case 'trigonometria':
        alert(`Has selecciónado ${cursoSeleccionado}. En horabuena!`)
        break;
    case 'fisica':
        alert(`Has selecciónado ${cursoSeleccionado}. En horabuena!`)
        break;
    case 'quimica':
        alert(`Has selecciónado ${cursoSeleccionado}. En horabuena!`)
        break;
    default:
        alert('No contamos con ese curso')
        break;
}


