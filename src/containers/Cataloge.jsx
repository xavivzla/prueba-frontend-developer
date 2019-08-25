import React from 'react'
import SidebarFilter from '../components/SidebarFiters';
import ItemCard from '../components/ItemCard';

import '../assets/scss/components/Cataloge.scss'

const Cataloge = () => (
  <div className="cataloge">
    <div className="cataloge__cont">
      <div className="cataloge__left">
        <SidebarFilter />
      </div>
      <div className="cataloge__right">
        <div className="cataloge__list">
          {[1,2,3,4,5,6,7].map(item => (
            <div className="cataloge__item">
              <ItemCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)


export default Cataloge