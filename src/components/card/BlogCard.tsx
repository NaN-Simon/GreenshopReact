import React, { FC } from 'react'
import styled from 'styled-components'
import { IBlogCard } from '../../types/blogCard'
import theme from '../../theme/theme'
import Button from '../UI/button/Button'
import { ReactComponent as Arrow2SVG } from '../../assets/svg/arrow2.svg'
import Divider from '../UI/divider/Divider'

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 268px;
  background: ${theme.palette.backgroundSecondary};
`
const StyledImg = styled.img`
  width: auto;
  height: 195px;
  background: inherit
`
const StyledTechInfo = styled.h6`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${theme.palette.info};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
`
const StyledTitle = styled.h3`
  color: ${theme.typography.h3.color};
  font-family: ${theme.typography.h3.fontFamily};
  font-style: ${theme.typography.h3.fontStyle};
  font-weight: 700;
  font-size: 20px;
  line-height: ${theme.typography.h3.lineHeight};
`
const StyledDescription = styled.h6`
  color: ${theme.typography.h6.color};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: ${theme.typography.h6.fontWeight};
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
`
const StyledButton = styled.span`
  color: ${theme.palette.primary};
  font-family: ${theme.typography.h6.fontFamily};
  font-style: ${theme.typography.h6.fontStyle};
  font-weight: 600;
  font-size: ${theme.typography.h6.fontSize};
  line-height: ${theme.typography.h6.lineHeight};
`
const StyledArrowWrapper = styled.span`
  fill: ${theme.palette.primary}
`
const StyledContent = styled.div`
  color: ${theme.palette.primary};
  padding: 15px;
  cursor: pointer;
  &:hover{
    & ${StyledButton}{
      color: ${theme.palette.info};
    }
    & ${StyledArrowWrapper}{
      fill: ${theme.palette.info}
    }
  }
`

const BlogCard: FC<IBlogCard> = (props) => {
  const { id, image, time, readTime, title, purpose, description, url } = props
  return (
    <StyledLi key={id}>
      <StyledImg src={image} alt={title} />
      <StyledContent>
        <StyledTechInfo>
          <div>{time}</div>
          <Divider style={{ background: theme.palette.info }} />
          <div>{readTime}</div>
        </StyledTechInfo>
        <StyledTitle>{title}</StyledTitle>
        <StyledTitle>{purpose}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <Button style={{ justifyContent: 'flex-start', background: 'none', color: theme.palette.primary }} link={url}>
          <StyledButton>Read More</StyledButton>
          <StyledArrowWrapper>
            <Arrow2SVG style={{ paddingTop: '4px', }} />
          </StyledArrowWrapper>
        </Button>
      </StyledContent>
    </StyledLi>
  )
}

export default BlogCard