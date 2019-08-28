import React from 'react'
import FilteredBy from './FilteredBy';
import ContentFilter from './ContentFilter';

import '../assets/scss/components/SidebarFilter.scss'

const SidebarFilter = ({regions, activities, days, changeRegion, changeActivity, changeDay, params, filters, removeFilters, removeFilter, filterOpen, handleClick}) => (
  <div className="sidebar-filter">
    <div className="sidebar-filter__action" onClick={handleClick}>
      Cerrar Filtros
    </div>
    <FilteredBy data={{...filters}} removeFilters={removeFilters} removeFilter={removeFilter}/>
    {filters.region && filters.region.id ? null : (
      <ContentFilter type="selectbox" name="Regiones" items={regions} place="Seleccione una region" change={changeRegion} params={params} />
    )}
    {filters.activity && filters.activity.id ? null : (
      <ContentFilter type="selectbox" name="Actividades" place="Seleccione una actividad" items={activities} change={changeActivity} />
    )}
    {filters.days && filters.days.id ? null : (
      <ContentFilter type="selectbox" name="Días" items={days} place="Seleccione un dia" change={changeDay} />
    )}
  </div>
)

export default SidebarFilter