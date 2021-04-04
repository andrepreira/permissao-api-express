import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('users')

class User {

    @PrimaryColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

}

export default User