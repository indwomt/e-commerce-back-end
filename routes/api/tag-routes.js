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

router.post('/', async (req, res) => {
 const tagData = await Tag.create(req.body);
 res.status(200).json(tagData)
});

router.put('/:id', (req, res) => {
  
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});




// WORKS////////////////////////////////////////////////
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
