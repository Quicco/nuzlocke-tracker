import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const LevelCapPage = () => {
  const [gameData, setGameData] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchLevelCaps = async () => {
      try {
        const res = await fetch(`http://localhost:5001/games/${id}`);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setGameData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLevelCaps();
  }, [id]);

  return (
    <>
      {gameData && (
        <div className="game-info">
          <h1>Level Caps for {gameData.title}</h1>

          <h2>Gyms:</h2>
          <ul>
            {gameData.gyms.map((gym, i) => (
              <li key={i}>{`${gym.name}: ${gym.levelCap}`}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default LevelCapPage;