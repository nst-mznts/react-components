import React from 'react';
import '../styles/App.css';
import MyButton from './UI/button/MyButton';

interface IPaginationProps {
  pagesArray: number[];
  page: number;
  changePage: (p: number) => void;
  value: number;
  setValue: (value: number) => void;
  fetch: Promise<void>;
}

const Pagination = ({
  pagesArray,
  page,
  changePage,
  value,
  setValue,
  fetch,
}: IPaginationProps) => {
  return (
    <footer>
      <div className="wrapper">
        <div className="page-wrapper">
          {pagesArray.map((p) => (
            <span
              onClick={() => changePage(p)}
              key={p}
              className={page === p ? 'page page-current' : 'page'}
            >
              {p}
            </span>
          ))}
        </div>
        <div className="page-wrapper">
          <input
            value={value}
            type="number"
            min="1"
            max="50"
            onChange={(event) => setValue(event.target.value)}
            className="footer-input"
          />
          <MyButton onClick={fetch}>Set cards</MyButton>
        </div>
      </div>
    </footer>
  );
};
export default Pagination;
