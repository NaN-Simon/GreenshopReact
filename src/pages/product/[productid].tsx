import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import ProductDescription from '../../module/product/ProductDescription'

import Button from '../../components/UI/button/Button'
import AlbumCarousel from '../../components/UI/carousel/AlbumCarousel/AlbumCarousel'
import Details from '../../components/card/details/Details'
import CustomTab from '../../components/tab/CustomTab'
import SliderCarousel from '../../components/UI/carousel/SliderCarousel'
import Card from '../../components/card/Card'

import theme from '../../theme/theme'

import { fetchPhotos } from '../../api/photos'

import { RootState, AppDispatch } from '../../store/store'

import { ICard } from '../../types/card'
import Review from '../../components/card/Review'
import useWindowSize from '../../hooks/useWindowSize'

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

  const navigate = useNavigate();
  const { size } = useWindowSize()

  const [countCardsOfCarousel, setCountCardsOfCarousel] = useState(15)
  const [displayingCountCardsOfCarousel, setDisplayingCountCardsOfCarousel] = useState(5)

  useEffect(() => {
    size > 1280 && (setDisplayingCountCardsOfCarousel(5), setCountCardsOfCarousel(15));
    size <= 1280 && (setDisplayingCountCardsOfCarousel(4), setCountCardsOfCarousel(15));
    size <= 1050 && (setDisplayingCountCardsOfCarousel(3), setCountCardsOfCarousel(10));
    size <= 786 && (setDisplayingCountCardsOfCarousel(2), setCountCardsOfCarousel(7));
    size <= 500 && (setDisplayingCountCardsOfCarousel(1), setCountCardsOfCarousel(2));
  }, [size])

  /* product */
  useEffect(() => {
    dispatch(fetchPhotos())
  }, [dispatch])

  const productReviews = () => {
    return (
      <Review array={photos} />
    );
  }

  /* address */
  const { id } = useParams()
  const addressHandler = () => {
    navigate(`/`);
  }

  /* album */
  /* текущий продукт */
  const product = goods.filter((item: ICard) => item.id === Number(id))[0];

  /* текущие фото продукта */
  const mockImages = new Array(5).fill({
    original: product?.image,
    thumbnail: product?.image,
  }, 0)

  const is404 = product === undefined

  /* tab */
  const tabHandler = (some: number) => {
    console.log(some);
  }

  if (isLoading) return (<h1>Loading...</h1>)
  if (error) return (<h1>{error}</h1>)
  if (is404) return (<h1>404 Oops</h1>)


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
        style={{ width: '100%', paddingBottom: '50px' }}
        handler={tabHandler}
        arrayOfTabs={['Product Description', `Reviews (${product.countReview})`]}
        arrayOfTabsPanel={[ProductDescription, productReviews]} />

      <SliderCarousel autoplay slidesToShow={displayingCountCardsOfCarousel} slidesToScroll={displayingCountCardsOfCarousel}>
        {goods.map((item, index) => {
          return (
            (index < countCardsOfCarousel) && <Card
              key={item.id}
              {...item}
            />
          )
        })}
      </SliderCarousel>

    </StyledShopPage>
  )
}

export default ProductId
