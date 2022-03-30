const Coin = (props) => {
  const {
    idx,
    image,
    name,
    symbol,
    price,
    volume,
    priceChange,
    marketcap,
    coinsRank
  } = props;
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <span className="coin-idx">{idx}</span>
          <img src={image} alt="crypto logo" />
          <div className="coin-desc">
            <div className="coin-symbol">{symbol}</div>
            <div className="coin-id">{name}</div>
          </div>
        </div>
        <div className="coin-data">
          <p className="coin-price data-center">${price.toLocaleString()}</p>
          <p className="coin-volume data-center">${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red data-center">
              {priceChange.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green data-center">
              {priceChange.toFixed(2)}%
            </p>
          )}
          <p className="coin-marketcap data-center">
            ${marketcap.toLocaleString()}
          </p>
          <p className="last-seven-days">
            <img
              className="text-center"
              src={coinsRank + "sparkline"}
              srcSet={coinsRank + "sparkline 1x"}
              height="35"
              alt="coin"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
