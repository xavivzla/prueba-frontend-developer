import React from 'react'

import '../assets/scss/components/Selectbox.scss'

const SelectBoxItem = (props) => (

  <select name="" id="" className="selectbox">
    <option>{props.place}</option>
    {console.log(props)}
    {props.items && props.items.length > 0 && (
      props.items.map( item => {
        if(props.params && props.params.id === item.id){
          return <option value={item.id} selected>{item.name}</option>
        }else{
          return <option value={item.id}>{item.name}</option>
        }
      })
    )}
  </select>
)

export default SelectBoxItem