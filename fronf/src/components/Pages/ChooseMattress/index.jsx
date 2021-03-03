import React, { useEffect } from 'react'
 
import mtrs1 from '../../assets/img/mtrs1.jpg'
import mtrs2 from '../../assets/img/mtrs2.jpg'
import mtrs3 from '../../assets/img/mtrs3.jpg'
import m1 from '../../assets/img/1.png'
import m2 from '../../assets/img/2.png'
import m3 from '../../assets/img/3.png'
import m4 from '../../assets/img/4.png'
import m5 from '../../assets/img/5.png'
import m6 from '../../assets/img/6.png'
import m7 from '../../assets/img/7.png'
import m8 from '../../assets/img/8.png'
import './style.css'

const ChooseMattress = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="choosemattress__block">
      <div className="choosemattress__block--titile">
        <h2>Как выбрать латексный матрас?</h2>
      </div>

      <div className="choosemattress__block--content">
        
        <div className="choosemattress__block--content__item">
          <div className="choosemattress__block--content__item--main">
            <div className="choosemattress__block--content__item--num">1</div>
            <div className="choosemattress__block--content__item--title">
              Как изготавливают натуральный латекс
            </div>
          </div>
          <div className="choosemattress__block--content__item--text">
            <p>
              Натуральный латекс собирают вручную в жидком виде, затем наливают в большие чаны, где его тщательно фильтруют, чтобы удалить твердые частицы. Затем его наливают в большие формы, где превращают в эмульсию с водой и пузырьками воздуха. Затем медленно нагревают и вулканизируют – процесс, где жидкая латексная резина переходит в эластичное густое состояние.
            </p>
            <p>
              Как я упомянул выше, существуют два метода вулканизации, которые используются для изготовления прочного латекса. Более старая и более проверенная временем технология – это метод Данлопа, в результате которой получается более плотный и чуть более жесткий натуральный латекс. Более новая технология, называемая методом Талалая, является, по существу, тем же самым первоначальным методом, за исключением того, что она включает быстрое охлаждение (которое оставляет меньше воздушных пузырьков в форме) непосредственно перед тем, как латекс быстро нагревается до загустения. В результате этого получается более мягкий, менее плотный латекс.
            </p>
            <p>
              Можно сделать вывод: натуральный латекс, изготовленный по методу Данлопа, более твердый и лучше способен менять форму, чем латекс, изготовленный по методу Талалая. И поскольку латекс по Данлопу менее затратный, чем латекс по Талалаю, его стоимость ниже. По этим причинам я предпочитаю натуральный латекс и Данлопа. 
            </p>
          </div>
          <div className="choosemattress__block--content__item--img">
            <img className="mtrs1" src={mtrs1} alt='mtrs1' />
          </div>
        </div>

        <div className="choosemattress__block--content__item">
          <div className="choosemattress__block--content__item--main">
            <div className="choosemattress__block--content__item--num">2</div>
            <div className="choosemattress__block--content__item--title">
              Как выбрать лучший латексный матрас?
            </div>
          </div>
          <div className="choosemattress__block--content__item--text">
            <p>
              Латексный матрас – новейший продукт матрасной индустрии. Обычно латекс используется в традиционных пружинных матрасах в качестве верхнего слоя, однако все чаще можно заметить, что латекс используется в матрасах вместо пружинного блока, причем в эксклюзивных моделях у самых разных производителей. Почему же появилась такая заинтересованность в латексных матрасах?
            </p>
            <p>
              На основе того, что мы услышали от посетителей, мы выделили несколько основных причин возросшего интереса к латексным матрасам. Первая и основная причина – это заинтересованность людей в выборе экологически чистого матраса. Сюда также можно отнести тех, кто предпочитает матрас, сделанный из натуральных материалов, тех, кто предпочитает матрас из возобновляемых материалов и тех, кто желает быть уверенным, что их матрас не отравляет комнату химическими испарениями.
            </p>
            <p>
              И хотя существуют другие, такие же экологически чистые материалы, такие, как натуральный хлопок или шерсть, ни один из них не обладает такой способностью менять форму и такой эластичностью, как латекс. Хлопковые матрасы, подобно матрасам - футонам, слеживаются и со временем становятся значительно жестче. Шерсть, несомненно, обладает великолепным комфортом, но ее надо на что-то положить и для этого требуется хорошая основа или «ядро» матраса.
            </p>
            <p>
              Другая причина, по которой покупатели предпочитают латексные матрасы – это гипоаллергенность, антибактериальность и отсутствие пылевых клещей. Эти микроорганизмы не заводятся в натуральном латексе.
            </p>
            <p>
              И последняя причина, которую назвали наибольшое число покупателей, это комфортабельность латексных матрасов. Некоторые люди страдают болями. Другие пробовали разные матрасы, но все равно не получают хорошего сна.
            </p>
            <p>
              И все же, несмотря на все намеренно создаваемые заблуждения насчет латекса, он является превосходным выбором для многих покупателей. Нет более экологически чистого матраса, чем натуральный латексный матрас. Это лучший выбор для тех, кто чувствителен к различной «химии» и другим аллергенам.
            </p>
            <p>
              Но более важная причина, по которой латексные матрасы стали так популярны, заключается в том, что они наиболее комфортабельные. Латекс одновременно очень плотный материал и в тоже время, вследствие своих эластичных свойств, упругий и податливый. Поэтому для тех, кто не может обрести полноценный ночной сон или для тех, кто отягощен постоянными болями, латексный матрас – это лучший выбор, это не имеющий себе равных комфорт и поддержка.
            </p>
          </div>
        </div>

        <div className="choosemattress__block--content__item">
          <div className="choosemattress__block--content__item--main">
            <div className="choosemattress__block--content__item--num">3</div>
            <div className="choosemattress__block--content__item--title">
              Не все латексные матрасы одинаковы
            </div>
          </div>
          <div className="choosemattress__block--content__item--text">
            <p>
              Но хотим вас предупредить, что не все матрасы, которые называют «латексные матрасы», одинаковы. Как такое может быть? Это долгая история, суть которой заключается в том, что во время Второй Мировой Войны был создан искусственный латекс (чтобы компенсировать нехватку натурального латекса, необходимого для военных целей). И с тех пор все такие матрасы считаются латексными, независимо от того, сделаны ли они из натурального латекса (изготовленного из сока каучукового дерева) или, что более часто встречается, из смеси искусственного и натурального латекса (что в матрасной индустрии называется «смесь» латекса).
            </p>
            <p>
              Зачем нужно все это знать? Если вам нужен латексный матрас потому, что он экологически чистый и изготовлен из натуральных материалов, лучше быть уверенным в том, что латекс в вашем матрасе натуральный, с плантации (сок каучукового дерева), а не искусственный. Далее, хотя натуральный и искусственный латекс могут одинаково выглядеть под микроскопом, по ощущениям в повседневном использовании они немного отличаются. Кроме того, некоторые утверждают, что натуральный и искусственный латекс обладают различной долговечностью (хотя, честно говоря, я слышал от поставщиков и натурального и искусственного латекса, что их продукт более долговечный и, не обладая ученой степенью по химии, я не могу сказать, какая сторона приводит более убедительные аргументы).
            </p>
          </div>
          <div className="choosemattress__block--content__item--img">
            <img className="mtrs2" src={mtrs2} alt='mtrs2' />
          </div>
        </div>

        <div className="choosemattress__block--content__item">
          <div className="choosemattress__block--content__item--main">
            <div className="choosemattress__block--content__item--num">4</div>
            <div className="choosemattress__block--content__item--title">
              Что можно порекомендовать?
            </div>
          </div>
          <div className="choosemattress__block--content__item--text">
            <p>
              Основываясь исключительно на комфортности, среди многообразия матрасов из натурального и искусственного латекса я выбрал натуральный латекс. Честно говоря, если вы попытаетесь более подробно узнать о латексе, вы поймете, что здесь есть много тонкостей. Выше я упомянул только основное различие в латексе - натуральный и искусственный. Теперь же я расскажу, как на самом деле изготавливают латекс.
            </p>
            <p>
              Существуют два метода: первоначальный метод Данлопа (Dunlop method), более старый, традиционный метод, который в основном используется для изготовления натурального латекса и более новый метод Талалая (Talalay method), который в основном используется для изготовления искусственного латекса. Для того чтобы еще больше все усложнить, скажу, что существует натуральный латекс, изготовленный по методу Талалая, но более высококачественным считается натуральный латекс, изготовленный по методу Данлопа.
            </p>
            <p>
              У меня нет цели, чтобы ввергнуть вас в сон, поэтому я приведу здесь очень короткое описание того, как изготавливают латекс – понимание этого сделает вас более информированным покупателем и позволит вам лучше определиться с тем, на что обратить внимание, выбирая латексный матрас.
            </p>
          </div>
          <div className="choosemattress__block--content__item--img">
            <img className="mtrs3" src={mtrs3} alt='mtrs3' />
          </div>
        </div>

        <div className="choosemattress__block--content__item">
          <div className="choosemattress__block--content__item--main">
            <div className="choosemattress__block--content__item--num">5</div>
            <div className="choosemattress__block--content__item--title">
              Другие преимущества натурального латекса
            </div>
          </div>
          <div className="choosemattress__block--content__item--text">
            <p>
              Еще один плюс натурального латекса состоит в том, что он не нагревается во сне, а пылевые клещи и другие микроорганизмы не могут выжить в латексе из-за его уникальных органических свойств. Натуральный латекс – это долговечный материал, устойчивый к слеживанию и подстраивающийся под форму тела. Из-за его способности менять форму и высокой эластичности он позволяет вам легко переворачиваться с бока на живот или с бока на спину и это способствует полноценному естественному сну.
            </p>
            <p>
              Почему тогда, несмотря на все эти преимущества натурального латекса, большинство производителей матрасов используют более дешевый искусственный латекс или смесь натурального латекса с дешевым искусственным латексом? По моему мнению, для потребителя никаких преимуществ искусственного латекса по сравнению с натуральным латексом нет (хотя некоторые производители заявляют, что искусственный латекс чуть более упругий). И в тоже время у искусственного латекса есть множество недостатков (он изготовлен из искусственных компонентов, ощущения от природного каучука мне нравятся больше, чем от искусственного каучука, натуральный латекс обладает анти-бактериальными и анти-аллергенными свойствами и т.д.). Решающим фактором является цена. Для производителя менее затратно изготовить матрас из искусственного латекса или из смеси натурального и искусственного латекса, чем полностью из натурального латекса.
            </p>
            <p>
              Но пока матрас дойдет до покупателя, разница в цене между матрасом с искусственным латексом (или смесью латексов) и с натуральным латексом становится почти незаметной. Только производитель получает более высокую прибыль от использования искусственного латекса. Но пока существует различие в комфортности, гипо-аллергенности и экологических свойствах матрасов, я считаю, что все матрасы из натурального латекса это лучший продукт самого высочайшего класса.
            </p>
          </div>
          <div className="choosemattress__block--content__item--img">
            <div className="choosemattress__block--content__item--img__all">
              <img src={m1} alt='m1' />
              <img src={m2} alt='m2' />
              <img src={m3} alt='m3' />
              <img src={m4} alt='m4' />
              <img src={m5} alt='m5' />
              <img src={m6} alt='m6' />
              <img src={m7} alt='m7' />
              <img src={m8} alt='m8' />
            </div>
          </div>
        </div>

        <div className="choosemattress__block--content__item">
          <div className="choosemattress__block--content__item--main">
            <div className="choosemattress__block--content__item--num">6</div>
            <div className="choosemattress__block--content__item--title">
              Как покупать латексный матрас
            </div>
          </div>
          <div className="choosemattress__block--content__item--text">
            <p>
              Хорошо, это все только теория, а теперь я расскажу 7 Основных Пунктов, о которых нужно помнить для того, чтобы выбрать великолепный латексный матрас. Помните о них, и это поможет вам приобрести качественный латексный матрас.
            </p>
            <p>
              1) Я предпочитаю 100% натуральный латекс, а не искусственный или смесь латексов – натуральный латекс более «живой» и «отзывчивый», обладает лучшей эластичностью, чем искусственный или смесь латексов. Натуральный латекс дарит лучшее ощущение комфорта. Кроме того, натуральный латекс долговечный, устойчив к слеживанию и подстраивается под форму тела. Также, он обладает другими преимуществами, которых нет у искусственного латекса, такими как естественная защита против пылевых клещей, отсутствие пролежней и плесени, гипо-аллергенность и отсутствие «химического» запаха.
            </p>
            <p>
              2) Ищите простой по дизайну латексный матрас. Это поможет в дальнейшем избежать проблем, связанных со смещением слоев и перемещением содержимого внутри матраса. Избегайте матрасы с чрезмерным количеством зон или «урезанного» дизайна.
            </p>
            <p>
              3) Если вам понравился латексный матрас по описанию, обязательно выбирайте монолитный блок из натурального латекса по Данлопу (матрас ни в коем случае не должен быть склеенным) . Латекс по Данлопу обеспечивает отличную поддержку.  Кроме того, обязательно подберите латексные подушки, которые великолепно дополняют матрас и делают сон более комфортным.
            </p>
            <p>
              4) Выбирайте дышащий внешний чехол для матраса, желательно из смеси шерсти или хлопка, который не содержит химических антипиренов. Кроме того, чехол не должен быть излишне толстым или стеганным, чтобы вы могли оставаться ближе к тому, за что вы платили … к латексу.
            </p>
            <p>
              5) Покупайте матрас в уважаемой компании, легко доступной и имеющей непредвзятые отзывы со стороны третьих лиц. Тогда вы сможете почитать то, что говорят другие люди, которые уже приобрели латексный матрас у этой компании. Таким образом, вы сможете избежать многих проб и ошибок, о которых говорят те, кто потратил много денег на матрас, а затем убедились, что матрас им не подходит и им некуда с этим обращаться.
            </p>
            <p>
              6) Ищите надежную гарантию, как минимум на 10 лет с обязательством полной замены в течение, как минимум, нескольких лет. Продавец, который заботится о своей репутации, согласится забрать свой продукт. Так же, не должно быть проблем с получением копии гарантийного талона.
            </p>
            <p>
              7) Подарки и дополнительные опции, стимулирующие покупку, всегда радуют, например, "бесплатная доставка до двери" является отличным поводом оформить заказ именно в нашем магазине.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseMattress