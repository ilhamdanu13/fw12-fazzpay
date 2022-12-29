import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import React from "react";

const withAuth = (Components) => {
  return (props) => {
    const router = useRouter();
    const token = useSelector((state) => state.auth.token);
    React.useEffect(() => {
      if (!token) {
        router.replace("/login");
      }
    }, [token]);
    return <Components {...props} />;
  };
};

export default withAuth;
