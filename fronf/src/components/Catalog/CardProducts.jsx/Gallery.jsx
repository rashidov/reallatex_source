import React, { useState } from 'react'

const Gallery = ({ array }) => {
  const [modalActive, setModalActive] = useState(false)
  const [urls, setUrls] = useState('')
  const body = document.getElementsByTagName('body')

  function isActive(url) {
    setModalActive(true)
    setUrls(url)
  }

  if(!array){
    return(
      <div></div>
    )
  }else{
    return (
      <div>
        <div
          id="modal"
          className={ modalActive ? "prod__modals prod_active" : "prod__modals" } 
          onClick={() => {setModalActive(false); body[0].style = "overflow: auto;" }}>
          <img 
            src={urls} 
            alt="product" 
            onClick={ e => e.stopPropagation()}
          />
          <div className="btn__modals" onClick={() => setModalActive(false) }>&#10006;</div>
        </div>
        {array.map( (item, index) => (
          <img key={index} src={item} alt="img" onClick={() => {isActive(item); body[0].style = "overflow: hidden;" } }  />
        ))}
      </div>
    )
  }
}

export default Gallery