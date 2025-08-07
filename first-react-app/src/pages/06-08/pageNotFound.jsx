import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <>
      <h1>Error 404: Page not found</h1>
      <p style={{font:"12px"}}>
        You will be redirected to the homepage in {countdown} second{countdown !== 1 ? "s" : ""}.
      </p>
    </>
  );
};

export default PageNotFound;
