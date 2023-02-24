const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
const dbTagData = await Tag.findAll({
  include: {
    model: Product,
    attributes: [`id`, `product_name`, `price`, `stock`, `category_id`]
  }
})
res.status(200).json(dbTagData)
} catch(err){res.status(500).json(err)}
});


router.get('/:id', async (req, res) => {
  const singleTag = await Tag.findByPk(req.params.id, {
    include: [{
      model:Product
    }]
  })
  return res.status(200).json(singleTag)

  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
