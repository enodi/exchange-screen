const rateConverter = (amount, converter) => {
  return Math.round(amount * converter) / converter;
};

export default rateConverter;
