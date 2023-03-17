import { useState, useEffect } from "react";
import axios from "../../../lib/axios";
import MainGraph from "../components/MainGraph";

const HomePage = () => {
  const [data, setData] = useState();

  // fetch the data, update the the "data" state above, and console log the data
  const getData = async () => {
    try {
      const res = await axios("/api/data");
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // on page load, fetch data
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <pre className="font-medium text-gray-800">
        {JSON.stringify(data, null, 2)}
      </pre>
      <div className="h-100 w-500">
        <MainGraph />
      </div>
    </>
  );
};

export default HomePage;
