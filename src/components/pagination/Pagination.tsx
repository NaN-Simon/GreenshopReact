import React, { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'
import { motion } from "framer-motion";

import Card from '../card/Card'
import theme from '../../theme/theme';

import { ICard } from '../../types/card';
import { IPagination } from '../../types/pagination';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const StyledPagination = styled.div`
  width: 100%;
`
const StyledUl = styled(motion.ul)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 33px;
  padding: 0;
  list-style-type: none;
  background: ${theme.palette.backgroundPrimary}
`
const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 20px 0;
  list-style-type: none;
  li a {
    padding: 5px 12px;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    color: ${theme.typography.h3.color};
    font-family: ${theme.typography.h3.fontFamily};
    font-style: ${theme.typography.h3.fontStyle};
    font-weight: ${theme.typography.h3.fontWeight};
    font-size: ${theme.typography.h3.fontSize};
    line-height: ${theme.typography.h3.lineHeight};
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: ${theme.palette.info};
    border-color: transparent;
    color: ${theme.palette.backgroundPrimary};
    min-width: 32px;
  }
  li.disabled a {
    opacity: 0.5
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`

const Pagination: FC<IPagination> = ({ itemsPerPage = 9, items }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState<ICard[]>(items);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    /* console.log(`Loading items from ${itemOffset} to ${endOffset}`); */
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = event.selected * itemsPerPage % items.length;
    /* console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`); */
    setItemOffset(newOffset);
  };

  const paginationProps = {
    nextLabel: ">",
    onPageChange: handlePageClick,
    pageRangeDisplayed: 3,
    marginPagesDisplayed: 2,
    pageCount: pageCount,
    previousLabel: "<",
    pageClassName: "page-item",
    pageLinkClassName: "page-link",
    previousClassName: "page-item",
    previousLinkClassName: "page-link",
    nextClassName: "page-item",
    nextLinkClassName: "page-link",
    breakLabel: "...",
    breakClassName: "page-item",
    breakLinkClassName: "page-link",
    containerClassName: "pagination",
    activeClassName: "active",
    renderOnZeroPageCount: null,
  };

  return (
    <StyledPagination data-name='pagination'>

      <StyledUl
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {currentItems.map((cardItem) => (
          <Card
            key={cardItem.id}
            {...cardItem}
          />
        ))}
      </StyledUl>

      <StyledReactPaginate
        {...paginationProps}
      />

    </StyledPagination>
  )
}

export default Pagination
