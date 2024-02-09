import React, { CSSProperties, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import RangeSlider from '../components/UI/range-slider/RangeSlider'
import AsideBanner from '../components/banner/AsideBanner'
import Categories from '../components/navigation/Categories'

import { filterProductsByCategory, filterProductsBySize } from '../store/reducers/goodsSlice'
import { RootState, AppDispatch } from '../store/store'

interface ICategoryFilter {
  style?: CSSProperties;
}

const StyledCategoriesFilterGroup = styled.div`
  width: 100%;
`

const CategoryFilter: FC<ICategoryFilter> = ({ style }) => {
  const {
    error,
    isLoading,
    goodsCategories,
    goodsSizes,
    goodsPriceRange } = useSelector((state: RootState) => state.goodsReducer)
  const dispatch = useDispatch<AppDispatch>()
  const { bannerAside } = useSelector((state: RootState) => state.bannerReducer)

  const categoriesHandler = (key: string) => {
    dispatch(filterProductsByCategory(key))
  }

  const sizeHandler = (key: string) => {
    dispatch(filterProductsBySize(key))
    console.log(key);
  }


  return (
    <div>
      <StyledCategoriesFilterGroup style={{ ...style }}>
        {error && error}
        {!isLoading && <Categories header='Categories' list={goodsCategories} handler={categoriesHandler} />}
        <RangeSlider initialPrice={goodsPriceRange} header='Price range' />
        {!isLoading && <Categories header='Size' list={goodsSizes} handler={sizeHandler} />}
      </StyledCategoriesFilterGroup>
      {bannerAside !== null && <AsideBanner bannerData={bannerAside} />}
    </div>
  )
}

export default CategoryFilter