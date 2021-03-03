import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export default function CarouselCategories() {
  const categories = useSelector(state => state.app.categories)

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToScroll: 4,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }

  return (
    <div className="content__categories">
      <Slider {...settings} data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
        {categories.map(item => (
          item.isSubCategories ? (
            <Link to={`/catalog/subcategories/${item.types}`}>
              <div className="content__categories--item">
                <h5>{item.title}</h5>
                <p>из 100% натурального латекса</p>

                <div className="content__categories--item__img">
                  <img src={item.img} alt="content__categories--item__img" />
                </div>
              </div>
             </Link>
          ):(
            <Link to={`/catalog/products/${item.types}`}>
              <div className="content__categories--item">
                <h5>{item.title}</h5>
                <p>из 100% натурального латекса</p>
                <div className="content__categories--item__img">
                  <img src={item.img} alt="content__categories--item__img" />
                </div>
              </div>
            </Link>
          )
        ))}
      </Slider>
    </div>
  )
}
