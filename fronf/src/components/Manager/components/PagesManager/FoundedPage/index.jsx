import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
 
import './style.css'

const FoundedPage = () => {
  const match = useRouteMatch()

  return (
    <div className="foundpage__block">
      <div className="foundpage__block--title">
        Выберите действие:
      </div>
      <div className="foundpage__block--conent">
        <div className="foundpage__block--conent__link">
          <Link to={`${match.url}/add`}>Создать</Link>
        </div>
        <div className="foundpage__block--conent__link">
          <Link to={`${match.url}/update`}>Редатировать</Link>
        </div>
        <div className="foundpage__block--conent__link">
          <Link to={`${match.url}/del`}>Удалить</Link>
        </div>
      </div>
    </div>
  )
}

export default FoundedPage