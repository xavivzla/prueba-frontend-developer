import React from 'react'

import '../assets/scss/components/CheckboxItem.scss'

const CheckboxItem = ({name, value, id}) => (
  <li className="checkbox">
    <input type="checkbox" id={id} value={value} name={name} />
    <span className="checkbox__check" />
    <span className="checkbox__name">{name}</span>
  </li>
)

export default CheckboxItem