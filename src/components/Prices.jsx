import React from 'react'
import './Prices.css'

const Prices = ({price, rate}) => {
  return (
    <div className='pricesContainer'>
        <h2>{price}</h2>
        <h3>{rate} ACCESS</h3>
        <p>20/52</p>
    </div>
  )
}

export default Prices