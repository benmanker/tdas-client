import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-[48px] bg-[#1e1e1e]">
        <div className=" text-white">Nav</div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
