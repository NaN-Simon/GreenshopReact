import React, { CSSProperties, FC, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import RangeSlider from '../components/UI/range-slider/RangeSlider'
import AsideBanner from '../components/banner/AsideBanner'
import Categories from '../components/navigation/Categories'

import { filterProductsByCategory, filterProductsBySize, filterRangeByPrice } from '../store/reducers/goodsSlice'
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
    status,
    isLoading,
    goodsCategories,
    goodsSizes,
    goodsPriceRange,
    goodsMinPrice,
    goodsMaxPrice,
   } = useSelector((state: RootState) => state.goodsReducer)
  const dispatch = useDispatch<AppDispatch>()
  const { bannerAside } = useSelector((state: RootState) => state.bannerReducer)

  const categoriesHandler = (key: string) => {
    dispatch(filterProductsByCategory(key))
  }

  const sizeHandler = (key: string) => {
    dispatch(filterProductsBySize(key))
  }

  /* rangeSlider */
  const [value, setValue] = useState<number | number[]>(goodsPriceRange)

  useEffect(()=>{
    setValue(goodsPriceRange)
  },[goodsPriceRange])

  const rangeHandler = () => {
    dispatch(filterRangeByPrice(value))
  }

  return (
    <div>
      <StyledCategoriesFilterGroup style={{ ...style }}>
        {error && error}
        {!isLoading && (
          <Categories
            header='Categories'
            list={goodsCategories}
            handler={categoriesHandler}
          />
        )}
        {(status === 'resolved') && <RangeSlider
          min={goodsMinPrice}
          max={goodsMaxPrice}
          value={value}
          setValue={setValue}
          initialPrice={goodsPriceRange}
          header='Price range'
          buttonSubmit={rangeHandler}
        />}
        {!isLoading && (
          <Categories
            header='Size'
            list={goodsSizes}
            handler={sizeHandler}
          />)}
      </StyledCategoriesFilterGroup>
      {bannerAside !== null && <AsideBanner bannerData={bannerAside} />}
    </div>
  )
}

export default CategoryFilter