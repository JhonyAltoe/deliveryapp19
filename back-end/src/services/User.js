const md5 = require('md5');
const { handleThrowError, generateToken } = require('../helpers');
const BaseService = require('./Base');

class LoginService extends BaseService {
  async login(login) {
    const user = await this.repository.getOneUser(login.email);
    
    //andre
    if (!user) handleThrowError('User Not Found', 404)


    const isValid = user.password === md5(login.password);
    if (!isValid) handleThrowError('Incorrect email or password', 401);
    const { passwordm, ...userInfo } = user.get();
    
    const token = generateToken({ ...userInfo });
    return { token, ...userInfo };
  }
}

module.exports = LoginService;
