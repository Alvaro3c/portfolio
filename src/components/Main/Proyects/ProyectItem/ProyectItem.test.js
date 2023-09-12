import React from "react";
import { shallow } from "enzyme";
import ProyectItem from "./ProyectItem";

describe("ProyectItem", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProyectItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
