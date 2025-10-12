import { Link } from 'react-router';

interface Props {
  gen: number;
  data: Game[];
}

interface Game {
    _id: string;
    title: string;
    gen: number;
}

function GameCard({ gen, data }: Props) {
  return (
    <div>
      <h2>Gen {gen}</h2>

      <ul className='games-list'>
        {data
          .filter((game) => game.gen === gen)
          .map((filtered) => (
            <li key={filtered._id}>
              <Link to={`/games/${filtered._id}`}>{filtered.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default GameCard;
