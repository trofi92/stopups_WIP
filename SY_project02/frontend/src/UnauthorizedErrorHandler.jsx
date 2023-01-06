import React from "react";

function UnauthorizedErrorHandler() {
  // Listen for 500 responses
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const handle500 = (event) => {
      if (event.target.status === 500) {
        setError(event.target.responseText);
      }
    };
    window.addEventListener("error", handle500);
    return () => {
      window.removeEventListener("error", handle500);
    };
  }, []);

  // Display a message or trigger a specific action when a 500 error occurs
  if (error) {
    // For example, you could trigger an automatic re-login by calling a login function here
    return <div>Error: {error}</div>;
  }

  return null;
}

export default UnauthorizedErrorHandler;
