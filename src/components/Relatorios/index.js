import React, { useContext, useState, useEffect } from "react";
import DataContext from "../DataContext";
import Chart from "react-google-charts";
import { consultaImobilizado } from "../ProdutoServico";

export const options = {
  title: "Desempenho Anual",
  hAxis: { title: "Ano", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

function Relatorios() {
  const [valorAno, setImobilizado] = useState(0);
  const context = useContext(DataContext);

  // Obter os dados do contexto
  const data = [
    context.state.rotulos,
    context.state.ano2013,
    context.state.ano2014,
    context.state.ano2015,
    context.state.ano2016,
  ];
  useEffect(() => {
    getImobilizado();
  }, []);
  function setAno(ano) {
    context.setState({
      ...context.state,
      ano2016: ano,
    });
  }
  function getImobilizado() {
    consultaImobilizado()
      .then((response) => {
        console.log(response.data);
        setImobilizado(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <>
      <h5> Relatorios </h5>
      <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      <p> {context.state.number}</p>
      <p> {context.state.text}</p>
      <div className="button-container">
        <button onClick={() => setAno(["2016", 500, valorAno])}>
          Atualiza
        </button>
      </div>
    </>
  );
}
export default Relatorios;
