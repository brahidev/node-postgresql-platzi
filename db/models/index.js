const { User, userSchema } = require('./user.model')
const { Customer, customerSchema } = require('./customer.model')
const { Product, productSchema } = require('./product.model')
const { Category, categorySchema } = require('./categoy.model')
const { Order, orderSchema } = require('./order.model')
const { OrderProduct, orderProductSchema } = require('./order-product.model')

const setUpModels = (sequelize) => {
    User.init(userSchema, User.config(sequelize))
    Customer.init(customerSchema, Customer.config(sequelize))
    Product.init(productSchema, Product.config(sequelize))
    Category.init(categorySchema, Category.config(sequelize))
    Order.init(orderSchema, Order.config(sequelize))
    OrderProduct.init(orderProductSchema, OrderProduct.config(sequelize))

    // Associations
    User.associate(sequelize.models)
    Customer.associate(sequelize.models)
    Category.associate(sequelize.models)
    Product.associate(sequelize.models)
    Order.associate(sequelize.models)
}

module.exports = setUpModels