import React from 'react'
import './Calculator.css'
import imagenes from '../imagenes'

export default function Calculator() {
  return (
    <div className='content-calculator'>
      <div className='content-input-calculator'>
        <div className='content-input'>
          <label htmlFor="">DAY <br />
            <input type="number" />
          </label>
        </div>
        <div className='content-input'>
          <label htmlFor="">MONTH <br />
            <input type="number" />
          </label>
        </div>
        <div className='content-input'>
          <label htmlFor="">YEAR <br />
            <input type="number" />
          </label>
        </div>
        <div className='content-img-arrow'>
          <img src={imagenes["img-arrow"]} alt="" />
        </div>
      </div>
      <div className='result-calculator'>
        <h3><span></span> years</h3>
        <h3><span></span>months</h3>
        <h3><span></span>days</h3>
      </div>
    </div>
  )
}
