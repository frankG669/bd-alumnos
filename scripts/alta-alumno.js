//Abrir ventana nodal
let ventanaModalAbierta = false;

const abrirModal = function(){
    if(!ventanaModalAbierta){
        const modal = document.getElementById('modal-box');
        modal.style.display = 'flex';
        ventanaModalAbierta= true;
    }
}


//Cerrar ventana modal
const cerrarModal = function(){
    if(ventanaModalAbierta == true){
        const modal = document.getElementById('modal-box');
        modal.style.display = 'none';
        ventanaModalAbierta = false;
    }
}

class AltaAlumno {
    constructor(nombre, apellidoPat, apellidoMat, edad){
        this.nombre = nombre;
        this.apellidoPat = apellidoPat;
        this.apellidoMat = apellidoMat;
        this.edad = edad;
    }
}

function enviarFormulario(event){
    event.preventDefault();

    //obtener valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidoPat = document.getElementById('apellidoPat').value;
    const apellidoMat = document.getElementById('apellidoMat').value;
    const edad = document.getElementById('edad').value;

    //Crear una nueva instancia
    const datosAlumno = new AltaAlumno(nombre, apellidoPat, apellidoMat, edad);

    alumnos.push(datosAlumno);
    console.log(alumnos);

    formulario.reset();
}

const formulario = document.getElementById('alta-alumnos');
formulario.addEventListener('submit', enviarFormulario);