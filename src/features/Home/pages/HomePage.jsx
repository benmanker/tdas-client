import { useState, useEffect } from "react";
import axios from "../../../lib/axios";
import MainGraph from "../components/MainGraph";

const HomePage = () => {
  const [mainGraphData, setMainGraphData] = useState();
  const [graphDataIsLoading, setGraphDataIsLoading] = useState(true);

  const getTestData = async () => {
    try {
      const res = await axios("/api/data");
      setMainGraphData(res.data);
      setGraphDataIsLoading(false);
      // console.log(res.data.daq.data);
    } catch (e) {
      // console.log(e);
    }
  };

  // fetch data on component mount
  useEffect(() => {
    getTestData();
  }, []);

  return (
    <div>
      {!graphDataIsLoading && <MainGraph mainGraphData={mainGraphData} />}
    </div>
  );
};

export default HomePage;
