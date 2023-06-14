import React, { useEffect, useState } from "react";
import "./monitoringStyles.css";
import Loading from "../components/Loading";
const dayjs = require("dayjs");

export default function Monitoring() {
  const [avarias, setAvarias] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9090/avarias")
      .then((res) => res.json())
      .then((data) => {
        setAvarias(data);
        setRemoveLoading(true);
      });
  }, []);

  return (
    <>
      <div className="background">
        <h1>PROCESSOS</h1>
        <div className="input-wrapper"></div>
        <div className="container-table">
          <table>
            <thead>
              <tr>
                <th className="conteudo-col">Data</th>
                <th className="conteudo-col">Código Grupo</th>
                <th className="conteudo-col">Fornecedor</th>
                <th className="conteudo-col">Coleta Agendada</th>
                <th className="conteudo-col">Tratativa</th>
                <th className="conteudo-col">Valor</th>
              </tr>
            </thead>
            <tbody>
              {avarias.map((avarias) => {
                return (
                  <tr>
                    <td key={avarias.CODGRUPOAVARIA}>
                      <a
                        href={`/grup/${avarias.CODGRUPOAVARIA}`}
                        className="conteudo"
                      >
                        {dayjs(avarias.DATAGRUPO).format("DD/MM/YYYY")}
                      </a>
                    </td>
                    <td>
                      <a
                        href={`/grup/${avarias.CODGRUPOAVARIA}`}
                        className="conteudo"
                      >
                        {avarias.CODGRUPOAVARIA}
                      </a>
                    </td>
                    <td>
                      <a
                        href={`/grup/${avarias.CODGRUPOAVARIA}`}
                        className="conteudo"
                      >
                        {avarias.FORNECEDOR}
                      </a>
                    </td>
                    <td>
                      <a
                        href={`/grup/${avarias.CODGRUPOAVARIA}`}
                        className="conteudo"
                      >
                        AGUARDANDO
                      </a>
                    </td>
                    <td>
                      <a
                        href={`/grup/${avarias.CODGRUPOAVARIA}`}
                        className="conteudo"
                      >
                        AGUARDANDO
                      </a>
                    </td>
                    <td>
                      <a
                        href={`/grup/${avarias.CODGRUPOAVARIA}`}
                        className="conteudo"
                      >
                        {avarias.VALORDOGRUPO.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!removeLoading && <Loading />}
        </div>
      </div>
    </>
  );
}
