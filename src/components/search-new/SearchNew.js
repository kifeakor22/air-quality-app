import React from "react";

const SearchNew = ({ setLocation }) => {
  return (
    <div>
      <button onClick={setLocation("Jon")}>Click Me</button>
    </div>
  );
};

export default SearchNew;
