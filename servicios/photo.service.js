const hapi = require('@hapi/joi')
const Photo = require('../models/photos')
const { connect } = require('http2')

//End point para crear un registro de una foto
const photo_regex = hapi.object({
    user_photos:hapi.string().min(6).max(25).email().required(),
    name_photo:hapi.string().min(6).max(20).required(),
    fechacargue_photo:hapi.string().min(8).max(10),
    url_photo:hapi.string().min(25).max(256).required()   
})
const create_photo = async (photo_params) => {
    /* prueba validadcion de fecha de cargue 
    const fecha = new Date();
    const fecha_foto = fecha.parse(photo_params.fechacargue_photo)
    console.log(fecha.getDate)
    console.log(fecha_foto)*/

    const {error} = photo_regex.validate(photo_params)
    if (error){
        return {
            message:'hubo error en algo',
            error: error.details[0].message
        } 
    }
    const validate_photo = await Photo.findOne({name_photo:photo_params.name_photo})
    if(validate_photo){
        return {
            message:'Nombre de foto ya existe'
        }
    }
    const photo1 = new Photo(photo_params)
    if (!photo1.name_photo != '' || !photo1.user_photos!= '' || !photo1.url_photo != ''){
        return {
                message: 'Parametros enviados son erroneos'
            }
        }
    const photo_respuesta = await photo1.save()
        return {
                message: 'foto guardada',
                user:photo_respuesta
        }
}
//End point para consulta de una foto
const queryf_regex = hapi.object({
    user_photos: hapi.string().min(6).max(25).email().required(),
    name_photo: hapi.string().min(6).max(20).required(),
})
const query_photo = async (photo_params2) => {
    const user_peticion = photo_params2.user_photos
    const {error} = queryf_regex.validate(photo_params2)
    if (error){
        return {
            message:'Error en los parametros de busqueda, es obligatorio usuario y nombre de foto',
            error: error.details[0].message
        } 
    }
    const search_photo = await Photo.findOne({name_photo: photo_params2.name_photo})
    if(!search_photo || search_photo.user_photos!= user_peticion){
        return {
            message:'La foto solicitada no existe para este usuario '         
        }
    }
    if(search_photo){ 
        return{
            message: 'La foto solicitada del usuario contiene los siguientes datos:',
            Foto:{
                    Nombre           :search_photo.name_photo, 
                    Fecha_de_Cargue  :search_photo.fechacargue_photo,
                    Url              :search_photo.url_photo
            }
        }
        }  
}
    
//End point para traer todas las fotos
const queryAll_regex = hapi.object({
    user_photos: hapi.string().min(6).max(25).email().required()  
})
const queryall_photos = async (photo_params3) => {
    const user_peticion2 = photo_params3.user_photos
    const {error} = queryAll_regex.validate(photo_params3)
    if (error){
        return {
            message:'Error en los parametros de busqueda, es obligatorio usuario y nombre de foto',
            error: error.details[0].message
        } 
    }
    const search_photo2 = await Photo.find({user_photos: photo_params3.user_photos})
    if(search_photo2){   
        return{
                message: 'Las fotos del usuario son:',
                Fotos: search_photo2 
            }    
    } else{
        return{
            message: 'No se encontraron registros, usuario no posee fotos',
        }        
    }    
}

//End point de borrado de fotos

const delete_regex = hapi.object({
    user_photos: hapi.string().min(6).max(25).email().required(),
    name_photo: hapi.string().min(6).max(20).required(),
})
const delete_photo = async (photo_params4) => {
    
    const {error} = delete_regex.validate(photo_params4)
    if (error){
        return {
            message:'Error en los parametros de busqueda, es obligatorio usuario y nombre de foto a borrar',
            error: error.details[0].message
        } 
    }
    const search_photo3 = await Photo.findOneAndDelete({name_photo: photo_params4.name_photo})
    if(search_photo3){
        return {
            message:'La foto fue borrada '         
        }
    }else{
        return {
            message:'La foto que intenta borrrar no existe'         
        }

    }
    }
    
//Endpoint para actualizar un registro

const update_regex = hapi.object({
    user_photos:hapi.string().min(6).max(25).email(),
    name_photo:hapi.string().min(6).max(20),
    fechacargue_photo:hapi.string().min(8).max(10),
    url_photo:hapi.string().min(25).max(256)   
})
const update_photo = async (photo_params5) => {
    const {error} = update_regex.validate(photo_params5)
    if (error){
        return {
            message:'hubo error en algo',
            error: error.details[0].message
        } 
    }
    const update_search = await Photo.findByIdAndUpdate(photo_params5.name_photo,
        {$set:
            {
                name_photo:photo_params5.name_photo,
                fechacargue_photo:photo_params5.fechacargue_photo,
                url_photo:photo_params5.url_photo 
    },})
    
    if(!update_search){
        console.log('entro')
        return {
            message:'Hubo un Error, Favor Revisar los parametros de busqueda '
        }
    }else{
        return {
                message: 'Foto Actualizada con Exito'
            }  
    }    
}


//Exporta los end points para uso global
module.exports = {
    create_photo, query_photo, queryall_photos, delete_photo, update_photo

}


