import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "../utils/urls";
import { useSelector } from "react-redux";

export const Test = () => {
  const [name, setName] = useState("");
  const user = useSelector((state) => state.user);

  const post = {
    email: user.email,
  };

  const sendRequest = async () => {
    await axios
      .put(
        `${SERVER_URL}/page/test`,
        { data: post },
        { withCredentials: true }
      )
      .then((res) => console.log(res?.data));
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const submitId = () => {
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
