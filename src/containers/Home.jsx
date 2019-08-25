
import React from 'react'

import '../assets/scss/components/Home.scss'


const Home = () => {

  return (
    <div className="home">
      <div className="home__background">
        <img src="https://images.unsplash.com/photo-1415804941191-bc0c3bbac10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" className="home__image" alt="" />
      </div>
      <div className="home__wrapper">
        <img className="home__logo" src="https://turismoi.pe/assets/turismoipe-8ced821ca150031d6c07270679675e35.svg" alt="" />
        <div className='home__left'>
          <h4 className="home__subtitle">Viaja con nosotros</h4>
          <h1 className="home__title">Vive experiences increibles</h1>
          <div className="home__search">
            <input className="home__input-search" list="regions" />
            <datalist id="regions" className="home__datalist">
              <option value="Internet Explorer" />
              <option value="Firefox" />
              <option value="Chrome" />
              <option value="Opera" />
              <option value="Safari" />
            </datalist>
            <div className="home__buttons">
              <button type="button" className="home__btn">
                Buscar Region
								</button>
              <button type="button" className="home__btn">
                Ver Todas
								</button>
            </div>
          </div>
        </div>
        <div className="home__brands">
        </div>
      </div>
    </div>
  )
}

export default Home