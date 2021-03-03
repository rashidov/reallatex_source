const CategoriesService = require('../services/categories.service')
const pkey = require('../config/public.key')
const skey = require('../config/secret.key')
const key = pkey + '-' + skey

/* Контроллер категорий */
class CategoriesController {
    async getCategories(req, res) {
        let result = await CategoriesService.getCategories()
        if (result.length >= 1) return res.status(200).send(result)
        return res.status(404).send({ message: 'Categories not found.' })
    }

    async createCategories(req, res) {
        if (req.body.key === key){
            let result = await CategoriesService.createCategories(req.body)
            if (result) return res.status(200).send(result) 
            return res.status(500).send({ message: 'Unable create category.' })
        } else {
            return res.status(400).send({ message: 'Bad request.' })
        }
    }

    async updateCategories(req, res) {
        return res.send({ message: 'Not found'})
    }

    async deleteCategories(req, res) {
        if (req.body.key === key) {
            let result = await CategoriesService.deleteCategories(req.body.id)
            if (result) return res.status(200).send(result)
            return res.status(500).send({ message: 'Unable delete category.' })
        } else {
            return res.status(400).send({ message: 'Bad request.' })
        }
    }
}

module.exports = new CategoriesController()