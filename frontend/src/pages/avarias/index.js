import { useParams } from "react-router";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./GrupAvariasStyle.css";
import boxbroken from "../../assets/boxbroken.png";
import agendadopng from "../../assets/agendadopng.png";
import nfpng from "../../assets/nfpng.png";
import pagamentopng from "../../assets/pagamentopng.png";
import finalizadopng from "../../assets/finalizadopng.png";

export default function AvariasDetails() {
  const { id } = useParams(); //Pegando parametro da URL
  const [avarias, setAvarias] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:9090/grup/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setAvarias(data);
      });
  }, [id]); //Fazendo busca no banco

  //Alterando style conforme dados recebidos
  const [styleg, setStyleg] = useState("not-complet");
  const ngrup = useRef();
  useLayoutEffect(() => {
    if (ngrup.current.value === "") {
      setStyleg("not-complet");
    } else {
      setStyleg("complet");
    }
  }, []);

  const [stylenf, setStylenf] = useState("not-complet");
  const nf = useRef();
  useLayoutEffect(() => {
    if (nf.current.value === "") {
      setStylenf("not-complet");
    } else {
      setStylenf("complet");
    }
  }, []);

  const [styleagn, setStyleagn] = useState("not-complet");
  const agn = useRef();
  useLayoutEffect(() => {
    if (agn.current.value === "") {
      setStyleagn("not-complet");
    } else {
      setStyleagn("complet");
    }
  }, []);

  const [stylepg, setStylepg] = useState("not-complet");
  const pg = useRef();
  useLayoutEffect(() => {
    if (pg.current.value === "") {
      setStylepg("not-complet");
    } else {
      setStylepg("complet");
    }
  }, []);

  const [stylefin, setStylefin] = useState("not-complet");
  const situacao = useRef();
  useLayoutEffect(() => {
    if (pg.current.value === "") {
      situacao.current.value = "Pendente";
      setStylefin("not-complet");
    } else {
      situacao.current.value = "Concluído";
      setStylefin("complet");
    }
  }, []);

  return (
    <>
      <div>
        <h1>GRUPO N°: {id}</h1>
      </div>
      <div className="container-status">
        <div className="status">
          <img src={boxbroken} alt="boxbroken" className={styleg} />
          <p>Grupo de avarias</p>
        </div>
        <div className="status">
          <img src={nfpng} alt="nfpng" className={stylenf} />
          <p>Confronto de espelho da NFD</p>
        </div>
        <div className="status">
          <img src={agendadopng} alt="agendado" className={styleagn} />
          <p>Agendamento da coleta</p>
        </div>
        <div className="status">
          <img src={pagamentopng} alt="pagamento" className={stylepg} />
          <p>Aguardando tratativa</p>
        </div>
        <div className="status">
          <img src={finalizadopng} alt="finalizado" className={stylefin} />
          <p>Processo finalizado</p>
        </div>
      </div>
      <div className="container-table-process">
        <table className="table-process">
          <thead>
            <tr>
              <th className="conteudo-col">Código</th>
              <th className="conteudo-col">Descrição</th>
              <th className="conteudo-col">Quantidade</th>
              <th className="conteudo-col">Valor</th>
            </tr>
          </thead>
          <tbody>
            {avarias.map((avarias) => {
              return (
                <tr>
                  <td className="conteudo" key={avarias.VALORDOGRUPO}>
                    {avarias.CODPROD}
                  </td>
                  <td className="conteudo">{avarias.DESCRICAO}</td>
                  <td className="conteudo">{avarias.QTORIGINAL}</td>
                  <td>
                    {avarias.VALORDOGRUPO.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container-form">
        <div className="body-form">
          <form>
            <div className="fields">
              <label>N° do Grupo: </label>
              <input type="text" value={id} ref={ngrup} />
            </div>
            <div className="fields">
              <label>Fornecedor: </label>
              <input type="text" value="ELETRO ZAGONEL LTDA" />
            </div>
            <div className="fields">
              <label>E-mail: </label>
              <input type="text" value="repesentante@gmail.com" />
            </div>
            <div className="fields">
              <label>Tratativa: </label>
              <input type="text" value="" ref={pg} />
            </div>
            <div className="fields">
              <label>NFD: </label>
              <input type="text" value="34243" ref={nf} />
            </div>
            <div className="fields">
              <label>Data da coleta: </label>
              <input type="text" value="10/06/2023" ref={agn} />
            </div>
            <div className="fields">
              <label>Situação: </label>
              <input type="text" ref={situacao} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
