
import React, { Component } from 'react'
import { AppContext } from '../utils/api.conext';

import '../assets/scss/components/Home.scss'

const inputSearchRef = React.createRef()



class Home extends Component {

  pushNewRoute = () => {
		const valueInput = inputSearchRef.current.value
		const region = this.context.regionsList.find(region => region.name === valueInput)
    const slugRegion = region.slug
    const idRegion = region.id
    const nameRegion = region.name
		this.props.history.push({
      pathname: `/cataloge/${slugRegion}`,
      params: {
        id: idRegion,
        name: nameRegion,
        
			}
		})
	}
  
  render() {
    const {
      regionsList,
    } = this.context
    return(
      <div className="home">
        <div className="home__background">
          <img src="https://images.unsplash.com/photo-1415804941191-bc0c3bbac10d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" className="home__image" alt="" />
        </div>
        <div className="home__wrapper">
          <img className="home__logo" src="https://turismoi.pe/assets/turismoipe-8ced821ca150031d6c07270679675e35.svg" />
          <div className='home__left'>
            <h4 className="home__subtitle">Viaja con nosotros</h4>
            <h1 className="home__title">Vive experiences increibles</h1>
            <div className="home__search">
              <input className="home__input-search" ref={inputSearchRef} name="search" list="regions" />
              <datalist id="regions" className="home__datalist">
                {regionsList.length > 0 && regionsList.map(region => {
                  return <option key={region.id} data-slug={region.slug} name={region.slug}  value={region.name} />
                })}
              </datalist>
              <div className="home__buttons">
                <button onClick={() => {
                  this.pushNewRoute()
                }}
                  type="button" className="home__btn">
                  Buscar Region
              </button>
                <button onClick={() => {
                  this.props.history.push({
                    pathname: '/cataloge/'
                  })
                }}
                  type="button" className="home__btn">
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
}

Home.contextType = AppContext

export default Home