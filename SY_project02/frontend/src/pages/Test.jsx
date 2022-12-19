import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../util/urls";

export const Test = () => {
  const [name, setName] = useState("");

  const sendRequest = async () => {
    await axios.get(SERVER_URL).then((res) => console.log(res));
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const submitId = () => {
    const post = {
      id: name,
    };
    axios(SERVER_URL, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  return (
    <div>
      <input onChange={handleChange} name="id" />
      <button onClick={submitId}>Submit</button>
      <h1>{name}</h1>
    </div>
  );
};
