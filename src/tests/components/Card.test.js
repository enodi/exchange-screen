import React from "react";
import { shallow } from "enzyme";
import Card from "components/Card";

describe("Card Component", () => {
  let wrapper;
  const children = <h1>Hello World</h1>;
  beforeEach(() => {
    wrapper = shallow(<Card>{children}</Card>);
  });

  it("should render Card component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders the Card children", () => {
    expect(wrapper.find("h1").text()).toEqual("Hello World");
  });
});
