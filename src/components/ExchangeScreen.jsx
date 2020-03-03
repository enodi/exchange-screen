import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import Card from "./Card";
import Button from "./Button";
import ExchangeButton from "./ExchangeButton";
import { fetchExchangeRate } from "actions/exchange-rate";

class ExchangeScreen extends React.Component {
  state = {
    disabled: true,
    exchange: false,
    source: {
      value: "GBP",
      amount: "",
      pocket: [
        {
          currency: "GBP",
          symbol: "£",
          balance: 1000
        },
        {
          currency: "EUR",
          symbol: "€",
          balance: 700
        },
        {
          currency: "USD",
          symbol: "$",
          balance: 500
        },
        {
          currency: "JPY",
          symbol: "¥",
          balance: 1200
        }
      ]
    },
    target: {
      value: "EUR",
      amount: "",
      pocket: [
        {
          currency: "GBP",
          symbol: "£",
          balance: 1000
        },
        {
          currency: "EUR",
          symbol: "€",
          balance: 700
        },
        {
          currency: "USD",
          symbol: "$",
          balance: 500
        },
        {
          currency: "JPY",
          symbol: "¥",
          balance: 1200
        }
      ]
    }
  };

  getExchangeRates = () => {
    const {
      source: { value: initialSourceCurrency },
      target: { value: initialTargetCurrency }
    } = this.state;
    this.props.getExchangeRate({
      source: initialSourceCurrency,
      target: initialTargetCurrency
    });
  };

