const express = require('express')
const router = express.Router()

/* Роуты API */
const categoriesRoutes = require('./categories.routes')
const subCategoriesRoutes = require('./subCategories.routes')
const productsRoutes = require('./products.routes')
const contactsRoutes = require('./contacts.routes')
const deliveryRoutes = require('./delivery.routes')
const descriptionRoutes = require('./description.routes')
const paymentRoutes = require('./payment.routes')
const toorderRoutes = require('./toorder.routes')
const keyRoutes = require('./key.routes')

router.use('/categories', categoriesRoutes)
router.use('/subcategories', subCategoriesRoutes)
router.use('/products', productsRoutes)
router.use('/contacts', contactsRoutes)
router.use('/delivery', deliveryRoutes)
router.use('/description', descriptionRoutes)
router.use('/payment', paymentRoutes)
router.use('/toorder', toorderRoutes)
router.use('/k', keyRoutes)

module.exports = router