import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { sms } from "./urls";
// const [show, setShow] = useState(false); // 휴대전화 입력 여부 상태 저장
// const [rnd, setRnd] = useState(""); // 임의의 비밀번호 4자리 값 저장
// const [number, setNumber] = useState(); //인증된 유저 전화번호 저장
// const [authForm, setAuthForm] = useState(false); // 인증 상태 값 저장

export const usePhoneSubmit = async (e, state1, state2) => {
  // SMS 인증
  e.preventDefault();
  const phone_number = e.target.phone_number.value; // 휴대전화 번호
  const rnd_number = Math.floor(Math.random() * 8999) + 1000; // 임의의 인증 번호 생성

  console.log(phone_number, rnd_number);
  state1(rnd_number.toString()); // 인증 번호 문자열로 저장

  if (!phone_number) {
    alert("휴대전화 번호를 입력해주세요!");
  }
  state2(phone_number);
  // 값이 존재하면 SMS 인증을 위해 POST로 전달
  await axios.post(
    sms,
    {
      phone_number,
      rnd_number,
    },
    {
      withCredentials: false,
    }
  );
};

// 모바일 인증
export const useAuthSubmit = (e, route, state, val1, val2) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // 페이지 리렌더링 용도

  e.preventDefault();
  const userAuth = e.target.phone_number.value; // 인증 번호 값 저장
  e.target.phone_number.value = ""; // 인증 번호  초기화
  if (userAuth === val1) {
    // 사용자에게 보낸 임의의 4자리와 사용자가 입력한 4자리가 맞으면 작동
    state(true); // 인증 값 설정
    sessionStorage.setItem("AuthForm", "success");
    // 세션 스토리지에 인증 여부 저장 => jwt가 생성됨으로써 유지할 이유가 사라진것 같음
    navigate(route, { state: { number: val2 } }); // 페이지 리렌더링 하기 위한 페이지 이동
  }
  setShow(!show); // 인증 폼 상태값 변경
};
