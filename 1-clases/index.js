class Usuario {
  constructor(nombre, apellido, libros, mascotas){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = libros
    this.mascotas = mascotas
  }

  getFullName(){
    return `${this.nombre} ${this.apellido}`
  }

  addMascota(mascota){
    return this.mascotas.push(mascota)
  }

  countMascotas(){
    return this.mascotas.length
  }

  addBook(nombre, autor){
    this.libros.push({
      nombre: nombre,
      autor: autor
    })
  }

  getBookNames(){
    let nombres = []
    for (let i = 0; i <this.libros.length; i++){
      nombres.push(this.libros[i].nombre)
    }
    return nombres
  }
}

let nombre = 'Victor'
let apellido = 'Osinaga'
let mascotas = []
let libros = []
let usuario1 = new Usuario(nombre, apellido, libros, mascotas);

usuario1.addMascota('Perro Juan')
usuario1.addMascota('Gato negro')
usuario1.addBook('El sonido y la furia', 'William Faulkner')
usuario1.addBook('Alicia en el país de las maravillas', 'Lewis Carroll')

console.log('Nombre completo :', usuario1.getFullName())
console.log('Cantidad de mascotas: ', usuario1.countMascotas())
console.log('Nombres de libros: ', usuario1.getBookNames())



// Add info HTML

let divRoot = document.getElementById('root')
divRoot.innerHTML = `
  <p>Nombre de usuario: <b>${usuario1.getFullName()}</b></p>
  <p>Cantidad de mascotas: <b>${usuario1.countMascotas()}</b></p>
  <p id='mascotas'>Nombres de mascotas: <br></p>
  <p>Cantidad de libros: <b>${usuario1.libros.length}</b></p>
  <p id='libros'>Nombres de libros: <br></p>
`

let bookNames = usuario1.getBookNames()
let mascotasName = usuario1.mascotas

function mostrar(arr, id){
  if (arr === mascotasName){
    arr.forEach((nombre,index)=>{
      document.getElementById(id).innerHTML += `<b>${index+1}:</b> ${nombre} `
    })
  }else {
    arr.forEach((nombre,index)=>{
      document.getElementById(id).innerHTML += `<b>${index+1}:</b> ${nombre} 
      <b>Autor: </b>${usuario1.libros[index].autor}`
    })
  }
}

mostrar(bookNames, "libros")
mostrar(mascotasName, "mascotas")