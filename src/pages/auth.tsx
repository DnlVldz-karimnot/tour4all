import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import Login from ".";
import { CircularProgress } from "@mui/material";

const withAuth = (WrappedComponent: React.FC<any>) => {
  const Wrapper = (props: any) => {
    const { login, isAuthenticated } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      login();
      setLoading(false);
    }, []);

    if (loading) {
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
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : <Login />;
  };

  return Wrapper;
};

export default withAuth;
