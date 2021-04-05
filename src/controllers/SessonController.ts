import { compare } from 'bcryptjs'
import {Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import UserRepository from '../repositories/UserRepository'
import{ sign } from 'jsonwebtoken'

class SessionController {

    async create(request: Request, response: Response){
        const { username, password } = request.body;

        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne(
            {username},
            {relations: ["roles"]}
            )

        if(!user){
            return response.status(400).json({ error: 'User not found!' })
        }

        //compara senha tipo string '1234' com senha tipo hash $2a$08$p2SGVtvS/1KG9ejAY6yhZ
        //usando compare() do bcrypts

        const matchPassword = await compare(password, user.password)

        if(!matchPassword){
            return response.status(400).json({ error: 'User or password does not exist' })
        }

        const roles = user.roles.map( role => role.name )

        //user.id precisa ser uma string
        const token = sign({roles},'e638183a887050bd1c5d7621e2a8dfb4', {
            subject: user.id,
            expiresIn: '1d'
        })

        return response.json({
            token,
            user,
        })
        

    }
}

export default new SessionController