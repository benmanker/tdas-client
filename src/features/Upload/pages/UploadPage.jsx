import React from "react";
import UploadForm from "../components/UploadForm";

const UploadPage = () => {
  return (
    <div className="ml-52">
      <br/>
      <div class = "font-black text-3xl">Upload Form</div>
      <br/>
     <p> Upload a CSV or XLSV file of data from the ThermaVent sensors. </p>
      <br/>
      <UploadForm />
    </div>
  );
};

export default UploadPage;
