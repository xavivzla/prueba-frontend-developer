import React, { Fragment } from 'react'

import '../assets/scss/components/FilterBy.scss'


const FilteredBy = (props) => {
  const addFilter = () => {
    let item = []
    for (let i in props.data) {
      if(props.data[i] && props.data[i].id){
        item.push(
          <li className="filter-by__item" key={props.data[i].id}>
            <div className="filter-by__name">{props.data[i].name}</div>
            <i className="fal fa-times filter-by__remove" onClick={props.removeFilter} data-name={i} />
          </li>
        )
      }
    }
    return item
  }

  return (
    <Fragment>
      {(props.data.region && props.data.region.id || props.data.activity && props.data.activity.id || props.data.days && props.data.days_id) && (
          <div className="filter-by">
            <div className="filter-by__cont">
              <h3 className="filter-by__title">Filtrado por:</h3>
              <ul className="filter-by__list">
                {addFilter()}
              </ul>
            </div>
            <div className="filter-by__action" onClick={props.removeFilters}>
              <i className="fal fa-times" />
                Borrar todo
            </div>
          </div>
        )}
    </Fragment>

  )
}

export default FilteredBy
