import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "../../lib/axios";

const Navbar = () => {
  const [list, setList] = useState();

  const getFileList = async () => {
    const testlist = await axios("/api/data/testlist");
    console.log(testlist);
    setList(testlist.data);
  };

  useEffect(() => {
    getFileList();
  }, []);

  return (
    <>
      {/* <div className="h-[48px] bg-[#1e1e1e]">
          <div className=" text-white">Nav</div>
        </div> */}

      <div className="w-52 h-screen bg-gray-300 fixed">
        <ul className="flex flex-col items-start space-y-3 p-4">
          {list &&
            list?.map((listitem, index) => (
              <li key={index}>
                <a href="home/listitem._id" className="text-black">
                  {listitem.test_setup.title}
                </a>
              </li>
            ))}
        </ul>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
