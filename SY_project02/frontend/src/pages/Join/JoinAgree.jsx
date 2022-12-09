import Header from "../../components/Header/Header";
import {
    AgreeInput, AgreeLabel,
    AgreeSpan,
    RFSection,
    RFSectionImg,
    RFSectionP,
    RFSectionSpan,
    RFStrong,
    RFSectionDiv,
    RFSectionStrong
} from "../../styled/Join/Join";
import {LFB, LFFFieldset, LFInner} from "../../styled/Login/Login";
import {Footer} from "../../components/Footer/Footer";
import {AllBox} from "../../styled/AllBox";
import {HomePageAgree} from "./HomePageAgree";
import {UserAgree} from "./UserAgree";
import {Link} from "react-router-dom";
import {
    JABox,
    PhonePassBox,
    PPDiv,
    PPFigure,
    PPFImg,
    PPPButtonBox,
    PPPText,
    PPPTitle,
    RFSNoticeUl,
    RFSNoticeLi,
} from "../../styled/Join/JoinAgreeBox";
import PhonePassImg from "../../image/Join/PhonePassImg.png"

const JoinAgree = () => {
  return(
      <AllBox>
          <Header/>

          <JABox>
              <LFB>
                  <LFInner>
                      {/*회원가입 동의 폼*/}
                      <form method={"post"}>
                          <LFFFieldset>
                              <RFStrong>회원가입</RFStrong>
                              <RFSection>
                                  <RFSectionImg/>
                                  <RFSectionP>회원가입 약관동의 및 본인인증단계입니다.</RFSectionP>
                                  <RFSectionDiv>
                                      <RFSectionStrong>
                                          홈페이지 이용약관 동의
                                          <RFSectionSpan>(필수)</RFSectionSpan>
                                      </RFSectionStrong>
                                      {/*체크*/}
                                      <AgreeSpan>
                                          {/*체크 토글 버튼 만들기*/}
                                          <AgreeInput
                                            type={"checkbox"}
                                          />
                                          <AgreeLabel/>
                                      </AgreeSpan>
                                      {/*동의 약관 내용 박스*/}
                                      <HomePageAgree/>
                                  </RFSectionDiv>
                                  <RFSectionDiv>
                                      <RFSectionStrong>
                                          개인정보 수집 및 이용동의
                                          <RFSectionSpan>(필수)</RFSectionSpan>
                                      </RFSectionStrong>
                                      <AgreeSpan>
                                          {/*체크 토글 버튼 만들기*/}
                                          <AgreeInput
                                              type={"checkbox"}
                                          />
                                          <AgreeLabel/>
                                      </AgreeSpan>
                                      {/*동의 약관 내용 박스*/}
                                      <UserAgree/>
                                  </RFSectionDiv>
                                  
                                  <RFSectionDiv>
                                      <RFSectionStrong>
                                          회원가입 유의 사항
                                      </RFSectionStrong>
                                      <RFSNoticeUl>
                                      	<RFSNoticeLi>
                                      			반드시 회원님 명의로 된 휴대폰, 아이핀을 이용해주세요.
                                      	</RFSNoticeLi>
                                      	<RFSNoticeLi>
                                      			타인의 개인정보를 도용하여 가입할 경우 향후 적발 시 서비스 이용제한 및 법적 제재를 받으실 수 있습니다.
                                      	</RFSNoticeLi>
                                      	<RFSNoticeLi>
                                      			스탑업스 코리아의 공식 홈페이지는 Internet Explorer 9.0이상, Chrome, Firefox, Safari 브라우저에 최적화 되어있습니다.
                                      	</RFSNoticeLi>
                                      </RFSNoticeUl>
                                  </RFSectionDiv>
                                  
                                  {/*인증방식 선택 박스*/}
                                  <RFSectionDiv>
                                      <RFSectionStrong>
                                          인증방식 선택
                                      </RFSectionStrong>
                                      <PhonePassBox>
                                          <PPDiv>
                                              <PPFigure>
                                                  <PPFImg src={PhonePassImg} alt={"PhonePassImg"}/>
                                              </PPFigure>
                                              <PPPTitle>휴대폰 인증</PPPTitle>
                                              <PPPText>본인 명의의 휴대폰을 통해 인증합니다.</PPPText>
                                              <Link to={"/joinPass"} style={{textDecoration: "none"}}>
                                                  <PPPButtonBox>
                                                      인증하기
                                                  </PPPButtonBox>
                                              </Link>
                                          </PPDiv>
                                      </PhonePassBox>
                                  </RFSectionDiv>
                              </RFSection>
                          </LFFFieldset>
                      </form>
                  </LFInner>
              </LFB>
          </JABox>

          <Footer/>

      </AllBox>
  )
};

export default JoinAgree;
