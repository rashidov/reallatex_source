const CategoriesModel = require('../models/categories.model')

/* Сервис категорий */
class CategoriesService {
    getCategories() {
        return new Promise( (res, rej) => {
            CategoriesModel.find().then( (data, err) => {
                if(err) return res(false)
                return res(data)
            })
        })
    }

    createCategories(data) {
        return new Promise( (res, rej) => {
            const category = new CategoriesModel({
                title: data.title,
                subTitle: data.subTitle,
                img: data.img,
                types: data.types,
                isSubCategories: data.isSubCategories
            })

            category.save().then(() => {
                return res({ message: 'Category created.' })
            })
        })
    }

    updateCategories() {
        return /* new Promise() */
    }

    deleteCategories(data) {
        return new Promise( (res, rej) => {
            CategoriesModel.remove({ _id: data }).then( categories => {
                if (categories) return res({ message: 'Categories deleted.' })
                return res(false)
            })
        })
    }
}

module.exports = new CategoriesService()