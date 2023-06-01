import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  onFileUploaded: (file: File) => void;
  children?: React.ReactNode;
}

const ImageDropzone: React.FC<Props> = ({ onFileUploaded, children }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onFileUploaded(acceptedFiles[0]);
      }
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      image: [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/bmp",
        "image/webp",
      ],
    },
    multiple: false,
  });

  return (
    <div className="col-12 mt-3">
      <div
        {...getRootProps()}
        className="dropzone text-center rounded p-5"
        style={{ border: "1px solid gray" }}
      >
        <input {...getInputProps()} />
        <div className="dz-message m-0">
          <div className="text-muted text-opacity-25">
            <i className="demo-psi-upload-to-cloud display-2"></i>
          </div>
          <h4>Agregue la imágen de la colección</h4>
          <p className="text-muted mb-0">
            {isDragActive
              ? "Suelte la imagen aquí"
              : "or dé click para agregar manualmente"}
          </p>
          <div className="d-flex justify-content-center">{children}</div>
        </div>
      </div>
      <div className="fallback" style={{ display: "none" }}>
        <input name="file" type="file" multiple />
      </div>
    </div>
  );
};

export default ImageDropzone;
