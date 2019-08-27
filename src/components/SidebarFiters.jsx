import React from 'react'
import FilteredBy from './FilteredBy';
import ContentFilter from './ContentFilter';

import '../assets/scss/components/SidebarFilter.scss'

const SidebarFilter = ({regions, activities, days, changeRegion, params}) => (
  <div className="sidebar-filter">
    <FilteredBy />
    <ContentFilter type="selectbox" name="Regiones" items={regions} place="Seleccione una region" changeRegion={changeRegion} params={params} />
    <ContentFilter type="selectbox" name="Actividades" place="Seleccione una actividad" items={activities} />
    <ContentFilter type="selectbox" name="Días" items={days} place="Seleccione un dia" />
  </div>
)

export default SidebarFilter