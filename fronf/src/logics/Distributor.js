export default function Distributor(array, id){
  let url = ''
  for(let i = 0; i < array.length; i++){
    if(array[i]._id === id){
      if(array[i].isSubCategories === 'true'){
        url = `/catalog/subсategories/${array[i].types}`
      } else {
        url = `/catalog/products/${array[i].types}`
      }
    }
  }
  return url
}