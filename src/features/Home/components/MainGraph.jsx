import { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const MainGraph = (props) => {
  const [traces, setTraces] = useState([]);
  const [traces2, setTraces2] = useState([]);

  const generateTraces = () => {
    const timestampsAsLocale = props.mainGraphData.timestamps.map((timestamp) =>
      formatDate(new Date(timestamp))
    );

    // const generateTraces = () => {
    //   const timestampsAsLocale = props.mainGraphData.timestamps.map((timestamp) =>
    //     new Date(timestamp).toISOString()
    //   );
    // toLocaleTimeString()
    // toLocaleString()

    // console.log(timestampsAsLocale);

    // create power trace
    var traces = [];
    // traces.push({
    //   x: timestampsAsLocale,
    //   y: props.mainGraphData.powers,
    //   name: "Power",
    //   yaxis: "y2",
    //   marker: { color: "black" },
    // });

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
    var traces2 = [];
    traces2.push({
      x: timestampsAsLocale,
      y: props.mainGraphData.powers,
      name: "Power",
      marker: { color: "black" },
    });
    setTraces2(traces2);
  };

  // visual settings for the graph
  const layout = {
    width: 950,
    // autosize: true,

    title: "Time, Temperature, and Power",
    yaxis: { title: "Celsius" },
    xaxis: {
      // title: "Time",
      type: "date",
    },
    yaxis2: {
      title: "Watts",
      overlaying: "y",
      side: "right",
    },
    // height: 600,
    // width: 1200,
    margin: {
      t: 75,
      r: 290,
      b: 60,
    },
    legend: {
      // orientation: "h",
      x: 1.13,
      y: 1,
      traceorder: "normal",
      font: {
        family: "sans-serif",
        size: 12,
        color: "#000",
      },
    },
  };

  const layout2 = {
    width: 950,
    height: 150,
    // autosize: true,
    yaxis: { title: "Watts" },
    xaxis: {
      // title: "Time",
      type: "date",
    },
    margin: {
      t: 10,
      r: 290,
      b: 38,
    },
    showlegend: true,
    legend: {
      // orientation: "h",
      x: 1.13,
      y: 1,
      traceorder: "normal",
      font: {
        family: "sans-serif",
        size: 12,
        color: "#000",
      },
    },
  };

  // generate traces on component mount
  useEffect(() => {
    generateTraces();
  }, []);

  return (
    <div className="pt-1 bg-red-400 h-600 w-[1100px]">
      <Plot data={traces} layout={layout} className="" />
      <Plot data={traces2} layout={layout2} />
    </div>
  );
};

function formatDate(date) {
  const pad = (num) => num.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  const seconds = pad(date.getSeconds());

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

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
