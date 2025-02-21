import React from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";
import "./Coins.css";

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  /* display: flex; */
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;
  font-weight: 700;
`;

const HideMobile = styled.p`
  @media screen and (max-width: 720px) {
    .hide-mobile {
      display: none;
    }
  }
`;

const Coins = (props) => {
  return (
    <Container>
      <div>
        <Heading>
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <HideMobile>Volume</HideMobile>
          <HideMobile>Mkt Cap</HideMobile>
        </Heading>
        {props.coins.map((coins) => {
          return <CoinItem coins={coins} key={coins.id} />;
        })}
      </div>
    </Container>
  );
};

export default Coins;
