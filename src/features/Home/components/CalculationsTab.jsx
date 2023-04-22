import React from "react";
import TimeAveragedTable from "./TimeAveragedTable";

const CalculationsTab = (props) => {
  return (
    <>
      <div>CalculationsTab</div>
      <TimeAveragedTable data={props.timeAveragedTableData} />
    </>
  );
};

export default CalculationsTab;
