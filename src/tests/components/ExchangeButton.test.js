import React from "react";
import { shallow } from "enzyme";
import ExchangeButton from "components/ExchangeButton";

describe("ExchangeButton Component", () => {
  let wrapper, swapPocketCurrencies;
  beforeEach(() => {
    swapPocketCurrencies = jest.fn();
    wrapper = shallow(
      <ExchangeButton swapPocketCurrencies={swapPocketCurrencies} />
    );
  });

  it("should render ExchangeButton component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render image read-only text", () => {
    expect(wrapper.find(".sr-only").text()).toEqual(
      "Click the Swap Currencies"
    );
  });

  test("should call swapPocketCurrencies on button click", () => {
    wrapper.find("button").simulate("click");
    expect(swapPocketCurrencies).toHaveBeenCalled();
  });
});
