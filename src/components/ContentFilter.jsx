import React from 'react'

import CheckboxItem from './CheckboxItem'

import '../assets/scss/components/ContentFilter.scss'
import SelectBoxItem from './SelectBoxItem';

const ContentFilter = ({type, name, items, place, params}) => (
  <div className="filter-content">
    <div className="filter-content__header">
      <div className="filter-content__title">{name}</div>
    </div>
    {type === 'selectbox' && (
      <div className="filter-content__select">
        <SelectBoxItem items={items} place={place} params={params}/>
      </div>
    )}
    {type === 'checkbox' && type === 'radiobox' && (
      <div className="filter-content__list">
        {items && items.length > 0 && (
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
        )}
      </div>
    )}
  </div>
)

export default ContentFilter