
function heredaDe(prototipoHijo,prototipoPadre){
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido 
    this.altura = altura
    console.log('Me ejecutaron')
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function(){
   if(this.altura >=  1.8){
        console.log(`${this.nombre} es alto`)
   }else{
       console.log(`${this.nombre} es bajo `)
   }
}

function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

Desarrollador.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre}`)
}
heredaDe(Desarrollador,Persona)

var cristian = new Persona('Cristian', 'Padilla',1.8)
// var carlos = new Persona('Carlos', 'Perez',1.5)

// cristian.saludar()
// cristian.soyAlto()
// carlos.soyAlto()