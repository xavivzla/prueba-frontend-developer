import React from 'react'

import '../assets/scss/components/FilterBy.scss'

const FilteredBy = () => (
  <div className="filter-by">
    <div className="filter-by__cont">
      <h3 className="filter-by__title">Filtrado por:</h3>
      <ul className="filter-by__list">
        <li className="filter-by__item">
          <div className="filter-by__name">prueba derd</div>
          <i className="fal fa-times filter-by__remove" />
        </li>
      </ul>
    </div>
    <div className="filter-by__action">
      <i className="fal fa-times" />
        Borrar todo
    </div>
  </div>
)

export default FilteredBy
