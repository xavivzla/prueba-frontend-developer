import React from 'react'

import '../assets/scss/components/ItemCard.scss'

const ItemCard = ({name, id, price, principal_photo, days_and_nights, activities, has_tour  }) => (
  <div className="item-card">
    <div className="item-card__top">
      <img className="item-card__image" src={principal_photo} alt="" />

      <div className="item-card__cont">
        {has_tour && <div className="item-card__flag">TOUR</div>}
        <div className="item-card__time">{days_and_nights}</div>
        <div className="item-card__price"><span className="item-card__price-name">Desde</span> {price} S/</div>

      </div>
    </div>

    <div className="item-card__bottom">
      <div className="item-card__name">{name}</div>
      <div className="item-card__activities">
        <span className="item-card__activities-name">Actividades: </span>
        {activities}
      </div>
    </div>
  </div>
)

export default ItemCard