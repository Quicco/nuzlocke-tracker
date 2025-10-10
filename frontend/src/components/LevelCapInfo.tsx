interface Gym {
  name: string;
  levelCap: number;
}

interface Champion {
  name: string;
  levelCap: number;
}

interface Props {
  title: string;
  data: Gym[];
  champion: Champion | null;
}

export default function ({ title, data, champion }: Props) {
  return (
    <>
      <h2>{title}</h2>

      <ul>
        {champion 
        ? (
          <li>{`${champion.name}: ${champion.levelCap}`}</li>
        ) : (
          data.map((trainer, i) => (
            <li key={i}>{`${trainer.name}: ${trainer.levelCap}`}</li>
          ))
        )}
      </ul>
    </>
  );
}
