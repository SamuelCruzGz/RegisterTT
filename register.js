//Declaración de variables

var nombre = document.getElementById('nombre')
var apellido = document.getElementById('apellido')
var email = document.getElementById('email')
var user = document.getElementById('user')
var pass = document.getElementById('pass')
var cpass = document.getElementById('Cpass')

class Usuario {
    constructor(nombre, apellido, email, user, pass, cpass){
        this.nombre = nombre, 
        this.apellido = apellido, 
        this.email = email, 
        this.user = user, 
        this.pass = pass, 
        this.cpass = cpass
    }
    static async guardaUsuario (usuario){
        try {
            let resultado = await fetch("https://localhost:3000/register", {
                method : 'post', 
                headers : {
                    "Accept" : "application/json, text/plain, *,*",
                    "Content-Type" : "application/json"
                },
                body:JSON.stringify( {
                    "nombre" : nombre.value, 
                    "apellidos" : apellido.value,
                    "email" : email.value,
                    "usuario": usuario.value,
                    "usuario" : user.value,
                     
                })
            })    
        } catch (e) {
            
        }
        
    }

}
function agregarUsuario(){
    Usuario.guardaUsuario(new Usuario(nombre.value, apellido.value, email.value, user.value, pass.value, pass.value, cpass.value ))
}


