import { useParams } from "react-router";

export default function AvariasDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Exibindo mais informações da avarias: {id}</h1>
    </div>
  );
}
