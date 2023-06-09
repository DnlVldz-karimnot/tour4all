import { CircularProgress } from "@mui/material";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  );
};

export default LoadingPage;
