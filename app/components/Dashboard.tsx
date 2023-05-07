"use client";
import axios from "axios";
import { useState } from "react";

const Dashboard = () => {
  const [fileName, setFileName] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [uploading, setUploading] = useState<boolean>(false);
  const handleUpload = async () => {
    setUploading(true);
    try {
      if (!file) return;
      const { data } = await axios.post("/api/file", file);
      console.log(data);
    } catch (error: any) {
      console.log(error.response?.data);
    }
    setUploading(false);
  };
  return (
    <div className="absolute left-0 top-0 w-[30%] h-[100vh] bg-black">
      <label>
        <input
          type="file"
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0];
              setFileName(URL.createObjectURL(file));
              setFile(file);
            }
          }}
        />
      </label>

      <button className="text-white" onClick={handleUpload}>
        check
      </button>
    </div>
  );
};

export default Dashboard;
