import React from "react";

import Card from "./Card";
import Button from "./Button";

const TargetScreen = () => (
  <>
    <Card>
      <h1 className="text">Set Target</h1>
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
        <Button text="Set Target" color="pink" size="large" />
      </form>
    </Card>
  </>
);

export default TargetScreen;
