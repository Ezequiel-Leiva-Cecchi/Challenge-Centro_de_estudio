import { IUser } from '../../../types/UserTypes';
import userModel from '../../models/usersModel';

export class UserMongoose {
  async createUser(user: IUser) {
    return userModel.create(user);
  }

  async getUserByEmail(email: string, includePassword = false) {
    const query = userModel.findOne({ email: email.trim().toLowerCase() });
    if (includePassword) {
      query.select('+password');
    }
    return query.exec();
  }
}
