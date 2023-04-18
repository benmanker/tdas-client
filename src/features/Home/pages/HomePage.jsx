import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../../lib/axios";
import MainGraph from "../components/MainGraph";
import TimeAveragedTable from "../components/TimeAveragedTable";
import { BsFillTrash3Fill } from "react-icons/bs";
import RemoveTestToast from "../components/removeTestToast";

const HomePage = () => {
  const [mainGraphData, setMainGraphData] = useState();
  const [testDataIsLoading, setTestDataIsLoading] = useState(true);
  const [timeAveragedTableData, setTimeAveragedTableData] = useState();
  const [testInfo, setTestInfo] = useState();
  const [testIsSelected, setTestIsSelected] = useState(true);
  const [testExists, setTestExists] = useState(true);

  const { testId } = useParams();

  const navigate = useNavigate();

  const getTestData = async () => {
    try {
      const res = await axios.get("/api/data", { params: { testId: testId } });
      if (res.data.error) {
        setTestExists(false);
        setTestDataIsLoading(false);
        return;
      }
      setTestExists(true);
      setTestInfo(res?.data?.info);
      setMainGraphData(res?.data?.graph);
      setTimeAveragedTableData({
        sensorNames: res?.data?.graph?.sensorNames,
        timeAveragedTable: res?.data?.timeAveragedTable,
      });
      setTestDataIsLoading(false);
      console.log(res?.data);
    } catch (e) {
      // console.log(e);
    }
  };

  const removeTestById = async (testId) => {
    try {
      const res = await axios.post("/api/data/remove", {
        params: { testId: testId },
      });
      alert("Removed " + testInfo?.setup?.title);
      navigate("/test/");
    } catch (e) {
      if (e.response.status == 400)
        alert("Could not remove " + testInfo?.setup?.title);
    }
    getTestData();
  };

  // fetch data on component mount
  useEffect(() => {
    if (testId) {
      setTestExists(true);
      setTestDataIsLoading(true);
      setTestIsSelected(true);
      getTestData();
    } else {
      console.log(testId);
      setTestIsSelected(false);
      setTestDataIsLoading(false);
    }
  }, [testId]);

  // useEffect(() => {
  //   console.log(testIsSelected);
  // }, [testIsSelected]);

  return (
    <div className="m-0">
      {!testIsSelected && !testDataIsLoading && <div>Please Select a Test</div>}
      {testDataIsLoading && testIsSelected && <div>loading test...</div>}{" "}
      {!testDataIsLoading && testIsSelected && testExists && (
        <>
          <div className="flex">
            Title: {testInfo?.setup?.title}
            <BsFillTrash3Fill
              className="cursor-pointer mt-1 ml-3"
              onClick={() => removeTestById(testId)}
            />
          </div>
        </>
      )}
      {!testDataIsLoading && testIsSelected && testExists && (
        <MainGraph mainGraphData={mainGraphData} />
      )}
      {!testDataIsLoading && testIsSelected && testExists && (
        <TimeAveragedTable data={timeAveragedTableData} />
      )}
      {!testExists && testIsSelected && (
        <div>Could not find a testId: {testId} </div>
      )}
    </div>
  );
};

export default HomePage;
