import React from 'react'

import CheckboxItem from './CheckboxItem'

import '../assets/scss/components/ContentFilter.scss'

const ContentFilter = ({type, name, items}) => (
  <div className="filter-content">
    <div className="filter-content__header">
      <div className="filter-content__title">{name}</div>
    </div>
    <div className="filter-content__list">
      {
        // eslint-disable-next-line react/prop-types
        items.map((item) => {
          if(type === 'checkbox') {

           return (
             <div className="filter-content__item">
               <CheckboxItem name={item.name} value={item.value} id="dd" />
             </div>
           )
          }
          return null
        })
      }
    </div>
  </div>
)

export default ContentFilter