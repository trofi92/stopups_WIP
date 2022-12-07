import React from "react";
import { Link } from "react-router-dom";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { v4 } from "uuid";

export const Payment = () => {
  const [name, setName] = React.useState("");
  const clientKey = process.env.REACT_APP_CLIENT_KEY;
  // payType=> 변수=> ENUM,혹은 배열로 결제 타입을 저장
  const payType = {
    easy: "간편결제",
    card: "카드",
    virtual: "가상계좌",
  };
  Object.freeze(payType);
  //불변성 부여

  // 결제 요청 이벤트 발생시 호출
  const tossPay = () => {
    //orderId가 필요해서 만든 랜덤 아이디값
    const randomId = v4();

    loadTossPayments(clientKey).then((tossPayments) => {
      // 카드 결제 메서드 실행
      tossPayments
        .requestPayment("카드", {
          amount: 1000, // 가격
          orderId: `${randomId}`, // 주문 id
          orderName: `stopups`, // 결제 이름
          customerName: `${name}`, // 구매자, 구매처 이름
          successUrl: "http://localhost:3000/success", // 성공시 리다이렉트 주소
          failUrl: "http://localhost:3000/failed", // 실패시 리다이렉트 주소
          windowTarget: "iframe",
        })
        .catch(function (error) {
          if (error.code === "PAY_PROCESS_ABORTED") {
            console.error(error);
          }
        });
    });
  };

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} name="id" />
      <div>구매자 : {name}</div>
      <button onClick={() => tossPay()}>결제하기</button>
      <Link to="/">
        <button>to main</button>
      </Link>
    </div>
  );
};
