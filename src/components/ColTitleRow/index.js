const ColTitleRow = ({ cols }) => {
  return (
    <div className="colTitle-row-container">
      <span className="colTitle-row">
        {cols.map((col, index) => (
          <p key={"col" + index} className="col-title">
            {col}
          </p>
        ))}
      </span>
    </div>
  );
};

export default ColTitleRow;
