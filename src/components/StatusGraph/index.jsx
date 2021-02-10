import React, { useEffect, useState } from "react";
import { VictoryPie } from "victory";
import { TotalViews } from "./style";

const StatusGraph = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      setTotal(
        data
          .map(({ acessos }) => {
            return +acessos;
          })
          .reduce((a, b) => {
            return a + b;
          })
      );

      const dataGraph = data.map(({ title, acessos }) => {
        return {
          name: title,
          views: +acessos,
        };
      });

      console.log();
      setGraph(dataGraph);
    }
  }, [data]);

  const colorScale = [
    "#928C00",
    "#928C00",
    "#A49800",
    "#B6A300",
    "#C8AC00",
    "#DBB500",
    "#EDBC0D",
    "#F1C21D",
    "#DCBD50",
    "#CDBB7D",
    "#C5BDA3",
    "#C3C3C3",
  ];
  return (
    <section>
      <TotalViews>Total de Acessos: {total}</TotalViews>
      <VictoryPie
        data={graph}
        x="name"
        y="views"
        style={{
          data: { fillOpacity: 0.9, stroke: "#f1c21d", strokeWidth: 1 },
          labels: { fontSize: 18, fill: "#f1c21d" },
        }}
      />
    </section>
  );
};

export default StatusGraph;
