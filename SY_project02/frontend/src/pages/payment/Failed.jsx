import React from "react";
import { Link } from "react-router-dom";
import { useTokenChecker } from "../../hooks/use-token-checker";

export const Failed = () => {
  const { authRequest } = useTokenChecker("/payment/Failed");
  authRequest();

  return (
    <div>
      <div>fail</div>
      <Link to="/">
        <button>to main</button>
      </Link>
    </div>
  );
};
