import React from 'react'

import '../assets/scss/components/TourBanner.scss'

const Tour = () => (
  <div className="tour">
    <div className="tour-banner">
      <div className="tour-banner__image" style={{ backgroundImage: 'url(//cdn.goodlayers.com/traveltour/wp-content/uploads/2016/06/shutterstock_178807262.jpg)' }} />
      <div className="tour-banner__overlay" />
      <div className="tour-banner__overlay-bottom" />
      <div className="tour-banner__cont">
        <div className="tour-banner__name">
          Switzerland – 7 Days in Zurich, Zermatt
        </div>
      </div>
    </div>
    <div className="tour-cont">
      <div className="tour-cont__left"></div>
      <div className="tour-cont__right"></div>
    </div>
  </div>
)

export default Tour