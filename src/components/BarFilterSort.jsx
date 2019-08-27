import React from 'react'

import '../assets/scss/components/BarFilterSort.scss'

const BarFilterSort = ({handleChange}) => (
  <div className="bar-filter">
    <div className="bar-filter__order">
      <h5 className="bar-filter__name">Ordenar por:</h5>
      <select className="bar-filter__select" onChange={(e) => {handleChange(e)}}>
        <option value="ultimos-paquetes">ultimos paquetes</option>
        <option value="mayor-precio">Precio (de Mayor a Menor)</option>
        <option value="menor-precio">Precio (de Menor a Mayor)</option>
      </select>
    </div>
  </div>
)

export default BarFilterSort