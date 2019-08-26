import React from 'react'
import FilteredBy from './FilteredBy';
import ContentFilter from './ContentFilter';

import '../assets/scss/components/SidebarFilter.scss'

const SidebarFilter = ({regions}) => (
  <div className="sidebar-filter">
    <FilteredBy />
    <ContentFilter type="selectbox" name="Regiones" items={regions} place="Seleccione una region" />
    <ContentFilter type="selectbox" name="Actividades" place="Seleccione una actividad" />
    <ContentFilter type="selectbox" name="Días" place="Seleccione un dia" />
  </div>
)

export default SidebarFilter