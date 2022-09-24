const { log } = require('console')
const http = require('http')

const server = http.createServer((peticion, respuesta)=>{
  respuesta.end('ola mundo')
})

const connectServer = server.listen(8080, ()=>{
  console.log(`escuchando puerto ${connectServer.address().port}`);
})