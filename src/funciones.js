
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const dni = document.querySelector('#dni')
const direccion = document.querySelector('#direccion')
const tipo = document.querySelector('#tipo')
const btnAgregar = document.querySelector('#btn_agregar')
const btnBorrar = document.getElementsByClassName('borrar')



btnAgregar.addEventListener('click', function(){
    window.location.href = `agregar/${nombre.value}/${apellido.value}/${dni.value}/${direccion.value}/${tipo.value}`
})

for(let i of btnBorrar){
    i.addEventListener('click', function(){
        let id = this.getAttribute('id')
        window.location.href = `borrar/${id}`
    })
}
