const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain : true}
const onLukeResponse = function(data){
    console.log(`Hola soy ${data.name}y mi genero es ${data.gender}`)
}
$.get(lukeUrl,opts,onLukeResponse)

const API_RICKYMORTY = 'https://rickandmortyapi.com/api/'
const CHARACTER_URL = 'character/:id'

const rick =`${API_RICKYMORTY}${CHARACTER_URL.replace(':id',1)}`
const opts1 = {crossDomain : true}
const onRickResponse = function(data){
    console.log(`Hola soy ${data.name}y mi genero es ${data.gender}`)
}
$.get(rick,opts1,onRickResponse)