import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LevelCapInfo from '../components/LevelCapInfo.tsx';

const LevelCapPage = () => {
  const [gameData, setGameData] = useState(null);

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

          <LevelCapInfo title={'Gyms'} data={gameData.gyms} />
          <LevelCapInfo title={'EliteFour'} data={gameData.eliteFour} />
          <LevelCapInfo title={'Champion'} data={gameData.champion} />
          <LevelCapInfo title={'Kanto Gyms'} data={gameData.kantoGyms} />
          <LevelCapInfo title={'Final Boss'} data={gameData.finalBoss} />
        </div>
      )}
    </>
  );
};

export default LevelCapPage;
