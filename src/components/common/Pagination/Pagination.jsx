import React, { useState } from 'react';
import s from './Pagination.module.sass';

const Pagination = ({totalItems, itemsCount, onChange, currentItem, itemsLength}) => {
  const [page, setPage] = useState(1);

  const paginations = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsCount); i++) {
    paginations.push(i);
  }

  const rightSideItem = page * itemsLength;
  const leftSideItem = (page * itemsLength) - itemsLength;

  const next = () => {
    const nextItem = currentItem + 1;
    onChange(nextItem);

    if (nextItem > rightSideItem) {
      setPage(page + 1)
    }
  }

  const prev = () => {
    const prevItem = currentItem - 1;
    onChange(prevItem);

    if (prevItem <= leftSideItem) {
      setPage(page - 1)
    }
  }


  return (
    <div className={s.pagination}>
      
      <ul className={s.pagination_list}>
        {
          currentItem > 1
            ? <li className={`${s.pagination_item}`} onClick={prev}><b>Prev</b></li>
            : null
        }
        
        {
          paginations
            .filter(item => item <= rightSideItem && item > leftSideItem)
            .map(item => {
              const active = currentItem === item;
              return (
                <li key={`page-${item}`}
                  className={`${s.pagination_item} ${active ? s.active : ''}`}
                  onClick={() => { onChange(item) }} >
                  { item }
                </li>
              )
            })
          }

        {
          currentItem < paginations.length
            ? <li className={`${s.pagination_item}`} onClick={next}><b>Next</b></li>
            : null
        }
          
      </ul>
    </div>
  )
};

export default Pagination;