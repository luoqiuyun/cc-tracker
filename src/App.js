import React, { useState, useEffect } from "react";
import axios from "axios";

import Coin from "./components/Coin";
import ColTitleRow from "./components/ColTitleRow";
import PageNav from "./components/PageNav";
import Search from "./components/Search";
import SelectPageSize from "./components/SelectPageSize";

import "./styles.css";

const App = () => {
  const [tick, setTick] = useState(0);
  const [page, setPage] = useState(1);
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const pageSizes = ["10", "50", "100", "All"];
  const columnName = [
    "coin",
    "",
    "price",
    "volume",
    "change",
    "market cap",
    "Last 7 Days"
  ];

  useEffect(() => {
    let url = "https://api.coingecko.com/api/v3/coins/markets";
    url +=
      "?vs_currency=usd&order=market_cap_desc&sparkline=true&price_change_percentage=7d&";
    url +=
      pageSize === "All"
        ? "per_page=250&page=1"
        : "per_page=" + pageSize + "&page=" + page;
    axios
      .get(url)
      .then((res) => setCoins(res.data))
      .catch((error) => console.log(error));
    const s = setInterval(() => setTick((c) => c + 1), 60000);
    return () => clearInterval(s);
  }, [tick, page, pageSize]);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <p className="time-tick">
        Last Updated @ {new Date().toLocaleTimeString().replace(/:\d+ /, " ")}
      </p>
      <Search setSearch={setSearch} />
      <ColTitleRow cols={columnName} />
      {filteredCoins.map((coin, index) => {
        return (
          <Coin
            key={coin.id}
            coin={coin}
            idx={(page - 1) * (pageSize === "All" ? 0 : pageSize) + index + 1}
          />
        );
      })}
      <div className="pagination">
        <SelectPageSize
          pageSize={pageSize}
          setPageSize={setPageSize}
          setPage={setPage}
          sizes={pageSizes}
        />
        <PageNav page={page} setPage={setPage} pageSize={pageSize} />
      </div>
    </div>
  );
};

export default App;
