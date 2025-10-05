import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { useState, useEffect } from 'react'

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
      <h1>Level Caps for {gameData.title}</h1>

      {gameData?.gyms?.length > 0 ? (
        <ul>
          {gameData.gyms.map((gym, i) => (
            <li key={i}>{`${gym.name}: ${gym.levelCap}`}</li>
          ))}
        </ul>
      ) : (
        <p>No game data available</p>
      )}
    </>
  );
};

export default LevelCapPage;
