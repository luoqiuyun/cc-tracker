const PageNav = (props) => {
  const { page, setPage, pageSize } = props;
  const prev = (e) => {
    e.preventDefault();
    if (page !== 1) setPage(page - 1);
  };
  const next = (e) => {
    e.preventDefault();
    if (pageSize !== "All") setPage(page + 1);
  };
  return (
    <span className="page-nav">
      <a href="/#" className="previous round" onClick={prev}>
        &#8249;
      </a>
      <span className="current-page">{page}</span>
      <a href="/#" className="next round" onClick={next}>
        &#8250;
      </a>
    </span>
  );
};

export default PageNav;
