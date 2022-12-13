import Header from "../../components/Header/Header";
import { LFB } from "../../styled/Login/Login";
import { Footer } from "../../components/Footer/Footer";
import { AllBox } from "../../styled/AllBox";
import { Link } from "react-router-dom";
import {
  JSBox,
  JSIDiv,
  JSIFigure,
  JSIFImg,
  JSInner,
  JSInnerP,
} from "../../styled/Join/JoinSuccess";
import JSuccessSally from "../../image/Join/JSuccessSally.jpg";
import { LJButton } from "../../styled/Button";

const JoinSuccess = () => {
  return (
    <AllBox>
      <Header />

      <JSBox>
        <LFB>
          <JSInner>
            <JSInnerP>
              NickName고객님!
              <br />
              스탑업스 코리아 회원가입이 완료되었습니다.
            </JSInnerP>
            <JSIFigure>
              <JSIFImg src={JSuccessSally} alt={"JSuccessSally"} />
            </JSIFigure>
            <JSIDiv>
              <JSInnerP>로그인 페이지로 이동하시겠습니까?</JSInnerP>
              <Link to={"/login"} style={{ textDecoration: "none" }}>
                <LJButton>로그인</LJButton>
              </Link>
            </JSIDiv>
          </JSInner>
        </LFB>
      </JSBox>

      <Footer />
    </AllBox>
  );
};

export default JoinSuccess;
