class Persona {
    constructor(nombre,apellido,altura){
        this.nombre = nombre
        this.apellido = apellido 
        this.altura = altura
        console.log('Me ejecutaron')
    }
    saludar(fn){
        // var nombre = this.nombre
        // var apellido = this.apellido

        var {nombre,apellido }= this
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
        if(fn){
            fn(nombre,apellido,false)
        }
    }

    soyAlto(){
        if(this.altura >=  1.8){
                 console.log(`${this.nombre} es alto`)
            }else{
                console.log(`${this.nombre} es bajo `)
         }
    }
}

class Desarrollador extends Persona {
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
        console.log('Me ejecutaron desarrollador')
    }

    saludar(fn){
        var {nombre,apellido }= this
        console.log(`Hola me llamo ${this.nombre} desde desarrollador`)
        if(fn){

            fn(nombre,apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido ,esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if(esDev){
        console.log('perfecto mi estimado, eres dev')
    }
}


var cristian = new Persona('Cristian', 'Padilla',1.8)
var carlos = new Persona('Carlos', 'Perez',1.5)
var arturo = new Desarrollador('Arturo','perez',1.60)

cristian.saludar()
carlos.saludar(responderSaludo)
arturo.saludar(responderSaludo)

// function Persona(nombre,apellido,altura){
//     this.nombre = nombre
//     this.apellido = apellido 
//     this.altura = altura
//     console.log('Me ejecutaron')
// }

// Persona.prototype.saludar = function(){
//     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
// }
// Persona.prototype.soyAlto = function(){
//    if(this.altura >=  1.8){
//         console.log(`${this.nombre} es alto`)
//    }else{
//        console.log(`${this.nombre} es bajo `)
//    }
// }

// function Desarrollador (nombre, apellido){
//     this.nombre = nombre
//     this.apellido = apellido
// }

// Desarrollador.prototype.saludar = function (){
//     console.log(`Hola me llamo ${this.nombre}`)
// }
// heredaDe(Desarrollador,Persona)


// cristian.saludar()
// cristian.soyAlto()
// carlos.soyAlto()


// componentes 

// ceulares
// computadores
// servidores fisicos ;
