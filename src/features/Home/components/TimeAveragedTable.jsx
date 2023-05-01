import React from "react";

const TimeAveragedTable = (props) => {
  const colWidth = "100px";
  return (
    <div className="p-[7px]">
      <table className="table-fixed text-sm ">
        <thead>
          <tr className="">
            <th className="font-normal px-1">Power</th>
            {props.data.sensorNames.map((sensorName, index) => (
              <th key={index} className="font-normal px-1">
                {sensorName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.timeAveragedTable.map((stepObject, index) => (
            <tr key={index}>
              <td className="px-1">{stepObject.powerStepValue}</td>
              {stepObject.sensorAverages.map((sensorReading, index) => (
                <td className="px-1" key={index}>
                  {Math.round(sensorReading)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TimeAveragedTable;
