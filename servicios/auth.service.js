const hapi = require('@hapi/joi')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const user_regex = hapi.object({
    name:hapi.string().min(3).max(256),
    email:hapi.string().min(6).max(256).email().required(),
    celular:hapi.string().min(10).max(19).pattern(/^[0-9]+$/),
    password:hapi.string().min(3).max(256).required()
})
const create_user = async user_params => {

        const {error} = user_regex.validate(user_params)

        if (error){
            return {
                message:'hubo error en algo',
                error: error.details[0].message
            } 

        }

        const validate_email = await User.findOne({email:user_params.email})
        if(validate_email){
            return {
                message:'El correo ya existe'
            }
        }

        const salt = await bcrypt.genSalt(10)
        const encrypt = await bcrypt.hash(user_params.password,salt)
        user_params.password = encrypt 

        const user = new User(user_params)

        if (!user.email != '' || !user.password != ''){
            return {
                message: 'Hiciste algo mal'
            }
        }


        const user_respuesta = await user.save()
        return {
                message: 'usuario guardado',
                user:user_respuesta
        }
    } 

    const login_regex = hapi.object({
        email:hapi.string().min(6).max(256).email().required(),
        password: hapi.string().min(3).max(256).required()
    })

    const login_user = async credential => {

        const {error} = login_regex.validate(credential)

        if (error){
            return {
                message: 'error en credenciales',
                error: error.details[0].message
            }

        }

    const user_bd = await  User.findOne({email:credential.email})

    if (!user_bd){
        return{
            message:'usuario no existe'
        }
    }

    const is_password_valid = await bcrypt.compare(credential.password,user_bd.password)
    if(!is_password_valid){
        return{
            message:'password invalido'
        }
    }    
    return{
        message:'Bienvenido a su Portal '
    }    

}

    module.exports = {
        create_user, login_user
    }