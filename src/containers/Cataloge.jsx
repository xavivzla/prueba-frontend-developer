import React, { Component } from 'react'
// import axios from 'axios'
import LazyLoad from 'react-lazyload'
import { CSSTransition } from 'react-transition-group'
import { AppContext } from '../utils/api.conext';
import ApiFetch from '../utils/api.fetch'

import SidebarFilter from '../components/SidebarFiters'
import ItemCard from '../components/ItemCard'
import BarFilterSort from '../components/BarFilterSort'
import Breadcrumb from '../components/Breadcrumb'

import '../assets/scss/components/Cataloge.scss'
import '../assets/scss/components/TransitionFade.scss'

async function getTours(params) {
  return await ApiFetch.listTours({...params})

  // const tours = async () => {
    //     const params = {
    //       region_id: 1385,
    //       activity_id: 2,
    //       // region_id: this.props.location.params.id
    //     }
    //     updateToursList(result)
}
class Cataloge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toursList: [],
      filters: {
        region_id: null,
        activity_id: null,
        days_id: null,
      }
    }

    this._handleChangeRegion = this._handleChangeRegion.bind(this)
  }

  componentDidMount() {
    const params = {
      region_id: (this.props.location && this.props.location.params && this.props.location.params.id) ? this.props.location.params.id : undefined,
      activity_id: undefined,
    }
    getTours(params)
    .then((data) => {
      this.setState({toursList: data.packages})
    })
  }



  // pushNewRoute(regionChange) {
	// 	const region = this.context.regionsList.find(region => region.id === regionChange)
  //   const slugRegion = region.slug
  //   const idRegion = region.id
  //   const nameRegion = region.name

	// 	this.props.history.push({
  //     pathname: `/cataloge/${slugRegion}`,
  //     params: {
  //       id: idRegion,
  //       name: nameRegion,
        
	// 		}
	// 	})
  // }

  _handleChangeRegion(e) {
    this.setState({
      filters: {
        region_id: e.target.value
      }
    })
    console.log(this.state)
    
    setTimeout(() => {
      getTours(this.state.filters)
      .then((data) => {
        console.log('change', data)
        this.setState({toursList: data.packages})
      })
    }, 50)
  }



  render() {
    const { regionsList } = this.context

    const { toursList } = this.state


    return (
      <div className="cataloge">
        <div className="cataloge__header">
          <Breadcrumb />
          <div className="cataloge__name">{(this.props.location.params && this.props.location.params.name) ? this.props.location.params.name : 'Categorias'}</div>
        </div>
        <div className="cataloge__cont">
          <div className="cataloge__left">
            <SidebarFilter regions={regionsList} params={this.props.location.params } changeRegion={this._handleChangeRegion} />
          </div>
          <div className="cataloge__right">
            <BarFilterSort />
            <div className="cataloge__list">
              {toursList && toursList.length > 0 && (
                toursList.map(item => {
                  return (
                    <LazyLoad offset={100} key={item.id}>
                      <CSSTransition
                        timeout={500}
                        classNames="list-transition"
                        appear
                        onEntered={item.principal_photo}>
                        <div className="cataloge__item">
                          <ItemCard {...item} />
                        </div>
                      </CSSTransition>
                    </LazyLoad>
                  )
                }))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Cataloge.contextType = AppContext

export default Cataloge