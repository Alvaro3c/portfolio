import React from "react";
import { shallow } from "enzyme";
import Heading from "./Heading";

describe("Heading", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper).toMatchSnapshot();
  });
});
