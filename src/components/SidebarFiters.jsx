import React from 'react'
import FilteredBy from './FilteredBy';
import ContentFilter from './ContentFilter';

import '../assets/scss/components/SidebarFilter.scss'

const SidebarFilter = ({regions, changeRegion, params}) => (
  <div className="sidebar-filter">
    {console.log('params', params)}
    <FilteredBy />
    <ContentFilter type="selectbox" name="Regiones" items={regions} place="Seleccione una region" changeRegion={changeRegion} params={params} />
    <ContentFilter type="selectbox" name="Actividades" place="Seleccione una actividad" />
    <ContentFilter type="selectbox" name="Días" place="Seleccione un dia" />
  </div>
)

export default SidebarFilter