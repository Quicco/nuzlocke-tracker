import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router';

const HomePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch('http://localhost:5001/games');
        const data = await res.json();
        setGames(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      <ul>
        {games.map((game, i) => (
          <li key={i}>
            <Link to={`/games/${game._id}`}>
              <p>{game.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
