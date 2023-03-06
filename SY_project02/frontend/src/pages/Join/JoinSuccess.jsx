import Header from "../../components/Header/Header";
import * as styled_LOG from "../../styled/Login/Login";
import { Footer } from "../../components/Footer/Footer";
import * as styled_AB from "../../styled/AllBox";
import { Link, useLocation } from "react-router-dom";
import * as styled_JoinS from "../../styled/Join/JoinSuccess";
import JSuccessSally from "../../image/Join/JSuccessSally.jpg";
import * as styled_BU from "../../styled/Button";

const JoinSuccess = () => {
  const { state } = useLocation();

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_JoinS.JSBox>
        <styled_LOG.LFB>
          <styled_JoinS.JSInner>
            <styled_JoinS.JSInnerP>
              {state}고객님!
              <br />
              스탑업스 코리아 회원가입이 완료되었습니다.
            </styled_JoinS.JSInnerP>
            <styled_JoinS.JSIFigure>
              <styled_JoinS.JSIFImg
                src={JSuccessSally}
                alt={"JSuccessSally"}
              />
            </styled_JoinS.JSIFigure>
            <styled_JoinS.JSIDiv>
              <styled_JoinS.JSInnerP>
                로그인 페이지로 이동하시겠습니까?
              </styled_JoinS.JSInnerP>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <styled_BU.LJButton>로그인</styled_BU.LJButton>
              </Link>
            </styled_JoinS.JSIDiv>
          </styled_JoinS.JSInner>
        </styled_LOG.LFB>
      </styled_JoinS.JSBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default JoinSuccess;
