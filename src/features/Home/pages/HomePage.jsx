import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../lib/axios";
import MainGraph from "../components/MainGraph";
import TimeAveragedTable from "../components/TimeAveragedTable";

const HomePage = () => {
  const [mainGraphData, setMainGraphData] = useState();
  const [graphDataIsLoading, setGraphDataIsLoading] = useState(true);
  const [timeAveragedTableData, setTimeAveragedTableData] = useState();

  const { testId } = useParams();

  const getTestData = async () => {
    try {
      const res = await axios("/api/data", { params: { testId: testId } });
      setMainGraphData(res.data.graph);
      setTimeAveragedTableData({
        sensorNames: res.data.graph.sensorNames,
        timeAveragedTable: res.data.timeAveragedTable,
      });
      setGraphDataIsLoading(false);
      // console.log(res.data);
    } catch (e) {
      // console.log(e);
    }
  };

  // fetch data on component mount
  useEffect(() => {
    setGraphDataIsLoading(true); // hide graph when user is coming from another test
    getTestData();
  }, [testId]);

  return (
    <div className="ml-52">
      {!graphDataIsLoading && <MainGraph mainGraphData={mainGraphData} />}
      {!graphDataIsLoading && (
        <TimeAveragedTable data={timeAveragedTableData} />
      )}
    </div>
  );
};

export default HomePage;
