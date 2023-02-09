const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;


// * `Product`

//   * `id`
  
//     * Integer.
  
//     * Doesn't allow null values.
  
//     * Set as primary key.
  
//     * Uses auto increment.

//   * `product_name`
  
//     * String.
  
//     * Doesn't allow null values.

//   * `price`
  
//     * Decimal.
  
//     * Doesn't allow null values.
  
//     * Validates that the value is a decimal.

//   * `stock`
  
//     * Integer.
  
//     * Doesn't allow null values.
  
//     * Set a default value of `10`.
  
//     * Validates that the value is numeric.

//   * `category_id`
  
//     * Integer.
  
//     * References the `Category` model's `id`.