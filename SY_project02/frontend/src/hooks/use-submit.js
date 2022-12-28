import { useState } from "react";
import axios from "axios";
import { SMS } from "../util/urls";
import { useNavigate } from "react-router-dom";

// 휴대전화 번호 인증시
export const usePhoneSubmit = () => {
  axios.defaults.withCredentials = false;
  const [show, setShow] = useState(false);
  const [rnd, setRnd] = useState("");
  const [authForm, setAuthForm] = useState(false);
  const [number, setNumber] = useState();

  const phoneSubmit = async (e, val) => {
    e.preventDefault();
    const phone_number = val;
    setNumber(phone_number);
    const rnd_number = Math.floor(Math.random() * 8999) + 1000;
    setRnd(rnd_number.toString());

    console.log(phone_number, rnd_number);
    console.log("setRnd: ", rnd);

    await axios.post(SMS, {
      phone_number,
      rnd_number,
    });
    alert("인증문자가 발송되었습니다. 휴대전화를 확인해 주세요.");
  };

  return {
    setNumber,
    number,
    show,
    setShow,
    rnd,
    setRnd,
    authForm,
    setAuthForm,
    phoneSubmit,
  };
};

// 발송된 인증번호 확인시
export const useSmsSubmit = (rnd, number, path) => {
  axios.defaults.withCredentials = false;
  const [show, setShow] = useState(false);
  const [authForm, setAuthForm] = useState(false);
  const navigate = useNavigate();
  const smsSubmit = (e, val) => {
    e.preventDefault();
    try {
      const smsAuth = val;
      //데이터 입력여부 확인
      console.log("random ID 값 :", smsAuth, "유저입력값 :", rnd);

      if (smsAuth !== rnd) {
        navigate("/myInfoAgree", { replace: true, state: null });
        alert("인증정보가 올바르지 않습니다. 다시 시도해 주세요.");
        return null;
      } else {
        setAuthForm(true);
        sessionStorage.setItem("AuthForm", "success");
        alert("인증되었습니다.");
        setShow(!show);
      }

      console.log("SMS submit number : ", number);

      if (path === null || path === undefined) {
        return;
      }
      return navigate(path, { replace: true });
    } catch (error) {
      console.error(error);
      alert("문제가 발생했습니다. 다시 시도해 주세요.");
      navigate(-1, { replace: true, state: null });
    }
  };

  return {
    show,
    setShow,
    rnd,
    number,
    authForm,
    setAuthForm,
    smsSubmit,
  };
};
