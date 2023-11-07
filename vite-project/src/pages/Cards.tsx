import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Content from '../components/Content';
import CardService from '../API/CardServise';
import { getPageCount, getPagesArray } from '../utils/pages';
import Pagination from '../components/Pagination';
import { ICard } from '../utils/Interface';
import '../styles/App.css';

const Cards = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(
    localStorage.getItem('search') || ''
  );
  const [isCardsLoading, setIsCardsLoading] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit, setLimit] = useState<number>(9);
  const [page, setPage] = useState<number>(1);
  const navigate = useNavigate();

  const pagesArray = getPagesArray(totalPages);

  useEffect(() => {
    fetchCards();
  }, [page]);

  async function fetchCards() {
    setIsCardsLoading(true);
    const response = await CardService.getAll(page, limit);
    setCards(response.data);
    setIsCardsLoading(false);
    const totalCount = 111;
    setTotalPages(getPageCount(totalCount, limit));
    navigate(`/posts/?page=${page}&limit=${limit}`);
  }

  const searchedCards = useMemo(() => {
    return [...cards].filter((card) =>
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, cards]);

  const changePage = (page: number) => {
    setPage(page);
  };

  return (
    <>
      <Header setValue={setSearchQuery} />
      <Content cards={searchedCards} loader={isCardsLoading} page={page} />
      <Pagination
        fetch={fetchCards}
        pagesArray={pagesArray}
        page={page}
        changePage={changePage}
        value={limit}
        setValue={setLimit}
      />
    </>
  );
};
export default Cards;
