import exchangeReducer from "reducers/exchange-rate";

describe("Exchange Reducer", () => {
  it("should setup default rate values", () => {
    const state = exchangeReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({});
  });

  it("should list rates", () => {
    const exchangeRate = { source: 1, target: 1.1492931847 };
    const action = {
      type: "EXCHANGE_RATE",
      payload: exchangeRate
    };
    const state = exchangeReducer({}, action);
    expect(state).toEqual(exchangeRate);
  });
});
