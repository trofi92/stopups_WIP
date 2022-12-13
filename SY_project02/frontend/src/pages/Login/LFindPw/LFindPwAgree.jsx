import { AllBox } from "../../../styled/AllBox";
import Header from "../../../components/Header/Header";
import {
  LFB,
  LFFFieldset,
  LFInner,
} from "../../../styled/Login/Login";
import {
  RFSection,
  RFSectionImg,
  RFSectionP,
  RFStrong,
} from "../../../styled/Join/Join";
import {
  MIABox,
  MIAInnerBox,
  MIAP,
  MIAPButton,
  MIAPText,
  MIAPText2,
  MIAStrong,
} from "../../../styled/MyInfo/MyInfoAgree";
import {
  PhonePassBox,
  PPDiv,
  PPFigure,
  PPFImg,
} from "../../../styled/Join/JoinAgreeBox";
import MIAPhone from "../../../image/MyInfo/MIAPhone.jpg";
import { Link } from "react-router-dom";
import {
  LFIDDiv,
  LFIDP,
  LFIDSpan,
  LFIDStrong,
} from "../../../styled/Login/LFindId";
import { Footer } from "../../../components/Footer/Footer";

const LFindPwAgree = () => {
  return (
    <AllBox>
      <Header />

      <MIABox>
        <LFB>
          <LFInner>
            <form>
              <LFFFieldset>
                <RFStrong>비밀번호 찾기</RFStrong>
                <RFSection>
                  <LFIDDiv>
                    <RFSectionImg />
                    <LFIDP>
                      <LFIDStrong>
                        비밀번호가 기억나지 않으세요?
                      </LFIDStrong>
                      <LFIDSpan>
                        아래 인증 방법을 통해 비밀번호를 재설정 하실
                        수 있습니다.
                      </LFIDSpan>
                    </LFIDP>
                  </LFIDDiv>

                  <MIAInnerBox>
                    <MIAStrong>인증방식 선택</MIAStrong>
                    <MIAP>
                      본인 명의의 휴대폰을 통한 인증 방법입니다.
                    </MIAP>
                    <PhonePassBox>
                      <PPDiv>
                        <PPFigure>
                          <PPFImg src={MIAPhone} alt={"MIAPhone"} />
                        </PPFigure>
                        <MIAPText>휴대폰 인증</MIAPText>
                        <MIAPText2>
                          본인 명의의 휴대폰으로 본인 인증을 통해,
                          <br />
                          비밀번호를 확인하실 수 있습니다.
                        </MIAPText2>
                        <Link
                          to={"/pwPass"}
                          style={{ textDecoration: "none" }}
                        >
                          <MIAPButton>인증하기</MIAPButton>
                        </Link>
                      </PPDiv>
                    </PhonePassBox>
                  </MIAInnerBox>
                </RFSection>
              </LFFFieldset>
            </form>
          </LFInner>
        </LFB>
      </MIABox>

      <Footer />
    </AllBox>
  );
};

export default LFindPwAgree;
