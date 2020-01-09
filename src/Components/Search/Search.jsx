import React from "react";
import "./style.css";

const Search = ({ value, onChange }) => {
  return (
    <div>
      <center>
        <input
          type="text"
          className="search-currency"
          placeholder="szukaj"      
          value={value}
          onChange={onChange}
        />
      </center>
    </div>
  );
};

export default Search;
