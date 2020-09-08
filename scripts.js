var cristian ={
  nombre: 'Cristian',
  apellido: 'padilla',
  edad:17,
  ingeniero:true,
  cocinero:false,
  cantante:false,
  dj:false,
  guitarrista:false,
  drone:true
}

function imprimirProfesion(persona){
  console.log(`${persona.nombre} es:`)
  if(persona.ingeniero){
    console.log('ingeniero')
  }
  if(persona.guitarrista){
    console.log('Guitarrista')
  }
  if(persona.cocinero){
    console.log('cocinero')
  }
  if(persona.dj){
    console.log('DJ')
  }
  if(persona.cantante){
    console.log('Cantante')
  }
  if(persona.drone){
    console.log('yeah madafaca')
  }
}
const MAYORIA_DE_EDAD = 18;
function imprimirSiEsMayorDeEdad(persona){
  console.log(`${persona.nombre} es:`)
  if(esMayorDeEdad(persona)){
    console.log('Mayor de edad')
  }else{
    console.log('Menor de edad')
  }
}
// function esMayorDeEdad(persona){
//   return persona.edad >= mayoriaDeEdad
// }

// FUNCION DECLARATIVA 
// var esMayorDeEdad = function (persona){
//   return persona.edad = MAYORIA_DE_EDAD
// }

// ARROW FUNCTIONS
const esMayorDeEdad = (persona) =>{
  return persona.edad >= MAYORIA_DE_EDAD
}
imprimirProfesion(cristian);
imprimirSiEsMayorDeEdad(cristian)