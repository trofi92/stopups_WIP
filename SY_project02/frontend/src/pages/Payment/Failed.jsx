import React from "react";
import { Link } from "react-router-dom";

export const Failed = () => {
  return (
    <div>
      <div>fail</div>
      <Link to="/">
        <button>to main</button>
      </Link>
    </div>
  );
};
