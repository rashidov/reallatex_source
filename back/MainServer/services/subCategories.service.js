const SubCategoriesModel = require('../models/subCategories.model')

/* Сервис подкатегорий */
class SubCategoriesService {
    getSubCategories(data) {
        return new Promise( (res, rej) => {
            SubCategoriesModel.find({ types: data }).then( (result, err) => {
                if (err) return res(false)
                return res(result)
            })
        })
    }

    getAllSubcategories() {
        return new Promise( (res, rej) => {
            SubCategoriesModel.find().then( (result, err) => {
                if (err) return res(false)
                return res(result)
            })
        })
    }

    createSubCategories(data) {
        return new Promise( (res, rej) => {
            const subcategory = new SubCategoriesModel({
                title: data.title,
                img: data.img,
                types: data.types,
                subTypes: data.subTypes
            })

            subcategory.save().then(() => {
                return res({ message: 'SubCategory created.'})
            })
        })
    }

    updateSubCategories() {
        return /* new Promise() */
    }

    deleteSubCategories(data) {
        return new Promise( (res, rej) => {
            SubCategoriesModel.remove({ _id: data }).then( subcategory => {
                if (subcategory) return res({ message: 'SubCategory deleted.' })
                return res({ status: 'eror' })
            })
        })
    }
}

module.exports = new SubCategoriesService