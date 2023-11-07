import React from 'react';
import CardsList from './CardsList';
import '../styles/App.css';
import Loader from './UI/Loader/Loader';
import { ICard } from '../utils/Interface';

interface ContentProps {
  cards: ICard[];
  loader: boolean;
  page: number;
}

const Content: React.FC<ContentProps> = ({
  cards,
  loader,
  page,
}: ContentProps) => {
  return (
    <main>
      <div className="wrapper">
        {loader ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          <CardsList cards={cards} page={page} />
        )}
      </div>
    </main>
  );
};
export default Content;
