import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CardService from '../API/CardServise';
import { ICard } from '../utils/Interface';
import '../styles/App.css';
import Loader from '../components/UI/Loader/Loader';
import MyButton from '../components/UI/button/MyButton';

const CardDetail = () => {
  const [searchParams] = useSearchParams();
  const [isCardsLoading, setIsCardsLoading] = useState(false);
  const [card, setCard] = useState<ICard>({} as ICard);
  const page = searchParams.get('page');
  const name = searchParams.get('name');
  const navigate = useNavigate();

  const fetch = useCallback(async (search: string) => {
    try {
      setIsCardsLoading(false);
      const response = await CardService.getByName(search);
      setCard(response);
    } finally {
      setIsCardsLoading(true);
    }
  }, []);

  useEffect(() => {
    if (name) {
      fetch(name);
    }
  }, [fetch, name]);

  function openCard() {
    return (
      <div className="card-detail">
        <h3 className="card-detail-name">{card.name}</h3>
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
        <MyButton onClick={close}>CLOSE</MyButton>
      </div>
    );
  }

  function close() {
    navigate(`/posts/?page=${page}`);
  }

  return (
    <>
      <div className="detail">{isCardsLoading ? openCard() : <Loader />}</div>
    </>
  );
};
export default CardDetail;
