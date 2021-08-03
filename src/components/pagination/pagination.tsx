import React, { useState, useEffect } from 'react';
import style from './pagination.module.css';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
    data?: any;
    itemsPerPage?: number;
    renderData?: any; 
}

// type renderData = (arg: number) => void;

export default function Pagination({ data, itemsPerPage, renderData }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPageCount = itemsPerPage || 5;

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPageCount); i++) {
    pages.push(i);
  }

  const [pageNumberLimit, setpageNumberLimit] = useState(itemsPerPage);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(itemsPerPage);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const renderPageNumbers = pages.map((number) => {
    if (
      number < Number(maxPageNumberLimit) + 1 &&
      number > minPageNumberLimit
    ) {
      return (
        <div
          className={`${style.items} ${
            currentPage === number ? style.active : ""
          }`}
          onClick={(e) => handleClick(e)}
          id={`${number}`}
          key={number}
        >
          {number}
        </div>
      );
    } else {
      return null;
    }
  });

  const handleClick = (e: any) => {
    // e.target.
    setCurrentPage(Number(e.target.id));
    // renderData(Number(e.target.id));
  };
  useEffect(() => {
    renderData(currentPage);
  }, [currentPage]);

  //
  const indexOfLastItem = currentPage * itemsPerPageCount;
  const indexOfFirstItem = indexOfLastItem - itemsPerPageCount;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > Number(maxPageNumberLimit)) {
      setmaxPageNumberLimit(
        Number(maxPageNumberLimit) + Number(pageNumberLimit)
      );
      setminPageNumberLimit(
        Number(minPageNumberLimit) + Number(pageNumberLimit)
      );
    }
    
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % Number(pageNumberLimit) == 0) {
      setmaxPageNumberLimit(
        Number(maxPageNumberLimit) - Number(pageNumberLimit)
      );
      setminPageNumberLimit(
        Number(minPageNumberLimit) - Number(pageNumberLimit)
      );
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > Number(maxPageNumberLimit)) {
    pageIncrementBtn = (
      <div className={style.items} onClick={handleNextbtn}>
        {" "}
        &hellip;{" "}
      </div>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <div className={style.items} onClick={handlePrevbtn}>
        {" "}
        &hellip;{" "}
      </div>
    );
  }

  return (
    <>
      <div className={`${style.paginationWrapper} d-flex`}>
        <button
          className={`btn ${style.items} ${
            currentPage > 1 ? style.active : ""
          }`}
          onClick={handlePrevbtn}
          disabled={currentPage == pages[0] ? true : false}
        >
          <span className={style.chevron}>
            <FiChevronLeft />
          </span>{" "}
          Prev
        </button>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <button
          className={`btn ${style.items} ${
            currentPage < pages[pages.length - 1] ? style.active : ""
          }`}
          onClick={handleNextbtn}
          disabled={currentPage === pages[pages.length - 1] ? true : false}
        >
          Next
          <span className={style.chevron}>
            <FiChevronRight />
          </span>{" "}
        </button>
      </div>
    </>
  );
}