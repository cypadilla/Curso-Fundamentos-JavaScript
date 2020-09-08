const API_URL = 'https://swapi.dev/api/'

const PEOPLE_URL = 'people/:id'

const opts = {crossDomain : true}


function obtenerPersonaje(id,callback){  
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url,opts,function(data){
        console.log(`Hola soy ${data.name}y mi genero es ${data.gender}`)
        
        
       if(callback){
            callback()
        }
    
    })

    
}
obtenerPersonaje(1,function(personaje){
    console.log(`${personaje.name}`)
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4,function(){
                obtenerPersonaje(5,function(){
                    obtenerPersonaje(6)
                })
            })
        })

    })
})
