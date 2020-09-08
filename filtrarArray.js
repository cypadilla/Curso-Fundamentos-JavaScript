var cristian = {
    nombre:'Cristian',
    apellido:'Padilla',
    altura:1.60
}
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = (p) => {
    return p.altura > 1.10
}
var personas = [cristian,sacha,alan ,martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)


 
const pasarAlturaACms  = persona => {
   
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

var personasCms = personas.map(pasarAlturaACms)


console.log(personasCms)