import { useState, useEffect } from "react";
import Plot from "react-plotly.js";

// data []
// layout {}
// frames []
// config {}

const MainGraph = () => {
  const [data, setData] = useState([]);

  const layout = {
    width: 320,
    height: 240,
    title: "Main Graph",
    yaxis: { title: "Temperature (C)" },
    yaxis2: {
      title: "Power (W)",
      overlaying: "y",

      side: "right",
    },
  };

  useEffect(() => {
    setData([
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "red" },
      },
      {
        x: [1, 2, 3],
        y: [3, 7, 4],
        type: "scatter",
        mode: "lines+markers",
        marker: { color: "orange" },
        yaxis: "y2",
      },
    ]);
  }, []);

  return <Plot data={data} layout={layout} />;
};

export default MainGraph;
