import React from "react";
import styled from "styled-components";
import { FaCoins } from "react-icons/fa";

const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  font-size: 2rem;
  color: #6900ff;
`;
const Search = styled.span`
  color: #6900ff;
`;

const Navbar = () => {
  return (
    <NavBar>
      <Icon>
        <FaCoins />
      </Icon>
      <h1>
        Coin <Search className="purple">Search</Search>{" "}
        {/*Inline style element to change color of the word "Search" */}
      </h1>
    </NavBar>
  );
};

export default Navbar;
