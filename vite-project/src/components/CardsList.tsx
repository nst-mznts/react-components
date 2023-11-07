import React from 'react';
import { nanoid } from 'nanoid';
import CardItem from './CardItem';
import { ICard } from '../utils/Interface';
import { Outlet } from 'react-router-dom';
import '../styles/App.css';

type CardsListProps = {
  cards: ICard[];
  page: number;
};

const CardsList: React.FC<CardsListProps> = ({
  cards,
  page,
}: CardsListProps) => {
  if (!cards.length) {
    return <h2>Nothing to show...</h2>;
  }
  return (
    <div className="cards-list">
      {cards.map((card: ICard) => (
        <CardItem key={nanoid()} card={card} page={page} />
      ))}
      <Outlet />
    </div>
  );
};
export default CardsList;
