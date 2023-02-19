const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const allCategories = await Category.findAll({
    include: [{
      model: Product,
      attributes: ['id','product_name','price','stock','category_id']
    }]
  })

  res.status(200).json(allCategories)
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  const singleCategory = await Category.findByPk(req.params.id, {
    include: [{
      model: Product
    }]
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
