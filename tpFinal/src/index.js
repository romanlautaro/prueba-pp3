const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const socketio = require('socket.io')
const osu = require('node-os-utils')

/* eslint-disable */
//aca obtengo toda la funcionalidad de express, depositada en la constante serve
const server = express()

//especificamos el formato de datos que va a manipular nuestor servidor, es decir, nuestra API
server.use(express.json())

//nos va a permitir comunicar al cliente con el servidor, y viceversa
server.use(cors())

//nos va a notificar en la consola, cada vez que se haga petición HTTP(put,delete,post,get)
server.use(morgan('dev'))

//seteamos puerto disponible en el sistema
server.set('port', process.env.PORT || 3000)

//poner las rutas en funcionamiento
server.use(require('./routes/cliente.route'))


//le damos arranque a nuestro servidor
const servidor = server.listen( server.get('port') )

console.log(`Servidor corriendo en el puerto ${server.get('port')}`)

const io = socketio(servidor)
const cpu = osu.cpu

io.on('connection', () => {

  cpu.usage().then((cpuPercentage)=>{
      io.sockets.emit('uso_cpu_porcentual', cpuPercentage)
      console.log(cpuPercentage)
  },1000)

})