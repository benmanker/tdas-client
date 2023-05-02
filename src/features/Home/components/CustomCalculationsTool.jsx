import { useState, useEffect } from "react";
import { Select, Option, Checkbox, Button } from "@material-tailwind/react";

const CustomCalculationsTool = (props) => {
  const [calculations, setCalculations] = useState([]);

  useEffect(() => {
    setCalculations([
      {
        id: 1,
        operator: "max",
        columns: ["T_H1_1/101", "T_H1_2/102", "T_H2_2/103"],
      },
    ]);
  }, []);

  return (
    <div className="m-[7px] bg-white border-x-[1px] border-b-[1px] border-t-[5px] border-gray-400 mt-[7px]">
      <div className="border-b-[1px] border-gray-400 h-[40px] font-semibold pt-[10px] pl-[10px] text-sm text-gray-800 ">
        Custom Calculations
      </div>
      <div className="p-[7px]">
        <div className="text-sm p-[4px]">
          {calculations.map((calculation, index) => (
            <div key={index}>
              <div className="w-72">
                <Select label="Select Operation">
                  <Option>Max Temp</Option>
                  <Option>Min Temp</Option>
                  <Option>Average Temp</Option>
                  <Option>Difference</Option>
                </Select>
              </div>
              <div className="flex flex-wrap gap-1">
                {props.data.sensorNames.map((sensorName, index) => (
                  <Checkbox label={sensorName} />
                ))}
              </div>
              <br />
              <Button size="sm">Save</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCalculationsTool;
