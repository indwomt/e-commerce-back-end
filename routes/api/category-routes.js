const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


// WORKS////////////////////////////////////////////////////////////
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


// WORKS////////////////////////////////////////////////////////////////////////
router.get('/:id', async (req, res) => {
  const singleCategory = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  res.status(200).json(singleCategory)
 
  // find one category by its `id` value
  // be sure to include its associated Products
});



// WORKS///////////////////////////////////////////////////////////////////////////
router.post('/', async (req, res) => {
  // create a new category
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
});




router.put('/:id', (req, res) => {
  // Calls the update method on the Book model
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      category_name: req.body.category_name
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      // Sends the updated book as a json response
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});



// WORKS//////////////
router.delete('/:id', async (req, res) => {
  try{
    const dbDelete = await Category.destroy( {
      where: {
        id: req.params.id
      }
    })
    if(!dbDelete){
      res.status(404).json({message: `no Categories found by that id`})
    }
    res.status(200).json(dbDelete)
  } catch (err){res.json(500).json(err)}
  // delete a category by its `id` value
});

module.exports = router;
