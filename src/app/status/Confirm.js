"use client";

import React from 'react'
import styles from './Confirm.css'

const Confirm = () => {
  return (
    <div className="bg">
        <div className="card">
          <span className="card__success"><i className="ion-checkmark" /></span>
          <h1 className="card__msg">Payment Complete</h1>
          <h2 className="card__submsg">Thank you for your transfer</h2>
          <div className="card__body">
            
            <div className="card__recipient-info">
              <p className="card__recipient">Nath Green</p>
              <p className="card__email">hello@nathgreen.co.uk</p>
            </div>
            <h1 className="card__price"><span>£</span>20<span>.00</span></h1>
            <p className="card__method">Payment method</p>
            <div className="card__payment">
              <img src="https://seeklogo.com/images/V/VISA-logo-F3440F512B-seeklogo.com.png" className="card__credit-card" />
              <div className="card__card-details">
                <p className="card__card-type">Credit / debit card</p>
                <p className="card__card-number">Visa ending in **89</p>          
              </div>
            </div>
          </div>
          <div className="card__tags">
            <span className="card__tag">completed</span>
            <span className="card__tag">#123456789</span>        
          </div>
        </div>
      </div>

  )
}

export default Confirm