import React from "react";

import Card from "./Card";
import Button from "./Button";
import ExchangeButton from "./ExchangeButton";

export const ExchangeScreen = () => (
  <>
    <Card>
      <h1 className="text">Exchange</h1>
      <form>
        <div className="top-section">
          <div>
            <select className="pocket">
              <option value="gbp">GBP</option>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
            <span>Balance</span>
          </div>
          <input type="number" placeholder="0" required />
        </div>
        <div className="middle-section">
          <ExchangeButton />
          <div className="exchange-rate">
            <span>1.23</span>
          </div>
          <Button text="Set target" color="blue" size="medium" />
        </div>
        <div className="bottom-section">
          <div>
            <select className="pocket">
              <option value="gbp">GBP</option>
              <option value="eur">EUR</option>
              <option value="usd">USD</option>
            </select>
            <span>Balance</span>
          </div>
          <input type="number" placeholder="0" required />
        </div>
        <Button text="Exchange" color="pink" size="large" />
      </form>
    </Card>
  </>
);

export default ExchangeScreen;
