const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);

    return newUser;
  }

  async find() {
    const data = await models.User.findAll({
      include: ['customer']
    });

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
