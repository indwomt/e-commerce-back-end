const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

// * `Category`

//   * `id`

// * Integer.

// * Doesn't allow null values.

// * Set as primary key.

// * Uses auto increment.

// * `category_name`

// * String.

// * Doesn't allow null values.
