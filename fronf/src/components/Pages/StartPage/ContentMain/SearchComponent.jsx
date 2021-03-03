import React from 'react'

export default function SearchComponent({arrray}) {

  if(arrray.length === 0){
    return(
      <div className="search">
        <h1>Ваш запрос не дал результата</h1>
      </div>
    )
  }

  return(
    <div className="search">
      {arrray.map( item => (
        <div key={item._id}>
          {item.title}
        </div>
      ))}
    </div>
  )
}