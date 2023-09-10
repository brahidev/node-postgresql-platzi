const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
const { Op } = require('sequelize');

class ProductsService {
  constructor() { }

  async create(data) {
    const newProduct = models.Product.create(data)

    return newProduct;
  }

  async find(query) {
    const config = {
      include: ['category'],
      where: {}
    }
    const { limit, offset, price, price_min, price_max } = query
    if (limit && offset) {
      config.limit = limit
      config.offset = offset
    }

    if (price) {
      config.where.price = price
    }

    if (price_min && price_max) {
      config.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max
      }
    } 

    const products = await models.Product.findAll(config)

    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id)

    // Throw error
    if (!product) {
      throw boom.notFound('Product not found');
    }

    return product
  }

  async update(id, changes) {
    const product = await this.findOne(id)
    const data = await product.update(changes)

    return data
  }

  async delete(id) {
    const product = await this.findOne(id)
    await product.destroy()

    return { id }
  }
}

module.exports = ProductsService;
