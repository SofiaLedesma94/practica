
/*const btnValidar=document.getElementById('validar')
const inputNombre=document.getElementById('nombre')
const inputPais=document.getElementById('pais')

btnValidar.addEventListener('click', async ()=>{
   //empaquetar informacion a un objeto 
   const infoObjeto={
    nombre:inputNombre.value, 
    pais: inputPais.value
   } 
  console.log(infoObjeto)
})*/

//clases = los objetos son instancias de las clases 
/*class Alumno{
    constructor(nombre,apellido){
        this.nombreAlumno=nombre
        this.apellidoAlumno=apellido
        this.edad=0
    }
    //metodos
    estudiar(){
        return `estudia actualmente ${this.apellidoAlumno}`
    }
    carrera(carrera){
       return `el estudiando ${this.nombreAlumno} estudia la carrera ${carrera}`
    }
    static saludas(){
        return 'hola estudiante'
    }
}
// instanciar objetos 

const alumno =new Alumno('sofia','ledesma')

const alumno2= new Alumno ('carla','perez')


console.log(alumno2)*/

//herencia 
/*class Proiedad{
    constructor(precio,mt2){
       this.precio=precio
       this.mt2=mt2
    }
   precioPropiedad(precio,mt2){
     return this.precio*this.mt2
   }    

}

class Departamento extends Proiedad{
    constructor(precio,mt2,ubicacion,disponible){
       super (precio,mt2)
       this.ubicacion=ubicacion
       this.disponible=disponible
    }
    Diponibilidad(disponible){
     return `el departamento ${this.disponible} esta disponible para vender o alquilar`
    }
}

const departamento= new Departamento(50000,30,'cordoba','si')
console.log(departamento,departamento.precioPropiedad(50000,30),departamento.Diponibilidad('si'))*/

// iteracion de botones 
const btn=document.querySelectorAll('button')

console.log(btn)
for(var i=0; i<btn.length;i++){
  btn[i].addEventListener('click', function(){
       alert('hiciste click en ' + this.innerText)
    })
}