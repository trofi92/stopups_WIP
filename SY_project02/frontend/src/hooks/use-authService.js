import axios from "axios";
import { SERVER_URL } from "../util/urls";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setUEmail,
  setUName,
  setUNickname,
  setUTelephone,
  setULogout,
} from "../features/userInfo/userInfo";
import { persistor } from "../store/index";

export const useFormCheck = () => {
  const formCheck = (e, regex, msg, state) => {
    regex(e);
    if (e.target.value === "" || e.target.value === undefined) {
      console.log(msg);
      return false;
    } else {
      state(e.target.value);
    }
  };
  return { formCheck };
};

export const useLoginService = () => {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const loginService = (e, email, password) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해주세요");
    } else if (password === "") {
      alert("비밀번호를 입력해주세요");
    } else {
      const post = {
        email,
        password,
      };
      try {
        axios
          .post(`${SERVER_URL}/auth/login`, {
            data: post,
          })
          .then((res) => {
            console.log("로그인 성공=>", res);
            //RTK 집어넣기
            dispatch(setUEmail(res?.data?.email));
            dispatch(setUName(res?.data?.name));
            dispatch(setUNickname(res?.data?.nickname));
            dispatch(setUTelephone(res?.data?.telephone));
            navigate("/", { replace: true });
            return;
          });
      } catch (err) {
        console.error(err);
        alert(
          "로그인이 실패했습니다. 정보가 올바른지 다시 확인해주세요"
        );
      }
    }
  };
  console.log(user);
  return { loginService };
};

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const purge = async () => {
    await persistor.purge();
  };
  const logout = async (e) => {
    e.preventDefault();
    try {
      axios.get(`${SERVER_URL}/auth/logout`);
      dispatch(setULogout());
      await purge();
      sessionStorage.clear();
      navigate("/", { replace: true });
      console.log("RTK user state =>", user);
    } catch (error) {
      console.error(error);
    }
  };
  return { logout };
};
