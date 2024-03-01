import React, { FC, useMemo } from 'react'
import styled from 'styled-components'

import { IPhotos } from '../../api/types'
import RadioRate from './details/UI/radio/RadioRate'

import { getRandom, getWord, getParagraph } from '../../utils/random'

import theme from '../../theme/theme'

interface IReview {
  array: any
}

const StyledReview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-top: 20px;
  `
const StyledReviewElement = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  border-radius: 20px;
  background: ${theme.palette.backgroundSecondary};
`
const StyledReviewAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

const StyledData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`
const StyledUserData = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledUserName = styled.h3`
  color: ${theme.typography.h3.color};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: ${theme.typography.h3.fontSize};
  line-height: ${theme.typography.h3.lineHeight};

`
const StyledDescription = styled.h5`
  color: ${theme.palette.secondary};
  font-family: ${theme.typography.h5.fontFamily};
  font-style: ${theme.typography.h5.fontStyle};
  font-weight: ${theme.typography.h5.fontWeight};
  font-size: ${theme.typography.h5.fontSize};
  line-height: ${theme.typography.h5.lineHeight};
`

const Review: FC<IReview> = ({ array }) => {
  return (
    <StyledReview data-name='review'>
      {array.map((item: IPhotos) => {
        const mockUsername = useMemo(() => { return getWord(true) }, [])
        const mockRate = useMemo(() => { return getRandom(0, 6) }, [])
        const mockDescription = useMemo(() => { return getParagraph(1, 3) }, [])
        return (
          <StyledReviewElement key={item.id}>
            <StyledReviewAvatar
              src={item.thumbnailUrl}
              alt={item.title}
            />
            <StyledData>
              <StyledUserData>
                <StyledUserName>{mockUsername}</StyledUserName>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <span>1 Марта 2024</span>
                  <RadioRate rate={mockRate} />
                </div>

              </StyledUserData>

              <StyledDescription>
                {mockDescription}
              </StyledDescription>
            </StyledData>

          </StyledReviewElement>

        )
      }
      )}
    </StyledReview>
  )
}

export default Review