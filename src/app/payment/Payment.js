"use client";
import { useSearchParams } from "next/navigation";
import ToggleButton from "@mui/material/ToggleButton";

import styles from "./Payment.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const Payment = () => {
  const searchParams = useSearchParams();
  const [total, settotal] = useState(0);

  const [payment, setpayment] = useState([]);
  useEffect(() => {
    settotal(searchParams.get("total"));
    setpayment(searchParams.get("paymentmethod").split(","));
  }, [searchParams]);

  const [selected, setSelected] = useState(0);

  console.log(searchParams.get("paymentmethod"));
  return (
    <div>
      <article className="card">
        <div className="container">
          <div className="card-title">
            <h2 className="text-xl ">
              Payment Total:{" "}
              <span className="font-extrabold text-[28px] text-green-300">
                ₹{" "}
                {total.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </h2>
          </div>
          <div className="card-body">
            <div className="payment-type">
              <h4>Choose payment method below</h4>

              <div className="types flex gap-8">
                {payment.map((e, i) => (
                  <div className="type selected" key={i}>
                    <div className="text">
                      <ToggleButton
                        selected={selected == i}
                        onChange={() => {
                          setSelected(i);
                        }}
                      >
                        {" "}
                        <p>{e}</p>
                      </ToggleButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="payment-info flex justify-space-between">
              <div className="column billing">
                <div className="title">
                  <div className="num">1</div>
                  <h4>Billing Info</h4>
                </div>
                <div className="field full">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Full Name" />
                </div>
                <div className="field full">
                  <label htmlFor="address">Billing Address</label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Billing Address"
                  />
                </div>
                <div className="flex justify-space-between">
                  <div className="field half">
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" placeholder="City" />
                  </div>
                  <div className="field half">
                    <label htmlFor="state">State</label>
                    <input id="state" type="text" placeholder="State" />
                  </div>
                </div>
                <div className="field full">
                  <label htmlFor="zip">Zip</label>
                  <input id="zip" type="text" placeholder="Zip" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-actions flex justify-space-between">
            <div className="flex-start">
              <button className="button button-secondary">
                Return to Store
              </button>
            </div>
            <div className="twobtn flex-end">
              <button className="button button-link">Back to Shipping</button>
              <Link
                href={{
                  pathname: "/status",
                  query: {
                    total: total,
                  },
                }}
              >
                {" "}
                <button className="button button-primary">Proceed</button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Payment;
