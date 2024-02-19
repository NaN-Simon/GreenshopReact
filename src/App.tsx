import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import theme from './theme/theme';
import Footer from './components/footer/Footer';
import ProductId from './pages/product/[productid]';
import ScrollToTop from './hooks/ScrollToTop';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 13px;

  @media (min-width: ${theme.breakpoints.devices.sm}) {
    width: ${theme.breakpoints.devices.sm};
  }

  @media (min-width: ${theme.breakpoints.devices.md}) {
    width: ${theme.breakpoints.devices.md};
  }

  @media (min-width: ${theme.breakpoints.devices.lg}) {
    width: ${theme.breakpoints.devices.lg};
  }

  @media (min-width: ${theme.breakpoints.devices.xl}) {
    width: ${theme.breakpoints.devices.xl};
  }
`

function App() {
  return (
    <AppStyled>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductId />} />
        </Routes>
      </ScrollToTop>
      <Footer/>
    </AppStyled>
  );
}

export default App;
