import React from "react";

class SelectPageSize extends React.Component {
  onChange(e) {
    this.setPageSize(e.target.value);
    this.setPage(1);
  }
  render() {
    const { sizes, pageSize, setPageSize, setPage } = this.props;
    return (
      <div className="form-group">
        <form>
          <select
            className="page-select"
            value={pageSize}
            onChange={this.onChange.bind({ setPageSize, setPage })}
          >
            <option value="" disabled>
              --- Page Size ---
            </option>
            {sizes.map((v, index) => (
              <option key={"page-size-" + index} value={v}>
                {v}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default SelectPageSize;
