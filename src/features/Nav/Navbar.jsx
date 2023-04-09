import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "../../lib/axios";

const Navbar = () => {
  const [list, setList] = useState([]);

  const getFileList = async () => {
    const testlist = await axios("/api/data/testlist");
    // console.log(testlist);
    setList(testlist.data);
  };

  useEffect(() => {
    getFileList();
  }, []);

  return (
    <>
      <div className="h-[48px] bg-[#1e1e1e]">
        <div className=" text-white">
          <Link to={{ pathname: "/upload" }} className="">
            Upload
          </Link>
        </div>
      </div>

      <div className="w-52 h-screen bg-gray-300 fixed">
        <ul className="flex flex-col items-start space-y-3 p-4">
          {list &&
            list?.map((listitem, index) => (
              <li key={index}>
                <Link
                  to={{ pathname: "/test/" + listitem._id }}
                  className="text-black"
                >
                  {listitem.setup.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
