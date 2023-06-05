import { useParams } from "react-router";
import { useState, useEffect } from "react";
import "./GrupAvariasSyle.css";
import boxbroken from "../../assets/boxbroken.png";
import agendadopng from "../../assets/agendadopng.png";
import trativapng from "../../assets/tratativapng.png";
import nfpng from "../../assets/nfpng.png";
import pagamentopng from "../../assets/pagamentopng.png";
import finalizadopng from "../../assets/finalizadopng.png";

export default function AvariasDetails() {
  const { id } = useParams();
  const [avarias, setAvarias] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9090/grup/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAvarias(data);
      });
  }, [id]);

  return (
    <>
      <div>
        <h1>GRUPO N°: {id}</h1>
      </div>
      <div className="container-status">
        <div className="status">
          <img src={boxbroken} alt="boxbroken" />
          <p>Grupo de avarias</p>
        </div>
        <div className="status">
          <img src={trativapng} alt="tratativapng" />
          <p>Combinar tratativa</p>
        </div>
        <div className="status">
          <img src={nfpng} alt="nfpng" />
          <p>Confronto de espelho da NFD</p>
        </div>
        <div className="status">
          <img src={agendadopng} alt="agendado" />
          <p>Agendamento da coleta</p>
        </div>
        <div className="status">
          <img src={pagamentopng} alt="pagamento" />
          <p>Aguardando tratativa</p>
        </div>
        <div className="status">
          <img src={finalizadopng} alt="finalizado" />
          <p>Processo finalizado</p>
        </div>
      </div>
      <div className="container-table">
        <table>
          <thead>
            <tr>
              <th className="conteudo-col">Código</th>
              <th className="conteudo-col">Descrição</th>
              <th className="conteudo-col">Quantidade</th>
              <th className="conteudo-col">Observação</th>
            </tr>
          </thead>
          <tbody>
            {avarias.map((avarias) => {
              return (
                <tr>
                  <td className="conteudo" key={avarias.DATAGRUPO}>
                    {avarias.CODPROD}
                  </td>
                  <td className="conteudo">{avarias.CODFORNEC}</td>
                  <td className="conteudo">{avarias.QT}</td>
                  <td className="conteudo">{avarias.TIPOAVARIA}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
