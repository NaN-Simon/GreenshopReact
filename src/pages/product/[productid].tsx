import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Button from '../../components/UI/button/Button'
import AlbumCarousel from '../../components/UI/carousel/AlbumCarousel/AlbumCarousel'
import RelatedCarousel from '../../components/UI/carousel/RelatedCarousel'
import Details from '../../components/card/details/Details'
import CustomTab from '../../components/tab/CustomTab'
import theme from '../../theme/theme'
import ProductDescription from '../../module/product/ProductDescription'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos } from '../../api/photos'
import { RootState, AppDispatch } from '../../store/store'
import { IPhotos } from '../../api/types'
import { ICard } from '../../types/card'

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
const StyledAlbumDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  @media (max-width: ${theme.breakpoints.devices.sm}) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0;
  }
`

const ProductId = () => {
  /* data fetching */
  const { error, isLoading, photos, goods } = useSelector((state: RootState) => state.goodsReducer)
  const dispatch = useDispatch<AppDispatch>()
  const [productPhotos, setProductPhotos] = useState(photos)

  /* product */
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
  const { id } = useParams()
  const addressHandler = () => {
    console.log('addressHandler');
  }

  /* album */
  const product = goods.filter((item: ICard) => item.id === Number(id))[0];
  const mockImages = new Array(5).fill({
    original: product?.image,
    thumbnail: product?.image,
  }, 0)

  const is404 = product === undefined

  /* tab */
  const tabHandler = (some: number) => {
    console.log(some);
  }

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  }
  
  if (is404) {
    return (
      <h1>404 Oops</h1>
    )
  }

  return (
    <StyledShopPage data-name='shop-page'>
      <StyledButton onClick={addressHandler}>
        <span style={{ fontWeight: 700 }}>Home/</span>
        <span>product/</span>
        <span>{id}</span>
      </StyledButton>
      <StyledAlbumDetails data-name='album-details'>
        <AlbumCarousel images={mockImages} />
        <Details {...product} />
      </StyledAlbumDetails>
      <CustomTab
        handler={tabHandler}
        arrayOfTabs={['Product Description', `Reviews (${productPhotos.length})`]}
        arrayOfTabsPanel={[ProductDescription, productReviews]} />
      <RelatedCarousel />
    </StyledShopPage>
  )
}

export default ProductId
