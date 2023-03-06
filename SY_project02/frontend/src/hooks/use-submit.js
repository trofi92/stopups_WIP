import { useState } from "react";
import axios from "axios";
import { SMS } from "../utils/urls";
import { useNavigate } from "react-router-dom";

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
    alert(
      "인증번호가 문자로 발송되었습니다. 휴대전화를 확인해 주세요."
    );
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

export const useSmsSubmit = (rnd, number, path) => {
  axios.defaults.withCredentials = false;
  const [show, setShow] = useState(false);
  const [authForm, setAuthForm] = useState(false);
  const navigate = useNavigate();
  const smsSubmit = (e, val) => {
    e.preventDefault();
    try {
      const smsAuth = val;
      if (smsAuth !== rnd || rnd === "" || smsAuth === "") {
        alert("인증정보가 올바르지 않습니다. 다시 시도해 주세요.");
        return navigate(-1, { replace: true, state: null });
      } else {
        setAuthForm(true);
        sessionStorage.setItem("AuthForm", "success");
        alert("인증되었습니다.");
        setShow(!show);
      }

      if (path === null || path === undefined) {
        return;
      }
      return navigate(path, { replace: true });
    } catch (error) {
      alert("문제가 발생했습니다. 다시 시도해 주세요.");
      return navigate(-1, { replace: true, state: null });
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
