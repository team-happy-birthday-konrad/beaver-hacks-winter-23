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

    // get the .env variable for the backend url
    const backendHost = process.env.REACT_APP_BACKEND_URL;
    const backendPort = process.env.REACT_APP_BACKEND_PORT;
    
    const backendUrl = backendHost + ':' + backendPort + '/api/';
    console.log(backendUrl);

    // check to make sure the backend url is running
    fetch(backendUrl + 'users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });


    fetch(backendUrl + 'patientData/upload', {
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
