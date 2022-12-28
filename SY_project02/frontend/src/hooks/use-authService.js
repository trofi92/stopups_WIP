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
} from "../features/userInfo/userInfoSlice";
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
          .post(
            `${SERVER_URL}/auth/login`,
            {
              data: post,
            },
            { withCredentials: true }
          )
          .then((res) => {
            console.log("로그인 성공=>", res);
            //RTK 집어넣기
            dispatch(setUEmail(res?.data?.email));
            dispatch(setUName(res?.data?.name));
            dispatch(setUNickname(res?.data?.nickname));
            dispatch(setUTelephone(res?.data?.telephone));

            alert(post.email + "님 환영합니다.");

            navigate("/", { replace: true });
            return;
          });
      } catch (err) {
        console.error(err);
        alert(
          "아이디 또는 비밀번호 오류입니다. 정확한 아이디 또는 비밀번호를 입력해주시길 바립니다."
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
      await axios.post(
        `${SERVER_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(setULogout());
      await purge();
      sessionStorage.clear();
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
      console.log("RTK user state =>", user);
    }
  };
  return { logout };
};
