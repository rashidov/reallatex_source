import React, { useState } from 'react'

import './styles.css' 

const PhotoSlider = ({array}) => {
  const [isVisibleFull, setIsVisibleFull] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const [urls, setUrls] = useState('')
  const body = document.getElementsByTagName('body')

  function isActive(url) {
    setModalActive(true)
    setUrls(url)
  }

  return (
    <div className="photoandvidio__block--photos">
      <div className={modalActive ? "modals active" : "modals"} onClick={() => {setModalActive(false); body[0].style = "overflow: auto;"}} >
        <img 
        src={urls} 
        alt="img" 
        onClick={e => e.stopPropagation()} />
        <div className="btn__modals" onClick={() => setModalActive(false)}>&#10006;</div>
      </div>
      <div className={isVisibleFull ? "photoandvidio__block--photos__conent activity" : "photoandvidio__block--photos__conent"}>
        {array.map( (url, indeimg) => (
          <div className="international__content" key={indeimg}>
            <img src={url} alt="img" onClick={() => {isActive(url); body[0].style = "overflow: hidden;"}} />
          </div>
        ))}
      </div>
      {array.length > 12 ? (
        <div className="photoandvidio__block--photos__btn">
          {isVisibleFull ? (
            <div className="photos__btn" onClick={() => setIsVisibleFull(false)}>закрыть</div>
          ):(
            <div className="photos__btn" onClick={() => setIsVisibleFull(true)}>показать больше</div>
          )}
        </div>
      ):(
        <div className="photoandvidio__block--photos__btn">
        </div>
      )}
    </div>
  )
}

export default PhotoSlider