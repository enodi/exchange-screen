import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import Card from "./Card";
import Button from "./Button";
import ExchangeButton from "./ExchangeButton";
import { fetchExchangeRate } from "actions/exchange-rate";

class ExchangeScreen extends React.Component {
  state = {
    source: {
      value: "GBP",
      pocketCurrencies: ["GBP", "EUR", "USD", "JPY"],
      pockets: [
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
          balance: 1000
        }
      ]
    },
    target: {
      value: "EUR",
      pocketCurrencies: ["GBP", "EUR", "USD", "JPY"],
      pockets: [
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
          balance: 1000
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

  handleSourceChange = event => {
    const source = { ...this.state.source };
    source.value = event.target.value;
    this.setState({ source });
  };

  handleTargetChange = event => {
    const target = { ...this.state.target };
    target.value = event.target.value;
    this.setState({ target });
  };

  getSourceSymbol = () => {
    const { value, pockets } = this.state.source;
    const selectedPocket = pockets.filter(pocket => pocket.currency === value);
    return selectedPocket[0].symbol;
  };

  getTargetSymbol = () => {
    const { value, pockets } = this.state.target;
    const selectedPocket = pockets.filter(pocket => pocket.currency === value);
    return selectedPocket[0].symbol;
  };

  render() {
    const { source, target } = this.props.exchangeRate;
    const CONVERTER = 1000;
    const {
      source: { value: sourceValue, pocketCurrencies: sourcePocket },
      target: { value: targetValue, pocketCurrencies: targetPocket }
    } = this.state;

    return (
      <>
        <Card>
          <h1 className="text">Exchange Screen</h1>
          <form>
            <div className="top-section">
              <div>
                <select
                  className="pocket"
                  value={sourceValue}
                  onChange={this.handleSourceChange}
                >
                  {sourcePocket &&
                    sourcePocket
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
                <span>Balance</span>
              </div>
              <input type="number" placeholder="0.00" required />
            </div>
            <div className="middle-section">
              <div className="inner-section">
                <ExchangeButton />
                <div className="exchange-rate">
                  <span>
                    {source
                      ? `${this.getSourceSymbol()}${Math.round(
                          source * CONVERTER
                        ) / CONVERTER}`
                      : 0}{" "}
                    ={" "}
                    {target
                      ? `${this.getTargetSymbol()}${Math.round(
                          target * CONVERTER
                        ) / CONVERTER}`
                      : 0}
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
                  onChange={this.handleTargetChange}
                >
                  {targetPocket &&
                    targetPocket
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
                <span>Balance</span>
              </div>
              <input type="number" placeholder="0.00" required />
            </div>
            <Button text="Exchange" color="pink" size="large" />
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
