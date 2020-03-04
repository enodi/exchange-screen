import { exchangeRate } from "actions/exchange-rate";

describe("Exchange Action", () => {
  it("should setup list single shipment action object", () => {
    const exchange = { source: 1, target: 1.1492931847 };
    const action = exchangeRate(exchange);
    expect(action).toEqual({
      type: "EXCHANGE_RATE",
      payload: exchange
    });
  });
});
