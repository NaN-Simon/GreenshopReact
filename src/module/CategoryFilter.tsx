import React, { CSSProperties, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import RangeSlider from '../components/UI/range-slider/RangeSlider'
import AsideBanner from '../components/banner/AsideBanner'
import Categories from '../components/navigation/Categories'
import { initialPrice } from '../mock-data/price-range'
import { filterProductsByCategory, filterProductsBySize } from '../store/reducers/goodsSlice'
import { RootState, AppDispatch } from '../store/store'
import { bannerAside } from '../mock-data/banner-info';
interface ICategoryFilter {
  style?: CSSProperties;
}

const StyledCategoriesFilterGroup = styled.div`
  width: 100%;
`

const CategoryFilter:FC<ICategoryFilter> = ({style}) => {
  const { error, status, isLoading, goodsCategories, goodsSizes } = useSelector((state: RootState) => state.goodsReducer)
  const dispatch = useDispatch<AppDispatch>()

  const categoriesHandler = (key: string) => {
    dispatch(filterProductsByCategory(key))
  }

  const sizeHandler = (key: string) => {
    dispatch(filterProductsBySize(key))
    console.log(key);
  }

  return (
    <div>
      <StyledCategoriesFilterGroup style={{...style}}>
        {!isLoading && <Categories header='Categories' list={goodsCategories} handler={categoriesHandler} />}
        <RangeSlider initialPrice={initialPrice} header='Price range' />
        {!isLoading && <Categories header='Size' list={goodsSizes} handler={sizeHandler} />}
      </StyledCategoriesFilterGroup>
      <AsideBanner bannerData={bannerAside} />
    </div>
  )
}

export default CategoryFilter