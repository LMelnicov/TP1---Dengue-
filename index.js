import express from 'express' //importamos express
import { agregarPersona, obtenerPaciente, borrarPaciente } from './src/conexion.js'
let todos
const app = express() //iniciamos express


//iniciamos el servidor 
app.listen('8000', function(){
    console.log('aplicacion iniciada en el puerto 8000')
})

//configuracion de pug
app.set('views', './vistas')
app.set('view engine','pug')

//configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))           
app.use(express.static('./css'))


app.get('/', function(req, res) {
    obtenerPaciente((todos) => {
        res.render('index', { titulo: 'Dengue', pacientes: todos });
    });
});

app.get('/agregar/:nombre/:apellido/:dni/:direccion/:tipo', function(req, res){
    let nombre = req.params.nombre
    let apellido = req.params.apellido
    let dni = req.params.dni
    let direccion = req.params.direccion
    let tipo = req.params.tipo
    agregarPersona(nombre, apellido, dni, direccion, tipo)
    res.redirect('/')

    console.log(nombre, apellido, dni, direccion, tipo)
})

app.get('/borrar/:id', function(req, res){
    let id = req.params.id
    borrarPaciente(id)
    res.redirect('/')
})
