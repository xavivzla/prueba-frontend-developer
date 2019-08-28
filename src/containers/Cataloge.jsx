import React, { Component } from 'react'
import { AppContext } from '../utils/api.conext'
import ApiFetch from '../utils/api.fetch'

import SidebarFilter from '../components/SidebarFiters'
import ItemCard from '../components/ItemCard'
import BarFilterSort from '../components/BarFilterSort'
// import Breadcrumb from '../components/Breadcrumb'
import Loading from '../components/Loading'

import '../assets/scss/components/Cataloge.scss'
import '../assets/scss/components/TransitionFade.scss'

const getTours = (params) => ApiFetch.listTours({ ...params })

class Cataloge extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toursList: [],
      regions: [],
      available_filters: {},
      filters: {},
      loading: true,
      filterMobileOpen: false,
    }

    this.handleChangeRegion = this.handleChangeRegion.bind(this)
    this.handleChangeSort = this.handleChangeSort.bind(this)
    this.handleChangeActivity = this.handleChangeActivity.bind(this)
    this.handleChangeDay = this.handleChangeDay.bind(this)
    this.formatDays = this.formatDays.bind(this)
    this.handleRemoveAllFilters = this.handleRemoveAllFilters.bind(this)
    this.handleRemoveFilter = this.handleRemoveFilter.bind(this)
    this.handleClickToggleFilter = this.handleClickToggleFilter.bind(this)
  }

  async componentDidMount() {
    const region_id = ( this.props.location && this.props.location.params && this.props.location.params.id) ? this.props.location.params.id : undefined;
    const region_name = ( this.props.location && this.props.location.params && this.props.location.params.name) ? this.props.location.params.name : undefined;
    await this.setState({
      filters: {
        ...this.state.filters,
        region: {
          ...this.state.filters.region,
          id: region_id,
          name: region_name,
        },
      },
      loading: true,
    })

    await getTours(this.state.filters)
      .then((data) => {
        this.setState({
          regions: data.available_filters.regions,
          toursList: data.packages,
          available_filters: data.available_filters,
          loading: false,
        })
        this.formatDays(data.available_filters.days)
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
    let filterName = e.target[e.target.selectedIndex].text
    await this.setState({
      filters: {
        ...this.state.filters,
        region: {
          ...this.state.filters.region,
          id: e.target.value,
          name: filterName,
        },
      },
      loading: true,
    })
    await getTours(this.state.filters)
      .then((data) => {
        this.setState({
          regions: data.available_filters.regions,
          toursList: data.packages,
          available_filters: data.available_filters,
          loading: false,
        })
        this.formatDays(data.available_filters.days)
      })
  }

  async handleChangeActivity(e) {
    let filterName = e.target[e.target.selectedIndex].text
    await this.setState({
      filters: {
        ...this.state.filters,
        activity: {
          ...this.state.filters.activity,
          id: e.target.value,
          name: filterName,
        },
      },
      loading: true,
    })
    await getTours(this.state.filters)
      .then((data) => {
        this.setState({
          regions: data.available_filters.regions,
          toursList: data.packages,
          available_filters: data.available_filters,
          loading: false,
        })
        this.formatDays(data.available_filters.days)
      })
  }

  async handleChangeDay(e) {
    let filterName = e.target[e.target.selectedIndex].text
    await this.setState({
      filters: {
        ...this.state.filters,
        days: {
          ...this.state.filters.days,
          id: e.target.value,
          name: filterName,
        },
      },
      loading: true,
    })
    await getTours(this.state.filters)
      .then((data) => {
        this.setState({
          regions: data.available_filters.regions,
          toursList: data.packages,
          available_filters: data.available_filters,
          loading: false,
        })
        this.formatDays(data.available_filters.days)
      })
  }

  async handleRemoveAllFilters() {
    await this.setState({
      filters: {},
      loading: true,
    })
    await getTours(this.state.filters)
      .then((data) => {
        this.setState({
          regions: data.available_filters.regions,
          toursList: data.packages,
          available_filters: data.available_filters,
          loading: false,
        })
        this.formatDays(data.available_filters.days)
      })
  }

  async handleRemoveFilter(e) {
    let filter = e.target.getAttribute('data-name')
    let filters = this.state.filters
    delete filters[filter];
    await this.setState({
      filters: filters,
      loading: true,
    })
    await getTours(this.state.filters)
      .then((data) => {
        this.setState({
          regions: data.available_filters.regions,
          toursList: data.packages,
          available_filters: data.available_filters,
          loading: false,
        })
        this.formatDays(data.available_filters.days)
      })
  }

  handleClickToggleFilter() {
    this.setState({
      filterMobileOpen: !this.state.filterMobileOpen
    })
  }

  formatDays(days) {
    const data = days.map((item) => {
      return {
        id: item,
        name: `${item} dias`,
      }
    })
    this.setState({
      available_filters: {
        ...this.state.available_filters,
        days: data,
      }
    })
  }

  render() {

    const { toursList, available_filters, loading, regions, filters, filterMobileOpen } = this.state

    return (
      <div className="cataloge container">
        {loading && <Loading/>}
        <div className="cataloge__header">
          {/* <Breadcrumb /> */}
          <div className="cataloge__name">{(this.props.location.params && this.props.location.params.name) ? this.props.location.params.name : 'Categorias'}</div>
        </div>
        <div className="cataloge__cont">
          <div id="openFilter" className={filterMobileOpen ? '' : 'active'} onClick={this.handleClickToggleFilter}>Abrir Filtros</div>
          <div className={filterMobileOpen ? 'cataloge__left active': 'cataloge__left'}>
            <SidebarFilter
              filterOpen={filterMobileOpen}
              handleClick={this.handleClickToggleFilter}
              regions={regions}
              params={this.props.location.params }
              changeRegion={this.handleChangeRegion}
              activities={available_filters.activities}
              changeActivity={this.handleChangeActivity}
              changeDay={this.handleChangeDay}
              days={available_filters.days}
              removeFilters={this.handleRemoveAllFilters}
              filters={filters}
              removeFilter={this.handleRemoveFilter}/>
          </div>
          <div className="cataloge__right">
            <BarFilterSort handleChange={this.handleChangeSort} />
            <div className="cataloge__list">
              {toursList && toursList.length > 0 && (
                toursList.map(item => {
                  return (
                    <div className="cataloge__item" key={item.id}>
                      <ItemCard {...item} />
                    </div>
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
