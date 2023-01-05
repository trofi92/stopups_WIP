import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../util/urls";
import Header from "../../components/Header/Header";
import * as styled_AB from "../../styled/AllBox";
import * as styled_Success from "../../styled/Payment/Success";
import {useDispatch} from "react-redux";
import {clearCart} from "../../features/cart/cartSlice";
import * as styled_F from "../../styled/Favorite";
import SuccessTitle from "../../image/Payment/SuccessTitle.png"
import * as styled_Payment from "../../styled/Payment/Payment";
import * as styled_C from "../../styled/Cart";
import {Footer} from "../../components/Footer/Footer";

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
      <styled_AB.AllBox>
        <Header/>

        <styled_Success.SBox>
          {/*성공 헤더*/}
          <styled_F.FHeader>
            <styled_F.FHTitle>
              <styled_F.FHTInner>
                <styled_F.FHTInnerH4>
                  <img src={SuccessTitle} alt={"SuccessTitle"} />
                </styled_F.FHTInnerH4>
              </styled_F.FHTInner>
            </styled_F.FHTitle>
          </styled_F.FHeader>

          <styled_F.FContentsAllBox>
            {/*매장 및 준비 중*/}
            <styled_Payment.PSection1>
              <styled_Success.STitleBox>
                <styled_Success.STitle1>
                  {/*매장 이름*/}
                  <span>OOO점</span>에서
                </styled_Success.STitle1>
                {/*n은 db id값..? A-1도 순차적으로 값 변하게*/}
                <styled_Success.STitle2>
                  n번째 메뉴로 준비 중입니다(A-1)
                </styled_Success.STitle2>
              </styled_Success.STitleBox>
              <styled_Success.STitle3>
                주문 승인 즉시 메뉴 준비가 시작됩니다. 완성 후, 빠르게 픽업해 주세요.
              </styled_Success.STitle3>
              {/*결제 완료, 주문 요청, 주문 승인, 준비 완료*/}
              <styled_Success.STitle4>

              </styled_Success.STitle4>
            </styled_Payment.PSection1>

            {/*주문 내역*/}
            <styled_Success.SSection>
              <div>
                {/*()안에 주문한 메뉴 갯수*/}
                <styled_Success.SSTitle>
                  주문내역 (1)
                </styled_Success.SSTitle>
              </div>
              {/*포장 => 포장 // 포장 X => 포장 안함 // 둘다 => 부분 포장*/}
              <styled_Success.SSTakeOut>
                포장 옵션 : 포장 안함
              </styled_Success.SSTakeOut>
              {/*결제 완료한 메뉴들 map 사용*/}
              <styled_Payment.PSMenuBox>
                <styled_Payment.PSMBox>
                  {/*이미지*/}
                  <styled_Payment.PSMBImg/>
                  {/*메뉴 이름*/}
                  <styled_Payment.PSMBText>
                    <styled_C.CFMTitle>
                      메뉴 이름
                    </styled_C.CFMTitle>
                    {/*옵션*/}
                    <styled_C.CFMOption>
                      <styled_C.CFMIceHot>
                        ICED
                      </styled_C.CFMIceHot>
                      <styled_C.CFMSize>
                        사이즈
                      </styled_C.CFMSize>
                      <styled_C.CFMSize>
                        일회용 컵
                      </styled_C.CFMSize>
                      <styled_C.CFMCup>
                        양
                      </styled_C.CFMCup>
                    </styled_C.CFMOption>
                  </styled_Payment.PSMBText>
                </styled_Payment.PSMBox>
              </styled_Payment.PSMenuBox>
            </styled_Success.SSection>
          </styled_F.FContentsAllBox>

          {/*<div>success</div>*/}
          {/*<Link to="/">*/}
          {/*  <button>to main</button>*/}
          {/*</Link>*/}
        </styled_Success.SBox>

        <Footer/>
      </styled_AB.AllBox>
  );
};
