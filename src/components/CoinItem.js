import React from "react";
import styled from "styled-components";

const CoinRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;

  &:hover {
    transform: scale(1.04);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;
const HideMobile = styled.p`
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
const ImageSymbol = styled.div`
  display: flex;
  align-items: center;
`;

const CoinItem = (props) => {
  return (
    <CoinRow>
      <p>{props.coins.market_cap_rank}</p>
      <ImageSymbol>
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol}</p>
      </ImageSymbol>
      <p>{props.coins.current_price}</p>
      <p>{props.coins.price_change_percentage_24h}</p>
      <HideMobile>{props.coins.total_volume}</HideMobile>
      <HideMobile>{props.coins.market_cap}</HideMobile>
    </CoinRow>
  );
};

export default CoinItem;
