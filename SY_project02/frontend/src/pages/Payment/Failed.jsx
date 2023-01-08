import React from "react";
import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_Success from "../../styled/Payment/Success";
import * as styled_F from "../../styled/Favorite";
import * as styled_Payment from "../../styled/Payment/Payment";
import { Footer } from "../../components/Footer/Footer";
import FailedTitle from "../../image/Payment/FailedTitle.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../../utils/urls";

export const Failed = () => {
  const failedResponseData = async () => {
    await axios
      .get(`${SERVER_URL}/payment/failed`)
      .then((res) => console.log(res));
  };

  React.useEffect(() => {
    failedResponseData();
    return () =>
      alert("결제에 완료되지 않았습니다. 다시 시도해주세요");
  }, []);

  return (
    // 결제 실패
    <styled_AB.AllBox>
      <Header />

      <styled_Success.SBox>
        {/*실패 헤더*/}
        <styled_F.FHeader>
          <styled_F.FHTitle>
            <styled_F.FHTInner>
              <styled_F.FHTInnerH4>
                <img src={FailedTitle} alt={"FailedTitle"} />
              </styled_F.FHTInnerH4>
            </styled_F.FHTInner>
          </styled_F.FHTitle>
        </styled_F.FHeader>

        <styled_F.FContentsAllBox>
          {/*결제 실패*/}
          <styled_Payment.PSection1>
            <styled_Success.STitleBox>
              <styled_Success.STitle1></styled_Success.STitle1>
              <styled_Success.STitle2>
                결제에 실패했습니다.
              </styled_Success.STitle2>
              <styled_Success.STitle3>
                현재 시스템에 기술 문제가 발생하였습니다. 다시 시도해
                주세요.
              </styled_Success.STitle3>
            </styled_Success.STitleBox>
            {/*버튼*/}
            <styled_Success.SButtonBox>
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <styled_Success.SButton2>
                  홈페이지로 돌아가기
                </styled_Success.SButton2>
              </Link>
            </styled_Success.SButtonBox>
          </styled_Payment.PSection1>
        </styled_F.FContentsAllBox>
      </styled_Success.SBox>

      <Footer />
    </styled_AB.AllBox>
  );
};
