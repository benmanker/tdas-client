import React from "react";

const TimeAveragedTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Power</th>
          {props.data.sensorNames.map((sensorName, index) => (
            <th key={index}>{sensorName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.timeAveragedTable.map((stepObject, index) => (
          <tr key={index}>
            <td>{stepObject.powerStepValue}</td>
            {stepObject.sensorAverages.map((sensorReading, index) => (
              <td key={index}>{Math.round(sensorReading)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TimeAveragedTable;
