/*
* Блог вынес в отдельную страницу т.к имеет свою ссылку в навигации.
*/

import React from 'react'
import styled from 'styled-components'
import theme from '../theme/theme';
import BlogCard from '../components/card/BlogCard';
import { blogCardsData } from '../mock-data/blog-cards';
import { IBlogCard } from '../types/blogCard';

const StyledBlogPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledHeader = styled.h2`
    color: ${theme.typography.h2.color};
    font-family: ${theme.typography.h2.fontFamily};
    font-style: ${theme.typography.h2.fontStyle};
    font-weight: ${theme.typography.h2.fontWeight};
    font-size: ${theme.typography.h2.fontSize};
    line-height: ${theme.typography.h2.lineHeight};
    margin-bottom: 15px;
    `
const StyledSubHeader = styled.h6`
    color: ${theme.typography.h6.color};
    font-family: ${theme.typography.h6.fontFamily};
    font-style: ${theme.typography.h6.fontStyle};
    font-weight: ${theme.typography.h6.fontWeight};
    font-size: ${theme.typography.h6.fontSize};
    line-height: ${theme.typography.h6.lineHeight};
    margin-bottom: 35px;
`
const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 44px;
  padding: 0;
  list-style-type: none;
  background: ${theme.palette.testBox}
`

const BlogPage = () => {
  const BlogList = ({ list }: { list: IBlogCard[] }) => {
    return (
      <StyledUl>
        {list?.map((item) => (
          <BlogCard
            key={item.id}
            {...item}
          />
        ))}
      </StyledUl>
    );
  }

  return (
    <StyledBlogPageWrapper id='blog'>
      <StyledHeader>
        Our Blog Posts
      </StyledHeader>
      <StyledSubHeader>
        We are an online plant shop offering a wide range of cheap and trendy plants.
      </StyledSubHeader>
      <BlogList list={blogCardsData} />
    </StyledBlogPageWrapper>
  )
}

export default BlogPage