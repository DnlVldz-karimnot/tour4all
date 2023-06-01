import { Grid } from "@mui/material";
import { FC, useRef, useState } from "react";

interface Props {
  file: File | undefined;
  setFile: (file: File | undefined) => void;
  fileUrl: string | undefined;
  setFileUrl: (fileUrl: string | undefined) => void;
}

const FileUpload: FC<Props> = ({ file, setFile, fileUrl, setFileUrl }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [viewPdf, setViewPdf] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFile(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };
  return (
    <>
      <Grid item xs={12}>
        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />{" "}
        <button
          onClick={(e) => handleButtonClick(e)}
          className="btn btn-primary gap-2 _dm-fileInputButton"
        >
          <i className="pli-upload-to-cloud fs-5 me-2" />
          Agregar archivo pdf
        </button>
        {file && (
          <button
            type="button"
            className="m-2 btn btn-secondary gap-2 _dm-fileInputButton"
          >
            <i className="pli-file fs-5 me-2" />
            <span>{file.name}</span>
          </button>
        )}
      </Grid>
      {fileUrl && (
        <Grid item xs={12}>
          <button
            onClick={() => setViewPdf(!viewPdf)}
            type="button"
            className="btn btn-success mb-2"
          >
            <i className="pli-eye"></i>
            Ver pdf
          </button>
          {viewPdf && (
            <iframe
              src={fileUrl}
              style={{ width: "100%", height: "50vh" }}
            ></iframe>
          )}
        </Grid>
      )}
    </>
  );
};

export default FileUpload;
