import { compare } from 'bcryptjs';
import {Request, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';

class SessionController {

    async create(request: Request, response: Response){
        const { username, password } = request.body;

        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({username})

        if(!user){
            return response.status(400).json({ error: 'User not found!' })
        }

        //compara senha tipo string '1234' com senha tipo hash $2a$08$p2SGVtvS/1KG9ejAY6yhZ
        //usando compare() do bcrypts

        const matchPassword = await compare(password, user.password)
        

    }
}

export default new SessionController