import React from 'react'

import '../assets/scss/components/Spinner.scss'

import Logo from '../assets/static/img/turismoi.png'

const Spinner = () => (
  <div className="spinner">
    <img src={Logo} className="spinner__image" alt="logo" />
  </div>
)

export default Spinner
