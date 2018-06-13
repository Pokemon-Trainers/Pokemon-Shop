/* global describe beforeEach it */

const { expect } = require("chai");
const db = require("../index");
const OrderItems = db.model("orderItem");

describe("OrderItem model", () => {
  // beforeEach(() => {
  //   return db.sync({ force: true });
  // });
  // describe("checkingOrderItemModel and Validations", () => {
  //   // beforeEach(() => db.sync({ force: true }));
  //   it("has a quantity", async () => {
  //     const orderItem = await OrderItems.create({
  //       qty: 2
  //     });
  //     expect(orderItem.qty).to.equal(1);
  //   });
  //   it("number is required", async () => {
  //     const orderItem = await OrderItems.build();
  //     return orderItem.validate().then(
  //       () => {
  //         throw new Error("Validation should have failed!");
  //       },
  //       err => {
  //         expect(err).to.be.an("error");
  //       }
  //     );
  //   });
  // }); // end describe('User model')
});
