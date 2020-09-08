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


async function obtenerPersonajes(){
    var ids = [ 1 ,2 ,3 ,4 ,5 ,6 ,7]

// var promesas = ids.map(function (id){
//     return obtenerPersonaje(id)
// })

var promesas = ids.map(id => obtenerPersonaje(id))
try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
} catch (id) {
    onError(id)
}
Promise.all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)
 
}
obtenerPersonajes()

// obtenerPersonaje(1)
//     .then(function(personaje){
//         console.log(`El personaje  es ${personaje.name}`)
//         return obtenerPersonaje(2)
//     })
//     .then(function(personaje){
//         console.log(`El personaje es ${personaje.name}`)
//         return obtenerPersonaje(3)
//     })
//     .then(function(personaje){
//         console.log(`El personaje es ${personaje.name}`)
//         return obtenerPersonaje(4)
//     })
//     .then(function(personaje){
//         console.log(`El personaje es ${personaje.name}`)
//         return obtenerPersonaje(5)
//     })
//     .catch(onError)
