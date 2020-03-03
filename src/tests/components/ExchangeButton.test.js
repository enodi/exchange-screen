import React from "react";
import { shallow } from "enzyme";
import ExchangeButton from "components/ExchangeButton";

describe("ExchangeButton Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ExchangeButton />);
  });

  it("should render ExchangeButton component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render image read-only text", () => {
    expect(wrapper.find(".sr-only").text()).toEqual(
      "Click the Swap Currencies"
    );
  });
});
