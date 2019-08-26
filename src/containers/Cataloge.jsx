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
  state = {
    toursList: []
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
            <SidebarFilter regions={regionsList} params={this.props.location.params } />
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