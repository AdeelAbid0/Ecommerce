const Formatprice = ({ price }) => {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price / 100);
};

export default Formatprice;
