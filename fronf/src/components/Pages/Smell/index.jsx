import React, { useEffect } from 'react'
 
import smell from '../../assets/img/smell.jpg'
import smell2 from '../../assets/img/smell2.jpg'
import './style.css'

const Smell = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="smell__block">
      <div className="smell__block--title">
        <h2>Запах латекса</h2>
      </div>

      <div className="smell__block--content">
        
        <div className="smell__block--content--item">
          <div className="smell__block--content--item__title">
            <div className="smell__block--content--item__title--num">1</div>
            <span>Есть ли запах у вашей продукции? </span>
          </div>
          <div className="smell__block--content--item__content">
            <div className="smell__block--content--item__conten--text">
              <p>Запах есть.</p>
            </div>
          </div>
        </div>

        <div className="smell__block--content--item">
          <div className="smell__block--content--item__title">
            <div className="smell__block--content--item__title--num">2</div>
            <span>Чем она пахнет?</span>
          </div>
          <div className="smell__block--content--item__content">
            <div className="smell__block--content--item__conten--text">
              <p>
                Отвечая на этот вопрос, всегда нужно учитывать индивидуальные особенности обоняния каждого человека. За время работы мы сталкивались с различными описаниями запаха нашей продукции. Приведем примеры:
              </p>
              <li>
                Для сотрудников нашей компании - уже в течение 6 лет латекс пахнет одинаково, как правило это смешанный запах выпечки или сухого молока с легкими нотами резиновых шариков.
              </li>
              <li>
                чаще всего, примерно в 50% случаев  в отзывах клиентов фигурирует “вкусный молочный запах”
              </li>
              <li>
                существует категория покупателей, для которых латекс не пахнет ничем, либо имеет очень легкий свежий запах
              </li>
              <li>
                встречается и такая характеристика как  резкий резиновый запах или запах покрышек
              </li>
              <li>
                пару раз за несколько лет - клиенты охарактеризовали его как “рыбный запах”
              </li>
              <li>
                был вариант “грибной запах” или запах свежих шампиньонов.
              </li><br/>
              <p>
                Учитывая, что технология производства не меняется на протяжении многих лет,  мы связываем такой разброс мнений именно с особенностями восприятия запаха конкретным человеком.
              </p>
            </div>
          </div>
        </div>
        
        <div className="smell__block--content--item">
          <div className="smell__block--content--item__title">
            <div className="smell__block--content--item__title--num">3</div>
            <span>Сильный ли запах? </span>
          </div>
          <div className="smell__block--content--item__content">
            <div className="smell__block--content--item__conten--text">
              <p>Чтобы не быть голословными, давайте обратимся к исследованиям.</p>
            </div>
          </div>
        </div>

        <div className="smell__block--content--item__desription">
          <div className="smell__block--content--item__title">
            <span>Результаты исследований запаха латекса</span>
          </div>
          <div className="smell__block--content--item__content">
            <div className="smell__block--content--item__conten--text">
              <p>
                Наша продукция 1 раз в 2 года проходит сертификацию и получает специальный ЭКО-сертификат по ее результатам. Посмотреть сертификат можно на нашем сайте (19 страница). В 2018 году в исследованиях был проведен замер запаха наших подушек по стандарту VDA. В результате была получена оценка 2.3 балла. Для понимания, приведем таблицу баллов и характеристик восприятия такого запаха:
              </p>
              <li>1 балл - запах не ощущается</li>
              <li>2 балла – ощущается, не беспокоит</li>
              <li>3 балла - явно ощущается, не беспокоит</li>
              <li>4 балла - беспокоит</li>
              <li>5 баллов - очень беспокоит</li>
              <li>6 баллов - невыносимо</li>
            </div>
            <div className="smell__block--content--item__conten--img">
              <img src={smell} alt='smell' />
            </div>
            <p className="description__bottom--img">
              Таким образом, запах нашего латекса не должен Вас беспокоить и приносить дискомфорт. 
            </p>
          </div>
        </div>

        <div className="smell__block--content--item">
          <div className="smell__block--content--item__title">
            <div className="smell__block--content--item__title--num">4</div>
            <span>Влияет ли запах латекса на здоровье человека?</span>
          </div>
          <div className="smell__block--content--item__content">
            <div className="smell__block--content--item__conten--text">
              <p>Нет. Не влияет</p>
            </div>
          </div>
        </div>

        <div className="smell__block--content--item">
          <div className="smell__block--content--item__title">
            <div className="smell__block--content--item__title--num">5</div>
            <span>Почему я раньше покупал и запаха не было,<br/> а сейчас купил и продукция пахнет? </span>
          </div>
          <div className="smell__block--content--item__content">
            <div className="smell__block--content--item__conten--text">
              <p>Возможно раньше Вы приобретали продукцию, которая какое-то время пролежала на складе и за это время проветрилась. Чем «свежее» латекс, тем насыщеннее запах.</p>
            </div>
          </div>
        </div>

        <div className="smell__block--content--item">
          <div className="smell__block--content--item__title">
            <div className="smell__block--content--item__title--num">6</div>
            <span>Как долго держится запах и как от него избавиться? </span>
          </div>
          <div className="smell__block--content--item__content">
            <div className="smell__block--content--item__conten--text">
              <p>
                Нет, запах держится недолго и достаточно быстро выветривается при активной эксплуатации латексных изделий. Чем больше и чаще Вы будете использовать продукцию по назначению, тем быстрее выветрится запах за счет постоянной циркуляции потоков воздуха внутри латексной пены. 
              </p>
            </div>
            <div className="smell__block--content--item__conten--img">
              <img src={smell2} alt='smell2' />
            </div>
            <div className="smell__block--content--item__conten--text">
              <p>
                Можно попробовать пропылесосить матрас или подушку, но итоги локальных испытаний показали невысокие результаты в борьбе с запахом для особо чувствительных людей.
              </p>
              <p>
                При пассивном проветривании латекса (просто положить на улицу или на балкон) срок уменьшения интенсивности запаха может значительно растянуться от 1 недели до 2 месяцев.  
              </p>
            </div>
          </div>
        </div>

        <div className="smell__block--content--item__desription">
          <div className="smell__block--content--item__title">
            <span>Итог:</span>  
          </div>
          <div className="smell__block--content--item__desription--result">
            <p>
              Подводя итоги вышесказанного, можно резюмировать следующее: продукция из 100% натурального латекса имеет запах, который для большинства людей приятен и не беспокоит. Если у Вас обостренное обоняние, то это тоже не является препятствием для приобретения латексной продукции, так как запах быстро проветривается.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Smell