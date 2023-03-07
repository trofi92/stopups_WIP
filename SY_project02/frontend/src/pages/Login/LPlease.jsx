import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import * as styled_LOGP from "../../styled/Login/LPlease";
import * as styled_BU from "../../styled/Button";
import { Link } from "react-router-dom";

const LPlease = () => {
  return (
    <styled_AB.AllBox>
      <Header />

      <styled_LOGP.LPContainer>
        <styled_LOGP.LPInner>
          <styled_LOGP.LPIFigure />
          <styled_LOGP.LPIBox>
            <styled_LOGP.LPIBStrong>
              <styled_LOGP.LPIBSSpan>로그인</styled_LOGP.LPIBSSpan>시
              이용 가능합니다.
            </styled_LOGP.LPIBStrong>
            <styled_LOGP.LPIBoxP>
              해당 서비스를 이용하시려면
              <strong> 스타벅스 회원으로 가입</strong>
              하시기 바랍니다.
            </styled_LOGP.LPIBoxP>
            <styled_LOGP.LPIBUl>
              <styled_LOGP.LPIBLi1>
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_BU.LPIButtonL>로그인</styled_BU.LPIButtonL>
                </Link>
              </styled_LOGP.LPIBLi1>
              <styled_LOGP.LPIBLi2>
                <Link to={"/join"} style={{ textDecoration: "none" }}>
                  <styled_BU.LPIButtonR>
                    회원가입
                  </styled_BU.LPIButtonR>
                </Link>
              </styled_LOGP.LPIBLi2>
            </styled_LOGP.LPIBUl>
          </styled_LOGP.LPIBox>
        </styled_LOGP.LPInner>
      </styled_LOGP.LPContainer>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default LPlease;
