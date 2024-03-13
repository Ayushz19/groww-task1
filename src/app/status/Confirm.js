"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Confirm.css";

const Confirm = () => {
  const searchParams = useSearchParams();
  const [total, settotal] = useState(0);

  const [payment, setpayment] = useState([]);
  const [random, setRandom] = useState(0);
  useEffect(() => {
    settotal(searchParams.get("total"));
  }, [searchParams]);

  useEffect(() => setRandom(Math.random()), []);
  return (
    <div className="bg">
      <div className="card">
        <span className="card__success">
          <i className="ion-checkmark" />
        </span>
        {random <= 0.33 && (
          <>
            <span className="card__success">
              <i className="ion-checkmark" />
            </span>
            <h1 className="card__msg">Payment Complete</h1>
            <h2 className="card__submsg">Thank you for your transfer</h2>
            <div className="card__body">
              <div className="card__recipient-info">
                <p className="card__recipient">Nath Green</p>
                <p className="card__email">hello@nathgreen.co.uk</p>
              </div>
              <h1 className="card__price">
                <span>₹</span>
                {total.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </h1>
            </div>
            <div className="card__tags">
              <span className="card__tag">completed</span>
              <span className="card__tag">#123456789</span>
            </div>
          </>
        )}
        {random > 0.33 && random <= 0.66 && (
          <>
            <span className="card__success1 ">
              <i className="ion-checkmark" />
            </span>
            <h1 className="card__msg">Payment failed</h1>
            <h2 className="card__submsg">Sorry We could not process your payment</h2>
            <div className="card__body">
              <div className="card__recipient-info">
                <p className="card__recipient">Nath Green</p>
                <p className="card__email">hello@nathgreen.co.uk</p>
              </div>

            </div>
            <div className="card__tags">
              <span className="card__tag">Failed</span>
              <span className="card__tag">#123456789</span>
            </div>

          </>
        )}
        {random > 0.66 && (
          <>
          <span className="card__success2 ">
              <i className="ion-checkmark" />
            </span>
            <h1 className="card__msg">Payment pending</h1>
            <h1 className="font-bold">Your Payment is pending</h1>
            <h1 className="mx-100 px-10">Kindly Wait until we process your payment</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Confirm;
