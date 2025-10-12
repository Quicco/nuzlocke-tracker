interface Opponent {
  name: string;
  levelCap: number;
}

interface Props {
  title: string;
  data: Opponent[];
}

export default function ({ title, data }: Props) {
  return (
    <>
      {data.length > 0 && (
        <>
          <h2>{title}</h2>

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
