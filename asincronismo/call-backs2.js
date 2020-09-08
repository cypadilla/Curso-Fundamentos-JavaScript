const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = 'people/:id'

const opts = {crossDomain : true}

const onPeopleResponse = function(data){
    console.log(`Hola soy ${data.name}y mi genero es ${data.gender}`)
}

function obtenerPersonaje(id){  
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts,onPeopleResponse)
}


const API_RICKYMORTY = 'https://rickandmortyapi.com/api/'
const CHARACTER_URL = 'character/:id'


const opts1 = {crossDomain : true}
const onCharacterResponse = function(data){
    console.log(`Hola soy ${data.name}y mi genero es ${data.gender}`)
}


function obtenerPersonajeRick(id){  
    const urlRick =`${API_RICKYMORTY}${CHARACTER_URL.replace(':id',id)}`
    $.get(urlRick,opts1,onCharacterResponse)
}
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonajeRick(4)