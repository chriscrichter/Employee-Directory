import React, { useContext } from "react";
import ListAreaContext from "../utils/ListAreaContext";

const SearchName = () => {
  const context = useContext(ListAreaContext);

  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="">
              Filter
            </span>
          </div>
          <input
          className="form-control mr-sm-3"
          type="search"
          placeholder="name"
          aria-label="Search"
          onChange={e => context.handleSearchChange(e)}
        />
        </div>
    </div>
  );
}
export default SearchName;