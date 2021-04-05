import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import UserRepository from '../repositories/UserRepository'

class UserController {

    async create(request: Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository)

        const { name, username, password } = request.body

        const existUser = await userRepository.findOne( {username} )

        if(existUser) {
            return response.status(400).json({ mensagem: 'User already exists!'})
        }

        const passwordHashed = await hash(password, 8)

        const user = userRepository.create({
            name,
            username,
            password: passwordHashed
        })

        await userRepository.save(user)

        /** 
         * Não consigo deletar o rashed password no jsonr resposta. Possivel solução usando @Injectable() e @exclude
         * Veja aqui: https://pt.coredump.biz/questions/50360101/how-to-exclude-entity-field-from-returned-by-controller-json-nestjs-typeorm
        **/
       // delete user.password

        return response.status(201).json(user)


    }

}

export default new UserController;