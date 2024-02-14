import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import Button from '../../components/UI/button/Button'
import AlbumCarousel from '../../components/UI/carousel/AlbumCarousel'
import RelatedCarousel from '../../components/UI/carousel/RelatedCarousel'
import Details from '../../components/card/Details'
import CustomTab from '../../components/tab/CustomTab'
import theme from '../../theme/theme'
import ProductDescription from '../../module/product/ProductDescription'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../../api/photos'
import { RootState, AppDispatch } from '../../store/store'
import { IPhotos } from '../../api/types'

const StyledShopPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 100px;
  @media (min-width: ${theme.breakpoints.devices.md}) {
    max-width: 1200px;
  }
`
const StyledButton = styled(Button)`
  background: none;
  cursor: pointer;
  color: ${theme.typography.h5.color};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: ${theme.typography.h5.fontWeight};
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
  gap: 0;
  border: 0;
  white-space: nowrap;
  transition: all 0.7s;
  &:hover{
    opacity: 0.5;
 }
`

const ProductId = () => {
  /* data fetching */
  const { error, isLoading, photos } = useSelector((state: RootState) => state.goodsReducer)
  const dispatch = useDispatch<AppDispatch>()
  const [productPhotos, setProductPhotos] = useState(photos)
  useEffect(() => {
    dispatch(fetchPhotos())
  }, [dispatch])

  useEffect(() => {
    setProductPhotos(photos)
  }, [photos])

  const productReviews = () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '5px',
        paddingTop: '16px'
      }}
      >
        {error && error}
        {isLoading && 'Loading...'}
        {productPhotos.map((item: IPhotos) =>
          <img
            key={item.id}
            src={item.thumbnailUrl}
            alt={item.title}
            style={{ width: '150px', height: '150px' }}
          />
        )}
      </div>
    );
  }


  /* address */
  const location = useLocation()
  const currentPath = location.pathname

  const addressHandler = () => {
    console.log(location);

  }

  /* tab */
  const tabHandler = (some: number) => {
    console.log(some);
  }


  return (
    <StyledShopPage data-name='shop-page'>
      <StyledButton onClick={addressHandler}>
        <span style={{ fontWeight: 700 }}>Home</span>{currentPath}
      </StyledButton>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '50px', width: '100%' }}>
        <AlbumCarousel />
        <Details />
      </div>
      <CustomTab
        handler={tabHandler}
        arrayOfTabs={['Product Description', `Reviews (${productPhotos.length})`]}
        arrayOfTabsPanel={[ProductDescription, productReviews]} />
      <RelatedCarousel />
    </StyledShopPage>
  )
}

export default ProductId
