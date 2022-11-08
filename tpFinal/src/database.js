const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host:'localhost',
    port:3307,
    user:'root',
    password:'roman',
    database:'monitoreo_db',
    connectionLimit:5
});


async function obtenerConexion()
{
    const conexion = await pool.getConnection()
    return conexion
}


module.exports = { obtenerConexion }
