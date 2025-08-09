let usuariosRegistrados = [
    'Adrian Bravo',
    'Luis Anaya',
    'Sergio Peña'
];

const cursos = [
    'algebra',
    'calculo',
    'trigonometria',
    'fisica',
    'quimica'
];

function saludar( usuario ) {
    alert(`Bienvenido ${usuario}. . ¿Listo para aprender algo nuevo hoy?`)
}

function ingresarPortal() {
   
    let existe = false;

    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i] === usuario) {
            existe = true;
            break;
        }
    }

    if (encontrado) {
        saludar(usuario);
    } else {
        alert("Usuario no registrado.");
        return;
    }
}

let usuario = prompt('Bienvenido a Sciencie2everyone, favor de ingrsar su nombre registrado');

while(!usuario) {
usuario = prompt('Por favor ingresa tu usuario');
// Cómo salir cuando le dan cancelar en el prompt????
}

ingresarPortal();


let cursoSeleccionado = prompt('Selecciona de entre los siguientes cursos disponibles: Algebra, Calculo, Trigonometria, Fisica, Quimica');
cursoSeleccionado.toLowerCase();
// console.log(cursoSeleccionado);

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


