import React from "react";

const SearchResults = ({ text }) => {
  return (
    <div>
      <div className="py-2 pl-4 shadow-sm">{text}</div>
    </div>
  );
};

export default SearchResults;
