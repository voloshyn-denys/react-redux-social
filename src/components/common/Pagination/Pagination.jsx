import React, { useState } from 'react';
import s from './Pagination.module.sass';

const Pagination = ({totalItems, itemsCount, onChange, currentItem, itemsLength}) => {
  const [page, setPage] = useState(1);

  const paginations = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsCount); i++) {
    paginations.push(i);
  }

  const rightPageEnd = page * itemsLength;
  const leftPageEnd = rightPageEnd - itemsLength;

  const filteredPaginations = paginations
    .filter(item => item <= rightPageEnd && item > leftPageEnd)

  const selectNextItem = (nextItem, nextPage) => {
    onChange(nextItem);
    if (!filteredPaginations.includes(nextItem)) setPage(nextPage);
  }

  return (
    <div className={s.pagination}>
       <button 
        className='button'
        disabled={currentItem === 1}
        onClick={() => { selectNextItem(currentItem - 1, page - 1)}}>
          Prev
      </button>

      <ul className={s.pagination_list}>
        {
          filteredPaginations
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
          
      </ul>

      <button 
        className='button'
        disabled={currentItem === paginations.length}
        onClick={() => { selectNextItem(currentItem + 1, page + 1) }}>
          Next
      </button>
    </div>
  )
};

export default Pagination;