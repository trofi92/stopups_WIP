import axios from "axios";
import { SERVER_URL } from "../utils/urls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setUEmail,
  setUName,
  setUNickname,
  setUTelephone,
  setULogout,
} from "../features/userInfo/userInfoSlice";
import { clearCart } from "../features/cart/cartSlice";
import { persistor } from "../store/index";

export const useFormCheck = () => {
  const formCheck = (e, regex, msg, state) => {
    regex(e);
    if (e.target.value === "" || e.target.value === undefined) {
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

  const loginService = (e, email, password) => {
    e.preventDefault();
    if (email === "") {
      alert("이메일을 입력해 주세요.");
    } else if (password === "") {
      alert("비밀번호를 입력해 주세요.");
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
            if (res === undefined) {
              return alert(
                "아이디 또는 비밀번호 오류입니다. 정확한 아이디 또는 비밀번호를 입력해주시길 바립니다."
              );
            }
            dispatch(setUEmail(res?.data?.email));
            dispatch(setUName(res?.data?.name));
            dispatch(setUNickname(res?.data?.nickname));
            dispatch(setUTelephone(res?.data?.telephone));

            alert(post.email + "님 환영합니다.");

            return navigate("/", { replace: true });
          });
      } catch (err) {
        alert("문제가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };
  return { loginService };
};

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const purge = async () => {
    await persistor.purge("cart", "user");
  };
  const logout = async () => {
    try {
      await axios.post(
        `${SERVER_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(setULogout());
      dispatch(clearCart());
      sessionStorage.clear();
      await purge();
      navigate("/", { replace: true, state: null });
    } catch (error) {
      alert("문제가 발생했습니다. 다시 시도해주세요.");
    }
  };
  return { logout };
};

export const useDelete = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Delete = (e, email, password) => {
    e.preventDefault();

    if (password === "") {
      alert("비밀번호를 입력해 주세요!!");
    } else {
      const post = { email, password };

      try {
        axios
          .post(`${SERVER_URL}/myInfo/deleteUser`, {
            data: post,
          })
          .then((res) => {
            if (res.status === 200) {
              const yes = prompt(
                `정말 탈퇴를 원하시면 "예" 를 입력 해주세요!`
              );
              if (yes === "예") {
                dispatch(setULogout());
                dispatch(clearCart());
                sessionStorage.clear();
                navigate("/", { replace: true });
              } else {
                alert("탈퇴가 취소되었습니다.");
              }
            }
          });
      } catch (error) {
        alert("올바른 비밀번호를 입력 해주세요");
      }
    }
  };
  return { Delete };
};
