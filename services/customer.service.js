const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize')

class customerService {
    constructor() { }

    async create(data) { 
        const newCustomer = await models.Customer.create(data, {
            include: ['user']
        })

        return newCustomer;
    }

    async find() {
        const data = await models.Customer.findAll({
            include: ['user']
        });

        return data;
    }

    async findOne(id) {
        const customer = await models.Customer.findByPk(id)

        // Throw error
        if (!customer) {
            throw boom.notFound('User not found');
        }

        return customer;
    }

    async update(id, changes) {
        const customer = await this.findOne(id)
        const data = await customer.update(changes)

        return data
    }

    async delete(id) {
        const customer = await this.findOne(id)
        await customer.destroy()

        return { id };
    }
}

module.exports = customerService