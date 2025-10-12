import React, { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const gens = [1, 2, 3];

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch('http://localhost:5001/games');

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
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
      <h1>Games List</h1>

      {gens.map((gen) => (
        <div key={gen}>
         <GameCard gen={gen} data={games}/>
        </div>
      ))}
    </>
  );
};

export default HomePage;
