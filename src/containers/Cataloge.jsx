import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import { CSSTransition } from 'react-transition-group'
import { AppContext } from '../utils/api.conext'
import ApiFetch from '../utils/api.fetch'

import SidebarFilter from '../components/SidebarFiters'
import ItemCard from '../components/ItemCard'
import BarFilterSort from '../components/BarFilterSort'
import Breadcrumb from '../components/Breadcrumb'
import Loading from '../components/Loading'

import '../assets/scss/components/Cataloge.scss'
import '../assets/scss/components/TransitionFade.scss'

const getTours = (params) => ApiFetch.listTours({ ...params })

class Cataloge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toursList: [],
      available_filters: {},
      filters: {
        region_id: null,
        activity_id: null,
        days_id: null,
        order_by: null,
      },
      loading: true,
    }

    this.handleChangeRegion = this.handleChangeRegion.bind(this)
    this.handleChangeSort = this.handleChangeSort.bind(this)
    this.handleChangeActivity = this.handleChangeActivity.bind(this)
  }

  componentDidMount() {
    const params = {
      region_id: ( this.props.location && this.props.location.params && this.props.location.params.id) ? this.props.location.params.id : undefined,
      activity_id: undefined,
    }
    
    getTours(params)
      .then((data) => {
        this.setState({
          toursList: data.packages,
          available_filters: data.available_filters,
          loading: false,
        })
      })
  }

  async handleChangeSort(e) {
    await this.setState({
      filters: {
        ...this.state.filters,
        order_by: e.target.value,
      },
      loading: true,
    })
    await getTours(this.state.filters)
      .then((data) => {
        this.setState({
          toursList: data.packages,
          loading: false,
        })
      })
  }

  async handleChangeRegion(e) {
    await this.setState({
      filters: {
        ...this.state.filters,
        region_id: e.target.value,
      },
      loading: true,
    })
    await getTours(this.state.filters)
      .then((data) => {
        this.setState({
          toursList: data.packages,
          loading: false,
        })
      })
  }

  async handleChangeActivity(e) {
    await this.setState({
      filters: {
        ...this.state.filters,
        activity_id: e.target.value,
      },
      loading: true,
    })
    await getTours(this.state.filters)
      .then((data) => {
        this.setState({
          toursList: data.packages,
          loading: false,
        })
      })
  }

  render() {
    const { regionsList } = this.context

    const { toursList, available_filters, loading } = this.state

    return (
      <div className="cataloge container">
        {loading && <Loading/>}
        <div className="cataloge__header">
          <Breadcrumb />
          <div className="cataloge__name">{(this.props.location.params && this.props.location.params.name) ? this.props.location.params.name : 'Categorias'}</div>
        </div>
        <div className="cataloge__cont">
          <div className="cataloge__left">
            <SidebarFilter
              regions={regionsList}
              params={this.props.location.params }
              changeRegion={this.handleChangeRegion}
              activities={available_filters.activities}
              changeActivity={this.handleChangeActivity}
              days={available_filters.days} />
          </div>
          <div className="cataloge__right">
            <BarFilterSort handleChange={this.handleChangeSort} />
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
