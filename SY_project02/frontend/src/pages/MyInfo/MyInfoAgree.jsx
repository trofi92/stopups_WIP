import { AllBox } from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {
  PhonePassBox,
  PPDiv,
  PPFigure,
  PPFImg,
} from "../../styled/Join/JoinAgreeBox";
import { LFB, LFFFieldset, LFInner } from "../../styled/Login/Login";
import {
  RFSection,
  RFSectionImg,
  RFSectionP,
  RFStrong,
} from "../../styled/Join/Join";
import {
  MIABox,
  MIAInnerBox,
  MIAP,
  MIAPButton,
  MIAPText,
  MIAPText2,
  MIAStrong,
} from "../../styled/MyInfo/MyInfoAgree";
import MIAPhone from "../../image/MyInfo/MIAPhone.jpg";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

const MyInfo = () => {
  return (
    <AllBox>
      <Header />

      <MIABox>
        <LFB>
          <LFInner>
            <form>
              <LFFFieldset>
                <RFStrong>개인정보 확인 및 수정</RFStrong>
                <RFSection>
                  <RFSectionImg />
                  <RFSectionP>
                    개인정보 수정을 위해 아래 인증방법으로 본인 확인이
                    필요합니다.
                  </RFSectionP>
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
                          개인정보를
                          <br />
                          확인 및 수정하실 수 있습니다.
                        </MIAPText2>
                        <Link
                          to={"/myInfoPass"}
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

export default MyInfo;
