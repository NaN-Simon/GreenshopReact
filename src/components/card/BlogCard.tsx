import React, { FC } from 'react'
import styled from 'styled-components'
import { IBlogCard } from '../../types/blogCard'

// import theme from '../../theme/theme';

const StyledLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 258px;
  height: 300px;
  background: #c3c2c2;
`

const BlogCard: FC<IBlogCard> = ({ id, time, readTime, title, purpose, description, url}) => {
  return (
    <StyledLi key={id}>
      <div>{time}</div>
      <div>{readTime}</div>
      <div>{title}</div>
      <div>{purpose}</div>
      <div>{description}</div>
      <div>{url}</div>
    </StyledLi>
  )
}

export default BlogCard