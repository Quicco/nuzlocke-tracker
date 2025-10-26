interface Opponent {
  name: string;
  levelCap: number;
}

interface Props {
  title: string;
  data: Opponent[];
}

export default function ({ title, data }: Props) {

  function normalizeString(str: string): string {
    return str.replace(/([A-Z])/g, ' $1') // gymLeader becomes gym Leader
    .replace(/^./, char => char.toUpperCase()) // capitalized the first char -> Gym Leader
  }

  const correctedStr = normalizeString(title);

  return (
    <>
      {data.length > 0 && (
        <>
          <h2>{correctedStr}</h2>

          <ul className="levelCap-list">
            {data.map((trainer, i) => (
              <li key={i}>{`${trainer.name}: ${trainer.levelCap}`}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
