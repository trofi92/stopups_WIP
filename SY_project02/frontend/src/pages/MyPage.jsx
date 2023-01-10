import { Navigate } from "react-router-dom";
import { Main } from "./Main/Main";
import { useSelector } from "react-redux";
const MyPage = () => {
  const isLoggedIn = false;
  const user = useSelector((state) => state.user);

  if (!isLoggedIn && user.email === "") {
    return <Navigate to="/login" replace={true} />;
  }
  return <Main />;
};

export default MyPage;
