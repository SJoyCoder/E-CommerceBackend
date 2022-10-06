// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {

  });

// Categories have many Products
Category.hasMany(Product, {

});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
// define table to store foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: ''
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: ''
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
