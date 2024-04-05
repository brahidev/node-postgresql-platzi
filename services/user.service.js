const boom = require('@hapi/boom');
const bcrypt = require('bcrypt')
const { models } = require('../libs/sequelize')

class UserService {
  constructor() {}

  async create(data) {
    // Create hash for user !
    const hashPassword = await bcrypt.hash(data.password, 10)

    const newUser = await models.User.create({
      ...data,
      password: hashPassword
    });

    delete newUser.dataValues.password

    return newUser;
  }

  async find() {
    const data = await models.User.findAll({
      include: ['customer']
    });

    console.log('Data', data.User)

    return data;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)

    // Throw error
    if (!user) {
      throw boom.notFound('User not found');
    }

    return user;
  }

  async findByEmail(email) {
    const user = await models.User.findOne({
      where: { email }
    })

    // Throw error
    if (!user) {
      throw boom.notFound('User not found');
    }

    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const data = await user.update(changes)

    return data
  }

  async delete(id) {
    const user = await this.findOne(id)
    await user.destroy()

    return { id };
  }
}

module.exports = UserService;
