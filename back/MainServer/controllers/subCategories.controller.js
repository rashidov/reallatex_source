const SubCategoriesService = require('../services/subCategories.service')
const pkey = require('../config/public.key')
const skey = require('../config/secret.key')
const key = pkey + '-' + skey

/* Контроллер подкатегорий */
class SubCategoriesController {
    async getSubCategories(req, res) {
        if (req.params.types) {
            let result = await SubCategoriesService.getSubCategories(req.params.types)
            if (result) return res.status(200).send(result)
            return res.status(500).send({ message: 'Subcategories not found.' })
        } else {
            return res.status(400).send({ message: 'Bad request.' })
        }
    }

    async getAllSubcategories(req, res) {
        let result = await SubCategoriesService.getAllSubcategories()
        if (result) return res.status(200).send(result)
        return res.status(500).send({ message: 'Subcategories not found.' })
    }

    async createSubCategories(req, res) {
        if (req.body.key === key) {
            let result = await SubCategoriesService.createSubCategories(req.body)
            if(result) return res.status(200).send(result) 
            return res.status(500).send({ message: 'Unable create subcategory.' })
        } else {
            return res.status(400).send({ message: 'Bad request.' })
        }
    }

    async updateSubCategories(req, res) {
        return res.send({ message: 'Not found'})
    }

    async deleteSubCategories(req, res) {
        if (req.body.key != key) {
            let result = await SubCategoriesService.deleteSubCategories(req.body.id)
            if (result) return res.status(200).send(result)
            return res.status(500).send({ message: 'Unable delete subcategory.' })
        } else {
            return res.status(400).send({ message: 'Bad request.' })
        }
    }
}

module.exports = new SubCategoriesController()