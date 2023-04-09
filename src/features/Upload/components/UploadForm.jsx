import React, { useState } from "react";
import axios from "../../../lib/axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("/api/data/upload", formData);

      console.log(response.data);
      alert("File uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to upload the file");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".xlsx" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
