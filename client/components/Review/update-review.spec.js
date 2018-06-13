/* global describe beforeEach it */

import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { UpdateReview } from "./UpdateReview";

const adapter = new Adapter();
Enzyme.configure({ adapter });

describe("UpdateReview", () => {
  let updateReview;

  // beforeEach(() => {
  //   updateReview = shallow(
  //     <UpdateReview
  //       handleUpdateToggle={this.handleUpdateToggle}
  //       review={review}
  //     />
  //   );
  // });

  // it("has a `title` field initialized to be an empty string", () => {
  //   expect(updateReview.state().title).to.be.an("string");
  // });

  // //
  // // has methods
  // //

  // it("has a method called `handleChange`, which takes an event target name and sets its event targer value on state", () => {
  //   const review = {
  //     title: "the title",
  //     description: "this is the description",
  //     rating: 2,
  //     id: 1,
  //     pokemonId: 3
  //   };

  //   expect(updateReview.instance().handleChange).to.be.function;

  //   expect(updateReview.state().description).to.be.deep.equal(
  //     "this is the description"
  //   );
  // });
  // // })

  // it("binds the `handleChange` method to the context of the component", () => {
  //   expect(updateReview.instance().handleChange.hasOwnProperty("prototype")).to
  //     .be.false;
  // });

  // //
  // // renders components
  // //

  // it("renders the title in an input tag", () => {
  //   const review = { title: "Review Title" };
  //   updateReview.setState({ handleChange: review });

  //   expect(
  //     updateReview
  //       .find("input")
  //       .text()
  //       .trim()
  //   ).to.be.equal("Review Title");
  // });
});
