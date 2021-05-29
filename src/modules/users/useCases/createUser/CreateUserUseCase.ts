import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userEmailExist = this.usersRepository.findByEmail(email);

    if (userEmailExist) {
      throw new Error("mail is already taken");
    }
    const user = this.usersRepository.create({ email, name });

    return user;
  }
}

export { CreateUserUseCase };
