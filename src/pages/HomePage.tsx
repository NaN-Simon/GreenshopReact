import React from 'react'
import styled from 'styled-components'
import theme from '../theme/theme';
import Banner from '../components/banner/Banner'
import Categories from '../components/navigation/Categories';
import CustomTab from '../components/UI/tab/CustomTab';
import Dropdown from '../components/UI/dropdown/Dropdown';
import Card from '../components/card/Card';
import RangeSlider from '../components/UI/range-slider/RangeSlider';
import { categories } from '../mock-data/categories'
import { size } from '../mock-data/size'
import { cards } from '../mock-data/cards'
import { initialPrice } from '../mock-data/price-range'
import Pagination from '../components/pagination/Pagination';

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
`
const StyledMain = styled.main`
  display: flex;
  gap: 50px;
  width: 100%;
  margin-top: 46px;
`

const StyledCategoriesFilters = styled.div`
  width: auto;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`

const StyledCardFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.palette.testBox};
`

const HomePage = () => {
  return (
    <StyledHomePage>
      <Banner />
      <StyledMain data-name='main'>
        <StyledCategoriesFilters>
          <Categories header='Categories' list={categories} />
          <RangeSlider initialPrice={initialPrice} header='Price range'/>
          <Categories header='Size' list={size} />
        </StyledCategoriesFilters>
        <StyledContent data-name='content'>
          <StyledCardFilters data-name='filters'>
            <CustomTab />
            <Dropdown />
          </StyledCardFilters>
          <Pagination itemsPerPage={9} items={cards}/>
        </StyledContent>
      </StyledMain>
    </StyledHomePage>
  )
}

export default HomePage