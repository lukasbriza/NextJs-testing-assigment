import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import React, { useEffect, useState } from "react";

import { CaravanContextProvider } from "../src/helpers/caravanContext";
import { Menu } from "../src/components/Menu";
import { Filter } from "../src/components/Filter";
import { ProductSection } from "../src/components/ProductSection";
import { Carousel } from "../src/components/Carousel";

import fetchAgent from "../src/helpers/fetchAgent";
import theme from "../src/helpers/theme";

const Home = () => {
  const [defaultData, setDefaultData] = useState();

  const getDefaultData = () => {
    const data = fetchAgent.getData("http://localhost:3000/api/data");
    return data;
  };

  useEffect(() => {
    getDefaultData().then((value) => setDefaultData(value));
  }, []);

  return (
    <CaravanContextProvider>
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Menu />
          <Filter />
          <ProductSection data={defaultData} />
          <Carousel />
        </PageWrapper>
      </ThemeProvider>
    </CaravanContextProvider>
  );
};

const PageWrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.colors.white};
  max-width: ${(props) => props.theme.maxWidth};
  border: 1px solid ${(props) => props.theme.colors.beige};

  left: 50%;
  transform: translateX(-50%);
`;

export default Home;
