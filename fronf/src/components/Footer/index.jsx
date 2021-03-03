import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return(
    <footer>
      <div className="footer__content">
				<div className="footer__content--info">
					<div className="info--company">
						<span>компания</span><br/><br/>
						{/* <Link to="/description">Наша компания</Link><br/>  */} 
						<Link to="/documents">Сертификаты</Link><br/>                 
						<Link to="/contacts">Контакты</Link><br/>
						<Link to="/catalog">Каталог</Link><br/>
					</div>
					<div className="info">
						<span>информация</span><br/><br/>
						<div className="info__link">
							<div className="info__link--left">
								
								<Link to="/smell">&ndash; Запах латекса</Link><br/>
								<Link to="/gallery">&ndash; Видео и фотогалерея</Link><br/>
								<Link to="/benefitslatex">&ndash; Преимущества натурального латекса</Link><br/>
								<Link to="/returnproduct">&ndash; Сроки и порядок возврата товара</Link><br/>
								<Link to="/whatislatex">&ndash; Что такое 100% натуральный латекс?</Link><br/>
								<Link to="/countryoforigin">&ndash; Где производят 100% природный латекс?</Link><br/>
							</div>
							<div className="info__link--right">
								<Link to="/difference">&ndash; Как отличить натуральный латекс от синтетического?</Link><br/>
								<Link to="/choosemattress">&ndash; Как выбрать латексный матрас?</Link><br/>
								<Link to="/choosepillow">&ndash; Как выбрать латексную подушку?</Link><br/>
								<Link to="/mattressthickness">&ndash; Как выбрать толщину латексного матраса?</Link><br/>
							</div>
						</div>
					</div>
					<div className="info--internetShop">
						<span>интернет-магазин</span><br/><br/>
						<Link to="/howtoorder">Как заказать?</Link><br/>                 
						<Link to="/payment">Как оплатить?</Link><br/>
						<Link to="/delivery">Доставка</Link><br/>
					</div>
				</div>
				<div className="footer__content--social">
					<a href="https://vk.com/club201045124">
						<span className="iconify vk" data-icon="mdi-vk" data-inline="false"></span>
					</a>
					<a href="https://instagram.com/reallatex?igshid=knhly05jyyx4">
						<span className="iconify instagram" data-icon="ri:instagram-fill" data-inline="false"></span>
					</a>
{/* 					<Link href="/">
						<span className="iconify youtube" data-icon="simple-icons:youtube" data-inline="false"></span>
					</Link> */}
					<div className="footer__content--connection">
						<h5>Связь с нами:</h5>
						<h4>8(902)671-90-50</h4>
						<h4><Link to="/">latexreal@gmail.com</Link></h4>

						<div className="copy">
							<div className="copy_line"></div>
							<div className="copy_name">&copy;Rashidov A.G.</div>
						</div>
					</div>
				</div>
			</div>
    </footer>
  )
}

export default Footer