  componentDidMount() {
    this.getExchangeRates();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.getExchangeRates();
    }
  }

  sourcePocketChange = event => {
    const source = { ...this.state.source };
    source.value = event.target.value;
    this.setState({ source });
  };

  targetPocketChange = event => {
    const target = { ...this.state.target };
    target.value = event.target.value;
    this.setState({ target });
  };

  sourceInputChange = event => {
    const { target, source } = this.props.exchangeRate;
    const { value } = event.target;
    const sourcePocket = { ...this.state.source };
    const targetPocket = { ...this.state.target };

    sourcePocket.amount = value;
    if (value.length > 0) {
      this.setState(() => ({ disabled: false }));
      this.setState(() => ({ exchange: true }));
      console.log(sourcePocket.value, "hahah");
      targetPocket.amount =
        sourcePocket.value === "EUR"
          ? this.rateConverter(value * source, 100)
          : this.rateConverter(value * target, 100);
    } else {
      this.setState(() => ({ disabled: true }));
      targetPocket.amount = "";
    }

    this.setState({ source: sourcePocket });
    this.setState({ target: targetPocket });
  };

  targetInputChange = event => {
    const { target, source } = this.props.exchangeRate;
    const { value } = event.target;
    const sourcePocket = { ...this.state.source };
    const targetPocket = { ...this.state.target };

    targetPocket.amount = value;
    if (value.length > 0) {
      this.setState(() => ({ disabled: false }));
      this.setState(() => ({ exchange: false }));
      sourcePocket.amount =
        sourcePocket.value === "EUR"
          ? this.rateConverter(value / source, 100)
          : this.rateConverter(value / target, 100);
    } else {
      this.setState(() => ({ disabled: true }));
      sourcePocket.amount = "";
    }
    this.setState({ target: targetPocket });
    this.setState({ source: sourcePocket });
  };

  handleExchange = event => {
    event.preventDefault();
    const { exchange } = this.state;
    const sourcePocket = { ...this.state.source };
    const targetPocket = { ...this.state.target };
    let sourceArr = [];
    let targetArr = [];

    if (exchange) {
      sourcePocket.pocket.map(item => {
        if (item.currency === sourcePocket.value) {
          item.balance = item.balance - sourcePocket.amount;
        }
        sourceArr.push(item);
        sourcePocket.pocket = sourceArr;
      });
      targetPocket.pocket.map(item => {
        if (item.currency === targetPocket.value) {
          item.balance = item.balance + targetPocket.amount;
        }
        targetArr.push(item);
        targetPocket.pocket = targetArr;
      });

      sourcePocket.amount = "";
      targetPocket.amount = "";
      this.setState({ source: sourcePocket });
      this.setState({ target: targetPocket });
      this.setState(() => ({ disabled: true }));
    } else {
      sourcePocket.pocket.map(item => {
        if (item.currency === sourcePocket.value) {
          item.balance = item.balance + sourcePocket.amount;
        }
        sourceArr.push(item);
        sourcePocket.pocket = sourceArr;
      });
      targetPocket.pocket.map(item => {
        if (item.currency === targetPocket.value) {
          item.balance = item.balance - targetPocket.amount;
        }
        targetArr.push(item);
        targetPocket.pocket = targetArr;
      });

      sourcePocket.amount = "";
      targetPocket.amount = "";
      this.setState({ source: sourcePocket });
      this.setState({ target: targetPocket });
      this.setState(() => ({ disabled: true }));
    }
  };

  retrievePocketSymbol = (pocket, value) => {
    const selectedPocket = pocket.filter(item => item.currency === value);
    return selectedPocket[0].symbol;
  };

  retrievePocketCurrency = pocket => {
    return pocket.map(({ currency }) => currency);
  };

  retrievePocketBalance = (pocket, value) => {
    const itemsInPocket = pocket.filter(item => item.currency === value);
    return `${itemsInPocket[0].symbol}${this.rateConverter(
      itemsInPocket[0].balance,
      100
    )}`;
  };

  rateConverter = (amount, converter) => {
    return Math.round(amount * converter) / converter;
  };

  render() {
    const { source, target } = this.props.exchangeRate;
    const {
      source: {
        value: sourceValue,
        pocket: sourcePocket,
        amount: sourceAmount
      },
      target: {
        value: targetValue,
        pocket: targetPocket,
        amount: targetAmount
      },
      disabled
    } = this.state;

    return (
      <>
        <Card>
          <h1 className="text">Exchange Screen</h1>
          <form onSubmit={this.handleExchange}>
            <div className="top-section">
              <div>
                <select
                  className="pocket"
                  value={sourceValue}
                  onChange={this.sourcePocketChange}
                >
                  {sourcePocket &&
                    this.retrievePocketCurrency(sourcePocket)
                      .filter(currency => currency !== targetValue)
                      .map((currency, index) => {
                        return (
                          <option
                            value={currency}
                            key={`pocket-currency-${index}`}
                          >
                            {currency}
                          </option>
                        );
                      })}
                </select>
                <span>{`Balance: ${this.retrievePocketBalance(
                  sourcePocket,
                  sourceValue
                )}`}</span>
              </div>
              <input
                type="number"
                placeholder="0.00"
                required
                onChange={this.sourceInputChange}
                value={sourceAmount}
              />
            </div>
            <div className="middle-section">
              <div className="inner-section">
                <ExchangeButton />
                <div className="exchange-rate">
                  <span>
                    {source
                      ? `${this.retrievePocketSymbol(
                          sourcePocket,
                          sourceValue
                        )}${this.rateConverter(source, 10000)}`
                      : "0"}{" "}
                    ={" "}
                    {target
                      ? `${this.retrievePocketSymbol(
                          targetPocket,
                          targetValue
                        )}${this.rateConverter(target, 10000)}`
                      : "0"}
                  </span>
                </div>
                <NavLink to="/target">
                  <Button text="Set target" color="blue" size="medium" />
                </NavLink>
              </div>
            </div>
            <div className="bottom-section">
              <div>
                <select
                  className="pocket"
                  value={targetValue}
                  onChange={this.targetPocketChange}
                >
                  {targetPocket &&
                    this.retrievePocketCurrency(targetPocket)
                      .filter(currency => currency !== sourceValue)
                      .map((currency, index) => {
                        return (
                          <option
                            value={currency}
                            key={`pocket-currency-${index}`}
                          >
                            {currency}
                          </option>
                        );
                      })}
                </select>
                <span>{`Balance: ${this.retrievePocketBalance(
                  targetPocket,
                  targetValue
                )}`}</span>
              </div>
              <input
                type="number"
                placeholder="0.00"
                required
                onChange={this.targetInputChange}
                value={targetAmount}
              />
            </div>
            <Button
              text="Exchange"
              color="pink"
              size="large"
              disabled={disabled}
            />
          </form>
        </Card>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getExchangeRate: data => dispatch(fetchExchangeRate(data))
});

const mapStateToProps = state => ({
  exchangeRate: state.rates
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeScreen);
