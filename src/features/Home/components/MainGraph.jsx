import { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const MainGraph = (props) => {
  const [traces, setTraces] = useState([]);

  const generateTraces = () => {
    const timestampsAsLocale = props.mainGraphData.timestamps.map((timestamp) =>
      new Date(timestamp).toLocaleTimeString()
    );

    // create power trace
    var traces = [];
    traces.push({
      x: timestampsAsLocale,
      y: props.mainGraphData.powers,
      name: "Power",
      yaxis: "y2",
      marker: { color: "black" },
    });

    // create temperature sensor traces
    for (var i = 0; i < props.mainGraphData.sensorNames.length; i++) {
      traces.push({
        x: timestampsAsLocale,
        y: props.mainGraphData.sensorData[i],
        name: props.mainGraphData.sensorNames[i],
        marker: { color: colors[i - 1] },
      });
    }

    // set state with new traces
    setTraces(traces);
  };

  // visual settings for the graph
  const layout = {
    title: "Time, Temperature, and Power",
    yaxis: { title: "Temperature (C)" },
    xaxis: { title: "Time (S)" },
    yaxis2: {
      title: "Power (W)",
      overlaying: "y",
      side: "right",
    },
    height: 600,
    width: 1200,
    margin: {
      t: 70,
      b: 70,
      l: 70,
      pad: 2,
    },
  };

  // generate traces on component mount
  useEffect(() => {
    generateTraces();
  }, []);

  return (
    <div className="pt-1">
      <Plot data={traces} layout={layout} />
    </div>
  );
};

export default MainGraph;

// colors for graph lines
const colors = [
  "#6e75ed",
  "#7e3250",
  "#44680",
  "#1597a8",
  "#33eae0",
  "#b61ee8",
  "#c79247",
  "#fb0534",
  "#b2dad2",
  "#19c6f6",
  "#e1667",
  "#d451f4",
  "#6c690e",
  "#229163",
  "#edec98",
  "#a0f764",
  "#a22093",
  "#b99404",
  "#928db6",
  "#91c4bc",
  "#bbd092",
  "#96b922",
  "#136c24",
  "#c8a61",
  "#998346",
  "#9a3801",
  "#fe551c",
  "#279c2",
  "#7e6466",
  "#5fa907",
  "#f4dca6",
  "#77837f",
  "#719703",
  "#121a12",
  "#268856",
  "#8dc0b6",
  "#99d261",
  "#7a2c62",
  "#6e75ed",
  "#7e3250",
  "#44680",
  "#1597a8",
  "#33eae0",
  "#b61ee8",
  "#c79247",
  "#fb0534",
  "#b2dad2",
  "#19c6f6",
  "#e1667",
  "#d451f4",
  "#6c690e",
  "#229163",
  "#edec98",
  "#a0f764",
  "#a22093",
  "#b99404",
  "#928db6",
  "#91c4bc",
  "#bbd092",
  "#96b922",
  "#136c24",
  "#c8a61",
  "#998346",
  "#9a3801",
  "#fe551c",
  "#279c2",
  "#7e6466",
  "#5fa907",
  "#f4dca6",
  "#77837f",
  "#719703",
  "#121a12",
  "#268856",
  "#8dc0b6",
  "#99d261",
  "#7a2c62",
];