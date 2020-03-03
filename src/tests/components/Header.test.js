import React from "react";
import { shallow } from "enzyme";
import Header from "components/Header";

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header />);
  });

  it("should render Header component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain h1 element with text", () => {
    expect(wrapper.find("h1").text()).toEqual("Revolut");
  });

  it("should contain attribute that navigates to home page", () => {
    expect(wrapper.find("NavLink").prop("to")).toEqual("/");
  });
});
