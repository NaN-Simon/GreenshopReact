import React, { FC, useState } from 'react';
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

const Pagination: FC<IPagination> = ({ itemsPerPage, items }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const Items = ({ items }: { items: ICard[] }) => {
    return (
      <StyledUl
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {items.map((cardItem: ICard) => (
          <Card
            key={cardItem.id}
            {...cardItem}
          />
        ))}
      </StyledUl>
    );
  }

  return (
    <StyledPagination data-name='pagination'>

      <Items items={currentItems} />

      <StyledReactPaginate
        key={pageCount}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        nextLabel=">"
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />

    </StyledPagination>
  )
}

export default Pagination
