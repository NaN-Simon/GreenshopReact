import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'

import BlogPage from './BlogPage';

import CategoryFilter from '../module/CategoryFilter';

import CustomTab from '../components/tab/CustomTab';
import Pagination from '../components/pagination/Pagination';
import ArticleBanner from '../components/banner/ArticleBanner';
import CustomSelect from '../components/UI/select/CustomSelect';
import Carousel from '../components/UI/carousel/Carousel';

import { fetchUsers } from '../api/users';
import { AppDispatch, RootState } from '../store/store';
import {
  filterProductsBySale,
  filterProductsByNew,
  filterProductsByAll,
  sortProductsByNameAZ,
  sortProductsByPriceFromDownToUp,
  sortProductsByPriceFromUpToDown,
  sortProductsByNameZA
} from '../store/reducers/goodsSlice'

// import { selectCategories, selectSizes } from '../store/selectors/selectGoods';

import useWindowSize from '../hooks/useWindowSize';

import { bannerInfo } from '../mock-data/banner-info'
import theme from '../theme/theme';

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 100px;
  @media (min-width: ${theme.breakpoints.devices.md}) {
    max-width: 1200px;
  }
`
const StyledMain = styled.main`
  display: flex;
  gap: 50px;
  width: 100%;
  margin-top: 46px;
  margin-bottom: 94px;
  position: relative;
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
`

const HomePage = () => {
  /* component CategoryFilter size handler */
  const {isScreenLessThanMd} = useWindowSize();

  /* data fetching */
  const { error, isLoading, goods } = useSelector((state: RootState) => state.goodsReducer)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  const tabHandler = (tab: number) => {
    tab === 0 && dispatch(filterProductsByAll())
    tab === 1 && dispatch(filterProductsByNew(true))
    tab === 2 && dispatch(filterProductsBySale())
  }

  const selectHandler = (select: string) => {
    select === 'nameAZ' && dispatch(sortProductsByNameAZ())
    select === 'nameZA' && dispatch(sortProductsByNameZA())
    select === 'priceFromDownToUp' && dispatch(sortProductsByPriceFromDownToUp())
    select === 'priceFromUpToDown' && dispatch(sortProductsByPriceFromUpToDown())
  }

  return (
    <StyledHomePage data-name='home-page' >
      <Carousel />
      <StyledMain data-name='main'>
        {!isScreenLessThanMd && <CategoryFilter style={{ width: '310px' }} />}
        <StyledContent data-name='content'>
          <StyledCardFilterGroup data-name='filters'>
            <CustomTab handler={tabHandler} />
            <CustomSelect handler={selectHandler} />
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