import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import theme from '../theme/theme';

import BlogPage from './BlogPage';

import { fetchUsers } from '../api/users';
import { AppDispatch, RootState } from '../store/store';
import { test, filterProductsByCategory, filterProductsBySize } from '../store/reducers/goodsSlice'
import { selectCategories, selectSizes } from '../store/selectors/selectGoods';

import Categories from '../components/navigation/Categories';
import CustomTab from '../components/tab/CustomTab';
import CustomSelect from '../components/UI/select/CustomSelect';
import RangeSlider from '../components/UI/range-slider/RangeSlider';
import Carousel from '../components/UI/carousel/Carousel';
import Pagination from '../components/pagination/Pagination';
import ArticleBanner from '../components/banner/ArticleBanner';
import AsideBanner from '../components/banner/AsideBanner';

import { initialPrice } from '../mock-data/price-range'
import { bannerInfo } from '../mock-data/banner-info'

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 100px;
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

const HomePage = () => {
  const { error, status, isLoading, goods } = useSelector((state: RootState) => state.goodsReducer)
  const dispatch = useDispatch<AppDispatch>()

  const goodsCategories = useSelector(selectCategories);
  const goodsSizes = useSelector(selectSizes);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const categoriesHandler = (key: string) => {
    dispatch(filterProductsByCategory(key))
  }

  const sizeHandler = (key: string) => {
    dispatch(filterProductsBySize(key))
    console.log(key);
  }

  return (
    <StyledHomePage >
      <Carousel />

      <StyledMain data-name='main'>
        <div>
          <StyledCategoriesFilterGroup>
            {!isLoading && <Categories header='Categories' list={goodsCategories} handler={categoriesHandler} />}
            <RangeSlider initialPrice={initialPrice} header='Price range' />
            {!isLoading && <Categories header='Size' list={goodsSizes} handler={sizeHandler} />}
          </StyledCategoriesFilterGroup>
          <AsideBanner />
        </div>
        <StyledContent data-name='content'>
          <StyledCardFilterGroup data-name='filters'>
            <CustomTab />
            <CustomSelect />
          </StyledCardFilterGroup>
          {/* Сами карточки с товарами передаются в Pagination */}
          {error && error}
          {isLoading && <span>Loading...</span>}
          {!isLoading && <Pagination itemsPerPage={9} items={goods} />}
        </StyledContent>
      </StyledMain>
      <ArticleBanner data={bannerInfo} />
      <BlogPage />
    </StyledHomePage>
  )
}

export default HomePage