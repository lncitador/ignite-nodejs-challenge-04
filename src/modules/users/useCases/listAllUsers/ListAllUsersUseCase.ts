import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const checkAdmin = this.usersRepository.findById(user_id);

    if (!checkAdmin) {
      throw new Error("Id not exist");
    }

    if (!checkAdmin.admin) {
      throw new Error("User nothing admin");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
