const {promises:fs} = require('fs')
class Contenedor{
  static newId=0;
  constructor(ruta){
    this.ruta=ruta;
  }
  async save(obj){
    let objs = await this.getAll();
    if(objs.length == 0){
      Contenedor.newId=1;
    }else{
      let long= objs.length
      Contenedor.newId=long+1;
    }
    obj={id:Contenedor.newId, ...obj}
    let datos = [...objs, obj]
    try {
      await fs.writeFile(this.ruta, JSON.stringify(datos,null,2))
    } catch (error) {
      throw new Error(`eror al guardar datos ${error}`)
    }
  }
  async getById(id){
    let objs = await this.getAll();
    let obj = objs.filter(o=>o.id==id)
    if(obj.length==0){
      return `No se puede obtener el dato con el id: ${id}`
    }
    return obj
  }
  async getAll(){
    try {
      const objetos = await fs.readFile(this.ruta)
      return JSON.parse(objetos)
    } catch (error) {
      return []
    }
  }
  async deleteById(id){
    let objs = await this.getAll();
    let obj = objs.filter(o=>o.id!==id)
    try {
      // return obj
      await fs.writeFile(this.ruta, JSON.stringify(obj,null,2))
    } catch (error) {
      return `No se puede borrar ese obj`
    }
  }
  async deleteAll(){
    try {
      await fs.writeFile(this.ruta, JSON.stringify([],null,2))
    } catch (error) {
      return `no se pudo borrar`
    }
  }
  async modificarDatos(){
    
  }
}

let alumno = new Contenedor('./alumnos.json')
// alumno.save({name:"victor", apellido: "osinaga"})
function ejecutar(cb){
  setTimeout(() => {
    cb()
  }, 2500);
}

ejecutar(()=>{
  alumno.save({name:"victor", apellido: "osinaga"})

  
  ejecutar(()=>{
    alumno.save({name:"victor", apellido: "osinaga"})
    
    ejecutar(()=>{
      alumno.save({name:"victor", apellido: "osinaga"})
      
      ejecutar(()=>{
        alumno.save({name:"victor", apellido: "osinaga"})
        
        ejecutar(()=>{
          alumno.getById(2)
            .then((data)=>{
              console.log(data)
            }).catch((err)=>{
              console.log(err);
            })
      
            ejecutar(()=>{
              alumno.getAll()
                .then((data)=>{
                  console.log(data)
                })
      
                ejecutar(()=>{
                  alumno.deleteById(2)
                    .then((data)=>{
                      console.log('se elimino el registro')
                    }).catch((err)=>{
                      console.log(err);
                    })
      
                    ejecutar(()=>{
                      alumno.deleteAll()
                        .then((data)=>{
                          console.log('se elimino TODO')
                        }).catch((err)=>{
                          console.log(err);
                        })
                      })
                  })
              })
          })
      })
    })
  })
})


// alumno.deleteById(3)
// .then((data)=>{
//   console.log('se elimino el registro')
// }).catch((err)=>{
//   console.log(err);
// })

// alumno.deleteAll()
//   .then((data)=>{
//     console.log('se elimino TODO')
//   }).catch((err)=>{
//     console.log(err);
//   })