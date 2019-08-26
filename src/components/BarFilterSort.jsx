import React from 'react'

import '../assets/scss/components/BarFilterSort.scss'

const BarFilterSort = () => (
  <div className="bar-filter">
    <div className="bar-filter__order">
      <h5 className="bar-filter__name">Ordenar por:</h5>
      <select className="bar-filter__select">
        <option value="asc">Nombre (A-Z)</option>
        <option value="desc">Nombre (Z-A)</option>
        <option value="mayor">Precio (de Mayor a Menor)</option>
        <option value="menor">Precio (de Menor a Mayor)</option>
      </select>
    </div>
  </div>
)

export default BarFilterSort