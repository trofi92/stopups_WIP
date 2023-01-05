import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../utils/urls";
import { clearCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let orderId = new URL(window.location.href).searchParams.get(
    "orderId"
  );
  let paymentKey = new URL(window.location.href).searchParams.get(
    "paymentKey"
  );
  let amount = new URL(window.location.href).searchParams.get(
    "amount"
  );

  const paymentsRequest = async () => {
    await axios
      .get(
        `${SERVER_URL}/payment/success?orderId=${orderId}&paymentKey=${paymentKey}&amount=${amount}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        return alert("결제가 완료되었습니다.");
      })
      .catch((error) => {
        console.error(error);
        navigate("/failed");
      });
  };

  React.useEffect(() => {
    paymentsRequest();
    dispatch(clearCart());
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
