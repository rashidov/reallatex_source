import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import './StartPage.css'

export default class InfoBlockSlick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div className="content__info--link__questions--url__slick">
        <Slider {...settings}>
          <div className="content__info--link__questions--url__slick--content">
            <Link to="/howtoorder">Как заказать?</Link>
          </div>
          <div className="content__info--link__questions--url__slick--content">
            <Link to="/whatislatex">Что такое 100% натуральный латекс?</Link>
          </div>
          <div className="content__info--link__questions--url__slick--content">
            <Link to="/benefitslatex">Преимущества натурального латекса</Link>
          </div>
          <div className="content__info--link__questions--url__slick--content">
            <Link to="/countryoforigin">Где производят 100% природный латекс?</Link>
          </div>
          <div className="content__info--link__questions--url__slick--content">
            <Link to="/difference">Как отличить натуральный латекс от синтетического?</Link>
          </div>
          <div className="content__info--link__questions--url__slick--content">
            <Link to="/smell">Запах латекса</Link>
          </div>
          <div className="content__info--link__questions--url__slick--content">
           <Link to="/returnproduct">Сроки и порядок возврата товаров</Link>
          </div>
        </Slider>
      </div>
    );
  }
}