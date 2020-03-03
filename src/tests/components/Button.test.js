import React from "react";
import { shallow } from "enzyme";
import Button from "components/Button";

describe("Button Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button text="Exchange" />);
  });

  it("should render Button component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the Button text", () => {
    expect(wrapper.find("button").text()).toEqual("Exchange");
  });
});
