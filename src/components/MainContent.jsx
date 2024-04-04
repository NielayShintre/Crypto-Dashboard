import styled from "styled-components";
import Chart from "./Chart"; // Adjust the import path as necessary
import CryptoPrices from "./CryptoPrices";
import Promos from "./Promos"; // Adjust the import path as necessary

const MainContent = () => {
  return (
    <Wrapper>
      <ChartSection>
        <Chart />
        <PromoSection>
          <Promos />
        </PromoSection>
      </ChartSection>
      <CryptoPricesSection>
        <CryptoPrices />
      </CryptoPricesSection>
    </Wrapper>
  );
};

export default MainContent;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 64px);
  overflow: hidden;
`;

const ChartSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 100px;
  width: 1020px;
  height: 600px;
  padding: 10px;
  margin: 20px;
  border-radius: 0.4rem;
  border: 1px solid white;
`;

const PromoSection = styled.div`
  flex: 1;
`;

const CryptoPricesSection = styled.div`
  flex: 0 0 auto; // This will prevent the section from growing or shrinking
  justify-content: flex-start;
  display: flex;
  padding: 1rem;
  width: 100%;
  height: 230px;

  border-radius: 0.4rem;
  //   margin-top: 2rem;
`;
