import { Request, Response } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import { hash } from 'bcryptjs'
import UserRepository from '../repositories/UserRepository';

class UserController {

    async create(request: Request, response: Response) {
        const userRepository = getCustomRepository(UserRepository)

        const { name, username, password } = request.body

        const exisUser = await userRepository.findOne( {username} )

        if(exisUser) {
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
         * Deu erro na primeira vez ao deletar, pois password não é opcional!! Estou ignorando?
         * Veja aqui: https://pt.stackoverflow.com/questions/479147/the-operand-of-a-delete-operator-must-be-optional
        **/
        delete user.password

        return response.status(201).json(user)


    }

}

export default new UserController;