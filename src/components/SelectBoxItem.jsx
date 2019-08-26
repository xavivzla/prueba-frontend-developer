import React from 'react'

import '../assets/scss/components/Selectbox.scss'

const SelectBoxItem = (props) => (

  <select name="" id="" className="selectbox">
    <option>{props.place}</option>
    {props.items && props.items.length > 0 && (
      props.items.map( item => <option value={item.id}>{item.name}</option>)
    )}
  </select>
)

export default SelectBoxItem