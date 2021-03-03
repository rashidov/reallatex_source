import React, { useEffect } from 'react'
 
import './style.css'

const BenefitsLatex = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
  <div className="benefitslatex__block">
    <div className="benefitslatex__block--title">
      <h2>Преимущество натурального латекса</h2>
    </div>
    
    <div className="benefitslatex__block--content">
      
      <div className="benefitslatex__block--content--item">
        <div className="benefitslatex__block--content--item__title">
          <div className="benefitslatex__block--content--item__title--num">1</div>
          <span>Лучшие источники натурального каучука.</span>
        </div>
        <div className="benefitslatex__block--content--item__content">
          <div className="benefitslatex__block--content--item__content--text">
            100% натуральная латексная пена LIEN'A производится из сока дерева Hevea Brasiliensis и не содержит никаких вредных химических веществ.
          </div>
        </div>
      </div>    

      <div className="benefitslatex__block--content--item">
        <div className="benefitslatex__block--content--item__title">
          <div className="benefitslatex__block--content--item__title--num">2</div>
          <span>Эластичность.</span>
        </div>
        <div className="benefitslatex__block--content--item__content">
          <div className="benefitslatex__block--content--item__content--text">
            100% натуральный латекс LIEN'A состоит из миллионов ячеек, которые обеспечивают поддержку и комфорт во время сна. При этом движения партнера на матрасе вам не передаются.
          </div>
        </div>
      </div> 

      <div className="benefitslatex__block--content--item">
        <div className="benefitslatex__block--content--item__title">
          <div className="benefitslatex__block--content--item__title--num">3</div>
          <span>Прогрессивная поддержка.</span>
        </div>
        <div className="benefitslatex__block--content--item__content">
          <div className="benefitslatex__block--content--item__content--text">
            100% натуральный латекс LIEN'A  при первом прикосновении ощущается комфортно мягким, а при дальнейшем углублении в матрас обеспечивается растущая упругость, поэтому ваш позвоночник занимает оптимальное положение.
          </div>
        </div>
      </div> 

      <div className="benefitslatex__block--content--item">
        <div className="benefitslatex__block--content--item__title">
          <div className="benefitslatex__block--content--item__title--num">4</div>
          <span>Равномерное распределение веса тела.</span>
        </div>
        <div className="benefitslatex__block--content--item__content">
          <div className="benefitslatex__block--content--item__content--text">
            100% натуральный латекс LIEN'A обеспечивает равномерность распределения веса тела, что улучшает кровообращение. Это уменьшает “ворочание” во время сна, следовательно, улучшает его качество.
          </div>
        </div>
      </div> 

      <div className="benefitslatex__block--content--item">
        <div className="benefitslatex__block--content--item__title">
          <div className="benefitslatex__block--content--item__title--num">5</div>
          <span>Хорошая вентиляция.</span>
        </div>
        <div className="benefitslatex__block--content--item__content">
          <div className="benefitslatex__block--content--item__content--text">
            100% натуральный латекс LIEN'A  имеет открытую структуру ячеек и вентиляционные отверстия, которые легко рассеивают влагу (около 350 мл влаги теряется во время сна). Это важно для поддержания оптимального микроклимата.
          </div>
        </div>
      </div> 

      <div className="benefitslatex__block--content--item">
        <div className="benefitslatex__block--content--item__title">
          <div className="benefitslatex__block--content--item__title--num">6</div>
          <span>Гипоаллергенность.</span>
        </div>
        <div className="benefitslatex__block--content--item__content">
          <div className="benefitslatex__block--content--item__content--text">
            100% натуральный латекс LIEN'A  препятствует размножению пылевых клещей и является антимикробным и антибактериальным природным материалом, поэтому рекомендуется для людей, страдающих аллергией.
          </div>
        </div>
      </div> 

      <div className="benefitslatex__block--content--item">
        <div className="benefitslatex__block--content--item__title">
          <div className="benefitslatex__block--content--item__title--num">7</div>
          <span>Нет химических запахов.</span>
        </div>
        <div className="benefitslatex__block--content--item__content">
          <div className="benefitslatex__block--content--item__content--text">
            100% натуральный латекс LIEN'A состоит только из природного материала, поэтому не выделяет неприятных химических веществ и запахов.
          </div>
        </div>
      </div> 

      <div className="benefitslatex__block--content--item">
        <div className="benefitslatex__block--content--item__title">
          <div className="benefitslatex__block--content--item__title--num">8</div>
          <span>Долгий срок службы.</span>
        </div>
        <div className="benefitslatex__block--content--item__content">
          <div className="benefitslatex__block--content--item__content--text">
            Большинство матрасов необходимо заменять каждые 7 лет, а срок службы матраса из 100% натурального латекса может длиться до 20 лет или более.
          </div>
        </div>
      </div> 

    </div>
  </div>
  )
}

export default BenefitsLatex 