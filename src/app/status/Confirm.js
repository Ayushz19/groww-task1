"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Confirm.css";

const Confirm = () => {
  const searchParams = useSearchParams();
  const [total, settotal] = useState(0);

 
  const [random, setRandom] = useState(0);
  useEffect(() => {
    settotal(searchParams.get("total"));
  }, [searchParams]);

  useEffect(() => setRandom(Math.random()), []);
  return (
    <div className="bg">
      <div className="card">
        {/* <span className="card__success">
          <i className="ion-checkmark" />
        </span> */}
        {random <= 0.33 && (
          <>
            <span className="card__success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={100}
                height={100}
                viewBox="0,0,256,256"
                style={{ fill: "#FFFFFF" }}
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth={1}
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit={10}
                  strokeDasharray=""
                  strokeDashoffset={0}
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M41.9375,8.625c-0.66406,0.02344 -1.27344,0.375 -1.625,0.9375l-18.8125,28.78125l-12.1875,-10.53125c-0.52344,-0.54297 -1.30859,-0.74609 -2.03125,-0.51953c-0.71875,0.22266 -1.25391,0.83203 -1.37891,1.57422c-0.125,0.74609 0.17578,1.49609 0.78516,1.94531l13.9375,12.0625c0.4375,0.37109 1.01563,0.53516 1.58203,0.45313c0.57031,-0.08594 1.07422,-0.41016 1.38672,-0.89062l20.09375,-30.6875c0.42969,-0.62891 0.46484,-1.44141 0.09375,-2.10547c-0.37109,-0.66016 -1.08594,-1.05469 -1.84375,-1.01953z" />
                  </g>
                </g>
              </svg>
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
                <span className="">
                {Number(total).toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
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
              <svg
                viewBox="0 0 21 21"
                fill="#FFFFFF"
                height="1em"
                width="1em"
                className="flex mx-5 my-5"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                </g>
              </svg>
            </span>
            <h1 className="card__msg">Payment failed</h1>
            <h2 className="card__submsg">
              Sorry We could not process your payment
            </h2>
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
              <i className="ion-checkmark" /> <p className="text-[4rem] text-white">!</p>
            </span>
            <h1 className="card__msg">Payment pending</h1>
            <h1 className="font-bold">Your Payment is pending</h1>
            <h1 className="mx-100 px-10">
              Kindly Wait until we process your payment
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Confirm;
