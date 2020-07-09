import React, { useState } from "react";

const Input = ({ placeholder, className }) => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <input
      className={className}
      placeholder={placeholder}
      onChange={(event) => setSearchValue(event.target.value)}
    ></input>
  );
};

export default Input;
