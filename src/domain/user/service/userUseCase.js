const userRepository = require('../repository/userRepository')

class UserUseCase {
  async getDataUser(user_id) {
    try {
      const userRepositoryInit = new userRepository();
      const resultGetUser = await userRepositoryInit.getUser(user_id);
      if (resultGetUser){
        return {
          resultGetUser
        }
      }
    } catch (error) {
      return error
    }
  }
}

module.exports = UserUseCase;