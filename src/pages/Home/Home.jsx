import { useState, useEffect } from "react";
import axios from "../../lib/axios";

const Home = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios("/api/data");
      setData(JSON.stringify(res.data));
    } catch (e) {
      //   console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{data}</div>;
};

export default Home;
