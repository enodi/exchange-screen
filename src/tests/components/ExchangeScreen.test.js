import React from "react";
import { shallow } from "enzyme";
import { ExchangeScreen } from "components/ExchangeScreen";
import rateConverter from "helpers/converter";

describe("ExchangeScreen Component", () => {
  let wrapper, getExchangeRate, exchangeRate;
  beforeEach(() => {
    getExchangeRate = jest.fn();
    exchangeRate = { source: 1, target: 1.1492931847 };
    wrapper = shallow(
      <ExchangeScreen
        exchangeRate={exchangeRate}
        getExchangeRate={getExchangeRate}
      />
    );
  });

  it("should render ExchangeScreen component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain h1 element with text", () => {
    expect(wrapper.find("h1").text()).toEqual("Exchange Screen");
  });

  it("should contain currencies in each pocket", () => {
    expect(
      wrapper
        .find("select")
        .at(0)
        .prop("value")
    ).toEqual("GBP");
    expect(
      wrapper
        .find("select")
        .at(1)
        .prop("value")
    ).toEqual("EUR");
  });

  it("should contain pocket balance", () => {
    expect(
      wrapper
        .find("span")
        .at(0)
        .text()
    ).toEqual("Balance: £1000");
    expect(
      wrapper
        .find("span")
        .at(2)
        .text()
    ).toEqual("Balance: €700");
  });

  it("should set amount if valid input", () => {
    const value = "23.5";
    const target = rateConverter(value * exchangeRate.target, 100);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: { value }
      });
    expect(wrapper.state().source.amount).toEqual(value);
    expect(wrapper.state().target.amount).toEqual(target);
  });

  it("should disable exchange button if amount specified is more than pocket balance", () => {
    const value = "1200";
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: { value }
      });
    expect(
      wrapper
        .find("span")
        .at(0)
        .hasClass("error")
    ).toEqual(true);
  });

  it("should handle onSubmit", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {}
    });
    expect(getExchangeRate).toHaveBeenCalled();
  });
});
