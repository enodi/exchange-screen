const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case "EXCHANGE_RATE":
      return { ...state, ...action.payload };
    case "EXCHANGE_ERROR":
      return {
        ...state,
        error: action.payload.error
      };
    default:
      return state;
  }
};
