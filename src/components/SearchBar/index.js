import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

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
  }, [state, setSearchTerm]);

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

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func,
};

export default SearchBar;
