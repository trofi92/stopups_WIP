import { useState } from "react";
import axios from "axios";
import { sms } from "../util/urls";
import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = false;

// 휴대전화 번호 인증시
export const usePhoneSubmit = () => {
  const [show, setShow] = useState(false);
  const [rnd, setRnd] = useState("");
  const [authForm, setAuthForm] = useState(false);

  const phoneSubmit = async (e) => {
    e.preventDefault();
    const phone_number = e.target.phone_number.value;
    const rnd_number = Math.floor(Math.random() * 8999) + 1000;

    console.log(phone_number, rnd_number);
    console.log("setRnd: ", rnd);

    setRnd(rnd_number.toString());

    if (!phone_number) {
      alert("휴대전화 번호를 입력해주세요!");
    }

    await axios.post(sms, {
      phone_number,
      rnd_number,
    });
  };

  return {
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
  const [show, setShow] = useState(false);
  const [authForm, setAuthForm] = useState(false);
  const navigate = useNavigate();
  const smsSubmit = (e) => {
    e.preventDefault();
    const smsAuth = e.target.auth_number.value;
    console.log("userAuth :", smsAuth, "rnd :", rnd);

    if (smsAuth !== rnd) {
      navigate("/myInfoAgree", { replace: true, state: null });
      alert("인증정보가 올바르지 않습니다. 다시 시도해주세요.");
      return null;
    } else {
      setAuthForm(true);
      sessionStorage.setItem("AuthForm", "success");
    }
    e.target.auth_number.value = "";
    setShow(!show);
    console.log("sms submit number : ", number);
    navigate(path, { state: { number, rnd } });
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
