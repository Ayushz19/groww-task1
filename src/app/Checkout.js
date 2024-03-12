"use client"

import React from "react";
import styles from "./Checkout.css";
import { useState, useEffect } from "react";
import Link from 'next/link'

const Checkout = () => {
  const [total, settotal] = useState(0);

  const[payment, setpayment]=useState([]);

  const [products, setproducts] = useState([]);
  useEffect(() => {
    fetch("https://groww-intern-assignment.vercel.app/v1/api/order-details")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setproducts(data.products);
        setpayment(data.paymentMethods);
        var total = 0;
        for (let i of data.products) {
          total += i.price * i.quantity;
        }
        settotal(total);
      });
  }, []);

  return (
    <div className="Main">
      <main>
        <div className="basket">
          <div className="basket-module">
            <label htmlFor="promo-code">Enter a promotional code</label>
            <input
              id="promo-code"
              type="text"
              name="promo-code"
              maxLength={5}
              className="promo-code-field"
            />
            <button className="promo-code-cta">Apply</button>
          </div>
          <div className="basket-labels">
            <ul>
              <li className="item item-heading">Item</li>
              <li className="price">Price</li>
              <li className="quantity">Quantity</li>
              <li className="subtotal">Subtotal</li>
            </ul>
          </div>
          {products.map((e, i) => {
            return (
              <div className="basket-product"  key={i}>
                <div className="item">
                  <div className="product-image">
                    <img
                      src={e.image}
                      alt="Placholder Image 2"
                      className="product-frame"
                    />
                  </div>
                  <div className="product-details">
                    <h1>
                      <strong>
                        <span className="item-quantity">{e.quantity}</span>x{" "}
                        {e.title}
                      </strong>{" "}
                    </h1>
                  </div>
                </div>
                <div className="price">{e.price}</div>
                <div className="quantity">
                  <strong className="quantity-field">{e.quantity}</strong>
                </div>
                <div className="subtotal">{e.price * e.quantity}</div>
              </div>
            );
          })}
        </div>
        <aside>
          <div className="summary">
            <div className="summary-total-items">
              <span className="total-items" /> Items in your Bag
            </div>
            <div className="summary-subtotal">
              <div className="subtotal-title">Subtotal</div>
              <div className="subtotal-value final-value" id="basket-subtotal">
                {total.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className="summary-promo hide">
                <div className="promo-title">Promotion</div>
                <div className="promo-value final-value" id="basket-promo" />
              </div>
            </div>
            <div className="summary-delivery">
              <p>
                Order Amount :-{" "}
                <span>
                  {total.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </p>
              <p>
                Delivery Fee:- <span>10</span>
              </p>
              <p>
                Discount:- <span>10</span>
              </p>
            </div>
            <div className="summary-total">
              <div className="total-title">Total</div>
              <div className="total-value final-value" id="basket-total">
                {total.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
            <Link 
            href={{
                pathname:'/payment',
                query: {
                    total:total ,
                    paymentmethod:payment.join(',')
                }
            }}>
            <div className="summary-checkout">
              <button className="checkout-cta">Go to Secure Checkout</button>
            </div>
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Checkout;
