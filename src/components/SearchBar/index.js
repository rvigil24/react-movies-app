import React, { useState, useEffect, useRef } from "react";

//styles
import { Wrapper, Content } from "./SearchBar.styles";
import SearchIconImg from "../../images/search-icon.svg";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    setSearchTerm(state);
  }, [state]);

  const handleOnChange = (e) => {
    setState(e.target.value);
  };

  return (
    <Wrapper>
      <Content>
        <img src={SearchIconImg} alt="search icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={handleOnChange}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
