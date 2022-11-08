const express = require('express')

const enrutador = express.Router();

const pool = require('../database')

enrutador.get('/clientes', async (req,res) => {

    const db = await pool.obtenerConexion()
    //vamos a realizar una consulta a la base. Es decir, una query.
    const rows = await db.query('select * from cliente')

    res.json(rows)
})

enrutador.post('/cliente', async (req,res) => {

    const unCliente = req.body;
    const db = await pool.obtenerConexion()
    await db.query(`insert into cliente (nombre,apellido,dni)
    VALUES ('${unCliente.nombre}','${unCliente.apellido}',${unCliente.dni})`)

    res.json('El cliente se creo exitosamente')

})

enrutador.put('/cliente/:codigo', async (req,res) => {

    const db = await pool.obtenerConexion()
    const id = req.params.codigo
    const cm = req.body
    await db.query(`update cliente
    set nombre = '${cm.nombre}', apellido ='${cm.apellido}', dni =${cm.dni}
    where id_cliente =${id}`)

    res.json('actualizacion exitosa!')

})

enrutador.delete('/cliente/:codigo', async (req,res) => {

    const db = await pool.obtenerConexion()
    const id = req.params.codigo
    await db.query(`delete from cliente where id_cliente = ${id}`)

    res.json('eliminacion exitosa!')

})

enrutador.get('/cliente/:codigo', async (req,res) => {

    const db = await pool.obtenerConexion()
    const id = req.params.codigo
    const row = await db.query(`select * from cliente where id_cliente =${id}`)

    res.json(row[0])

})

module.exports = enrutador