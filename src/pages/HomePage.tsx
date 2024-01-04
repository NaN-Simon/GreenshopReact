import React from 'react'
import styled from 'styled-components'
import theme from '../theme/theme';
import Banner from '../components/banner/Banner'
import Categories from '../components/navigation/Categories';
import CustomTab from '../components/tab/CustomTab';
import Dropdown from '../components/UI/dropdown/Dropdown';
import Card from '../components/card/Card';
import RangeSlider from '../components/UI/range-slider/RangeSlider';
import { categories } from '../mock-data/categories'
import { size } from '../mock-data/size'
import { cards } from '../mock-data/cards'
import { initialPrice } from '../mock-data/price-range'
import Pagination from '../components/pagination/Pagination';
import ArticleBanner from '../components/banner/ArticleBanner';
import AsideBanner from '../components/banner/AsideBanner';

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
  margin-bottom: 94px;
`

const StyledCategoriesFilterGroup = styled.div`
  width: auto;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`

const StyledCardFilterGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${theme.palette.testBox};
`

const StyledArticleBannerGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 28px;
  width: 100%;
  background: ${theme.palette.testBox};
`

const HomePage = () => {
  return (
    <StyledHomePage>
      <Banner />
      <StyledMain data-name='main'>
        <div>
          <StyledCategoriesFilterGroup>
            <Categories header='Categories' list={categories} />
            <RangeSlider initialPrice={initialPrice} header='Price range' />
            <Categories header='Size' list={size} />
          </StyledCategoriesFilterGroup>
          <AsideBanner />
        </div>
        <StyledContent data-name='content'>
          <StyledCardFilterGroup data-name='filters'>
            <CustomTab />
            <Dropdown />
          </StyledCardFilterGroup>
          {/* Сами карточки с товарами передаются в Pagination */}
          <Pagination itemsPerPage={9} items={cards} />
        </StyledContent>
      </StyledMain>
      <StyledArticleBannerGroup>
        <ArticleBanner />
        <ArticleBanner />
      </StyledArticleBannerGroup>
    </StyledHomePage>
  )
}

export default HomePage