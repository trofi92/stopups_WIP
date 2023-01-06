import { useEffect, useState } from "react";
import axios from "axios";

function App({ children }) {
  const [error, setError] = useState(null);
  useEffect(() => {
    let interceptorId;

    const setupAxiosInterceptor = () => {
      interceptorId = axios.interceptors.response.use(
        function (response) {
          return response;
        },
        function (error) {
          console.log(error);
          setError(error);
          Promise.reject(error);
          return; /* alert("알 수 없는 문제가 발생했습니다. 다시 시도해주세요."); */
        }
      );
    };
    console.log(error);
    setupAxiosInterceptor();

    return () => {
      axios.interceptors.response.eject(interceptorId);
    };
  }, []);
  //404페이지 만들기
  // if (error) {
  //   return <div>Error: 문제가 발생했습니다. </div>;
  // }
  return children;
}

export default App;
