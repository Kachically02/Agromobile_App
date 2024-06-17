import React from "react";
import { ReactComponent as SearchIcon } from "../../images/search.svg";

import "./search.css";

const Search = (props) => {
  return (
  
    <div className="search-input">
    <button>
        <SearchIcon />
      </button>
      <div className="input">
        <input {...props} type="text" placeholder="Search for anything" />
      </div>
      
    </div>
  );
};

export default Search;