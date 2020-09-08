const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = 'people/:id'

const opts = {crossDomain : true}


function obtenerPersonaje(id){ 
    return new Promise((resolve,reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
         .get(url,opts,function(data){
             resolve(data)
         })
         .fail(()=>{
             reject(id)
         })
    })
    
}

function onError(id){
    console.log(`sucedio un error obteniendo al personaje ${id}`)
}

obtenerPersonaje(1)
    .then(function(personaje){
        console.log(`El personaje  es ${personaje.name}`)
        return obtenerPersonaje(2)
    })
    .then(function(personaje){
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(3)
    })
    .then(function(personaje){
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(4)
    })
    .then(function(personaje){
        console.log(`El personaje es ${personaje.name}`)
        return obtenerPersonaje(5)
    })
    .catch(onError)
