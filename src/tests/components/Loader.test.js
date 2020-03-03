import React from "react";
import { shallow } from "enzyme";
import Loader from "components/Loader";

describe("Loader Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Loader />);
  });

  it("should render Loader component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
