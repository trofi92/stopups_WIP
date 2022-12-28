import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../util/urls";

export const Success = () => {
  const navigate = useNavigate();

  let orderId = new URL(window.location.href).searchParams.get(
    "orderId"
  );
  let paymentKey = new URL(window.location.href).searchParams.get(
    "paymentKey"
  );
  let amount = new URL(window.location.href).searchParams.get(
    "amount"
  );

  React.useEffect(() => {
    axios
      .post(
        `${SERVER_URL}
          /payment/success?orderId=${orderId}&paymentKey=${paymentKey}&amount=${amount}}`
      )
      .then((res) => {
        console.log(res.status === 200);

        if (res.status === 200) {
          alert("결제가 완료되었습니다.");
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/failed");
      });
  }, []);

  return (
    <div>
      <div>success</div>
      <Link to="/">
        <button>to main</button>
      </Link>
    </div>
  );
};
