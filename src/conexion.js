//importar mysql

import mysql from 'mysql'
let todos
//crear la conexion

const conector = mysql.createConnection({
    host: 'localhost',
    user: 'lucasM',
    password: 'Boquita10',
    database: 'tp1_programacion'
})

const conectar = () => {
    conector.connect(err => {
        if(err) throw err
        console.log('conectado')
    })
}


const agregarPersona = (nombre, apellido, dni, direccion, tipo) => {
    const sql = `INSERT INTO pacientes (nombre, apellido, dni, direccion, tipo) VALUES ("${nombre}", "${apellido}", ${dni}, "${direccion}", "${tipo}")`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

const obtenerPaciente = (callback) => {
    const sql = 'SELECT * FROM pacientes';
    conector.query(sql, function(err, result) {
        if (err) throw err;
        callback(result);
    });
};


const borrarPaciente = id => {
    const sql = `DELETE FROM pacientes WHERE id = ${id}`
    conector.query(sql)
}




export {agregarPersona, obtenerPaciente, borrarPaciente}


