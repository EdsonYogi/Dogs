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
      setGraph(dataGraph);
    }
  }, [data]);

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
