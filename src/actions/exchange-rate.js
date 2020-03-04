import { Api as api } from "helpers/utils";

export const exchangeRate = data => ({
  type: "EXCHANGE_RATE",
  payload: data
});

export const fetchExchangeRate = ({ source, target }) => {
  return dispatch => {
    let response;
    if (source === "EUR") {
      response = api.get(`/symbols=${source}&base=${target}`);
    } else {
      response = api.get(`/symbols=${target}&base=${source}`);
    }
    return response
      .then(response =>
        dispatch(
          exchangeRate({
            source: response.data.rates[source],
            target: response.data.rates[target]
          })
        )
      )
      .catch(error =>
        dispatch({
          type: "EXCHANGE_ERROR",
          payload: error
        })
      );
  };
};
