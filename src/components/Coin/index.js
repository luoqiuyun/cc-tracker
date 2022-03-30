const Coin = ({ idx, coin }) => {
  const {
    image,
    name,
    symbol,
    current_price: price,
    total_volume: volume,
    price_change_percentage_24h: priceChange,
    market_cap: marketcap,
    market_cap_rank
  } = coin;

  const coinsRank = "https://www.coingecko.com/coins/" + market_cap_rank + "/";

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
