import {
  LFB,
  LFFFieldset,
  LFInner,
} from "../../../styled/Login/Login";
import {
  RFSection,
  RFSectionImg,
  RFStrong,
} from "../../../styled/Join/Join";
import {
  LFIBox,
  LFIDDiv,
  LFIDP,
  LFIDSpan,
  LFIDSpanColor,
  LFIDStrong,
} from "../../../styled/Login/LFindId";
import { Link } from "react-router-dom";
import { LJButton } from "../../../styled/Button";
import { AllBox } from "../../../styled/AllBox";
import Header from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import {
  LEPBtn1,
  LEPBtn1P,
  LEPBtn2,
  LEPBtnBox,
  LEPSLi,
  LEPSStrong,
  LEPSUl,
  LFPBox,
  LFPDInput,
  LFPDiv,
  LFPDP,
  LFPDStrong,
  LFPSafe,
} from "../../../styled/Login/LFindPw";

const LFindPw = () => {
  return (
    <AllBox>
      <Header />

      <LFPBox>
        <LFB>
          <LFInner>
            <LFFFieldset>
              <RFStrong>비밀번호 찾기</RFStrong>
              <RFSection>
                <LFIDDiv>
                  <RFSectionImg />
                  <LFIDP>
                    <LFIDStrong>
                      <LFIDSpanColor>유저 아이디</LFIDSpanColor>
                      님의 비밀번호를 변경합니다.
                    </LFIDStrong>
                    <LFIDSpan>
                      새로 사용할 비밀번호를 등록해주세요.
                    </LFIDSpan>
                  </LFIDP>
                </LFIDDiv>
                {/*새 비밀번호*/}
                <LFPDiv>
                  <label>
                    <LFPDStrong>새 비밀번호</LFPDStrong>
                  </label>
                  <LFPDInput
                    type={"password"}
                    placeholder={"비밀번호를 입력해 주세요."}
                    required
                  />
                  {/*비밀번호 양식 틀릴 경우 보이게 만들기*/}
                  <LFPDP>
                    영문/숫자/특수기호를 혼합하여 8자리 이상 16자리
                    이하로 입력하세요.
                  </LFPDP>
                </LFPDiv>
                {/*새 비밀번호 확인*/}
                <LFPDiv>
                  <label>
                    <LFPDStrong>새 비밀번호 확인</LFPDStrong>
                  </label>
                  <LFPDInput
                    type={"password"}
                    placeholder={
                      "비밀번호를 다시 한번 입력해 주세요."
                    }
                    required
                  />
                  {/*비밀번호와 같지 않을 경우 보이게 만들기*/}
                  <LFPDP>일치하지 않습니다.</LFPDP>
                </LFPDiv>
                {/*안전한 비밀번호 만들기*/}
                <LFPSafe>
                  <LEPSStrong>안전한 비밀번호 만들기</LEPSStrong>
                  <LEPSUl>
                    <LEPSLi>
                      영문/숫자/특수기호를 혼합하여 8자리 이상 16자리
                      이하로 입력하세요.
                    </LEPSLi>
                    <LEPSLi>
                      아이디와 같은 비밀번호, 생일, 학번, 전화번호 등
                      개인정보와 관련된 숫자, 연속된 숫자, 동일하게
                      반복된 숫자 등 다른 사람이 쉽게 알아낼 수 있는
                      비밀번호는 유출 위험이 높아 사용하지 않는 것이
                      좋습니다.
                    </LEPSLi>
                    <LEPSLi>
                      이전에 사용하셨던 비밀번호 를재사용할 경우
                      도용의 우려가 있으니, 가급적 새로운 비밀번호를
                      사용해 주세요.
                    </LEPSLi>
                  </LEPSUl>
                </LFPSafe>
              </RFSection>
              {/*취소, 확인 버튼*/}
              <LEPBtnBox>
                <LEPSUl>
                  {/*취소*/}
                  <Link to={"/login"}>
                    <LEPBtn1>
                      <LEPBtn1P>취소</LEPBtn1P>
                    </LEPBtn1>
                  </Link>
                  {/*비밀번호 변경 후 확인 alert("비밀번호가 변경되었습니다")*/}
                  <Link to={"/login"}>
                    <LEPBtn2>
                      <LEPBtn1P>확인</LEPBtn1P>
                    </LEPBtn2>
                  </Link>
                </LEPSUl>
              </LEPBtnBox>
            </LFFFieldset>
          </LFInner>
        </LFB>
      </LFPBox>

      <Footer />
    </AllBox>
  );
};

export default LFindPw;
