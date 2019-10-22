import { shallow } from "enzyme";
import React from "react";
import { Example } from "../Example";

const getWrapper = (): ReturnType<typeof shallow> => shallow(<Example />);

describe("Example", () => {
  it("exists", () => {
    expect(Example).toBeDefined();
  });

  it("renders a div", () => {
    expect(getWrapper().find("div")).toHaveLength(1);
  });

  it("renders example text into the div", () => {
    expect(
      getWrapper()
        .find("div")
        .text()
    ).toEqual("Example component");
  });
});
