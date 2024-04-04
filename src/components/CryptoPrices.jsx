import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CryptoPriceCard = ({ currency, rate, symbol }) => {
  // Function to decode HTML entities
  const decodeEntities = (encodedString) => {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = encodedString;
    return textarea.value;
  };

  return (
    <StyledCard>
      <CurrencyName>Bitcoin to {currency}</CurrencyName>
      <Price>
        <h4>
          Rate :{" "}
          <span
            dangerouslySetInnerHTML={{ __html: decodeEntities(symbol) }}
          ></span>{" "}
          {rate}{" "}
        </h4>
      </Price>
    </StyledCard>
  );
};

CryptoPriceCard.propTypes = {
  currency: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

const CryptoPrices = () => {
  const [priceData, setPriceData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await response.json();
        setPriceData(data.bpi);
      } catch (error) {
        setError("Error fetching cryptocurrency prices.");
      }
    };
    fetchPrices();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Content>
      <CardContainer>
        {priceData && Object.keys(priceData).length > 0 ? (
          Object.entries(priceData).map(([currency, priceInfo]) => (
            <CryptoPriceCard
              key={currency}
              currency={priceInfo.code}
              rate={priceInfo.rate}
              symbol={priceInfo.symbol}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </CardContainer>
    </Content>
  );
};

export default CryptoPrices;

const Content = styled.div`
  width: 100%;
  padding: 5px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  cursor: pointer;
`;

const StyledCard = styled.div`
 background-color: #1a1b1c;
 color: white;
 padding: 1rem;
 border-radius: 0.4rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 200px;
 border: 4px solid #007bff; /* Original border color */
 transition: border-radius 0.5s ease; /* Smooth transition for border-radius */

 &:hover {
    border-image: linear-gradient(to right, #007bff, #ffc107) 1;
    border-radius: 0.4rem;
 }
`;

const CurrencyName = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1e4fd9;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: beige;
`;
