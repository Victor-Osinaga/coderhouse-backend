const {promises:fs} = require('fs')
class Contenedor{
  static id=0;
  constructor(ruta){
    this.ruta=ruta;
  }
  async save(obj){
    let objs = await this.getAll();
    if(objs.length === 0){
      Contenedor.id++;
    }else{

    }
    obj={id:Contenedor.id, ...obj}
    let datos = {...objs, obj}
    try {
      await fs.writeFile(this.ruta, JSON.stringify(datos))
    } catch (error) {
      
    }
  }
  async getById(id){
    
  }
  async getAll(){
    try {
      const objetos = await fs.readFile(this.ruta)
      return JSON.parse(objetos)
    } catch (error) {
      return []
    }
  }
  async deleteById(){
    
  }
  async deleteAll(){
    
  }
}