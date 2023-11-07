import React from 'react';
import '../styles/App.css';
import { ICard } from '../utils/Interface';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

type CardItemProps = {
  card: ICard;
  page: number;
};

const CardItem: React.FC<CardItemProps> = ({ card, page }: CardItemProps) => {
  const navigate = useNavigate();
  const navigateDetailPage = (id: string) => {
    navigate(`/posts/details/?page=${page}&name=${id}`);
  };

  return (
    <div className="card">
      <h3 className="card-name">{card.name}</h3>
      <p>
        <span className="bold">country</span> {card.country}
      </p>
      <p>
        <span className="bold">state</span> {card.state}
      </p>
      <p>
        <span className="bold">city</span> {card.city}
      </p>
      <p>
        <span className="bold">adress</span> {card.street}
      </p>
      <MyButton onClick={() => navigateDetailPage(card.id)}>OPEN</MyButton>
    </div>
  );
};
export default CardItem;
