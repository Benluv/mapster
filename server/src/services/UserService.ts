import { User } from '../models/User'

class UserService {
    async getUserById(id: string): Promise<User> {
        return new User(1, 'John Doe', 'johndoe@mail.com')
    }

    async findAll() {
        const users = await User.findAll()

        return users
    }
}