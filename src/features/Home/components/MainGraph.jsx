import { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const MainGraph = (props) => {
  const [data, setData] = useState([]);

  const generateData = () => {
    var arrayOfObjects = [];
    // should be length -1:
    for (var i = 1; i < props.testData?.daq?.data.length - 2; i++) {
      var obj = {
        x: props.testData?.daq?.data[0],
        y: props.testData?.daq?.data[i],
        type: "scatter",
        marker: { color: Math.floor(Math.random() * 16777215).toString(16) },
      };
      arrayOfObjects.push(obj);
    }
    const powerObj = {
      x: props.testData?.daq?.data[0],
      y: props.testData?.daq?.data[props.testData?.daq?.data.length - 1],
      type: "scatter",
      yaxis: "y2",
      marker: { color: "black" },
    };
    arrayOfObjects.push(powerObj);
    setData(arrayOfObjects);
  };

  const layout = {
    height: 600,
    width: 1200,
    title: "Time, Temperature, and Power",
    yaxis: { title: "Temperature (C)" },
    xaxis: { title: "Time (S)" },
    yaxis2: {
      title: "Power (W)",
      overlaying: "y",

      side: "right",
    },
  };

  useEffect(() => {
    generateData();
  }, []);

  return !props.isLoading && <Plot data={data} layout={layout} />;
};

export default MainGraph;

// data []
// layout {}
// frames []
// config {}
