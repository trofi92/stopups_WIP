import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../util/urls";
import Header from "../../components/Header/Header";
import * as styled_AB from "../../styled/AllBox";
import {SBox} from "../../styled/Payment/Success";

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
      <styled_AB.AllBox>
        <Header/>

        <SBox>
          <div>success</div>
          <Link to="/">
            <button>to main</button>
          </Link>
        </SBox>

      </styled_AB.AllBox>
  );
};
