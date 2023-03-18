import { useState, useEffect } from "react";
import axios from "../../../lib/axios";
import MainGraph from "../components/MainGraph";

const HomePage = () => {
  const [isLoading, setIsloading] = useState(true);
  const [testData, setTestData] = useState();

  const getTestData = async () => {
    try {
      const res = await axios("/api/data");
      setTestData(res.data);
      // console.log(res.data.daq.data);
      setIsloading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getTestData();
  }, []);

  return (
    <div className="">
      {!isLoading && <MainGraph testData={testData} isLoading={isLoading} />}
    </div>
  );
};

export default HomePage;
