import React, { useState } from 'react';
import './FileUploader.css';

function FileUploader() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('No file chosen');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      setError("Please select a file.");
      return;
    }
    if (file.type !== 'text/csv') {
      setError("Invalid file type. Please select a CSV file.");
      return;
    }
    setError(null);
    // handle file upload here
    const formData = new FormData();
    formData.append('file', file);
    fetch('/api/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // handle successful upload
      })
      .catch(error => {
        console.error(error);
        // handle upload error
      });
  };

  return (
    <form className="file-uploader" onSubmit={handleSubmit}>
      <label>Patient Data:</label>
      <input type="file" accept=".csv" onChange={handleChange} />
      <p>{fileName}</p>
      {error && <p className="error">{error}</p>}
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUploader;
