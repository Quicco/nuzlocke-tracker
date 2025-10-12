import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

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
          <h2>Gen {gen}</h2>

          {games && (
            <ul>
              {games
                .filter((game) => game.gen === gen)
                .map((filtered) => (
                  <li key={filtered._id}>
                    <Link to={`/games/${filtered._id}`}>{filtered.title}</Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
};

export default HomePage;
