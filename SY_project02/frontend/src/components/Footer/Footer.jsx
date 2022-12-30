import * as styled_Footer from "../../styled/Footer";
import { Link } from "react-router-dom";
import { FAIDive, FAIDLi, FAIDLImg } from "../../styled/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAward1 from "../../image/Footer/FAward1.jpg";
import FAward2 from "../../image/Footer/FAward2.jpg";
import FAward3 from "../../image/Footer/FAward3.jpg";
import FAward4 from "../../image/Footer/FAward4.jpg";
import FAward5 from "../../image/Footer/FAward5.jpg";
import FAward6 from "../../image/Footer/FAward6.jpg";
import FAward7 from "../../image/Footer/FAward7.jpg";
import Slider from "react-slick";
import { useLogout } from "../../hooks/use-authService";
import { useSelector } from "react-redux";

export const Footer = () => {
  const user = useSelector((state) => state.user);

  const { logout } = useLogout();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      {/*푸터*/}
      <styled_Footer.F>
        {/*메뉴*/}
        <styled_Footer.FWrap>
          <styled_Footer.FWInner>
            <styled_Footer.FWUl>
              <styled_Footer.FWLi>
                <styled_Footer.FWA1>
                  CUSTOMER SERVICE & IDEAS
                </styled_Footer.FWA1>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    자주 하는 질문
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>고객의 소리</styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    스탑없으 이용 팁
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    고객 경험 설문조사
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    비회원 전자영수증 조회
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
            </styled_Footer.FWUl>
            <styled_Footer.FWUl>
              <styled_Footer.FWLi>
                <styled_Footer.FWA1>COMPANY</styled_Footer.FWA1>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>한눈에 보기</styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    스탑없으 사명
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/introduce"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    스탑없으 소개
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>국내 뉴스룸</styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    세계의 스탑없으
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    글로벌 뉴스룸
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
            </styled_Footer.FWUl>
            <styled_Footer.FWUl>
              <styled_Footer.FWLi>
                <styled_Footer.FWA1>
                  CORPORATE SALES
                </styled_Footer.FWA1>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    단체 및 기업 구매 안내
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    단체 주문 배달 안내
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
            </styled_Footer.FWUl>
            <styled_Footer.FWUl>
              <styled_Footer.FWLi>
                <styled_Footer.FWA1>PARTNERSHIP</styled_Footer.FWA1>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    신규 입점 제의
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    협력 고객사 등록신청
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
            </styled_Footer.FWUl>
            <styled_Footer.FWUl>
              <styled_Footer.FWLi>
                <styled_Footer.FWA1>
                  ONLINE COMMUNITY
                </styled_Footer.FWA1>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <a
                  href={"https://www.facebook.com/starbuckskorea"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>페이스북</styled_Footer.FWA2>
                </a>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <a
                  href={"https://twitter.com/StarbucksKorea"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>트위터</styled_Footer.FWA2>
                </a>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <a
                  href={"https://www.youtube.com/user/starbuckskorea"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>유튜브</styled_Footer.FWA2>
                </a>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <a
                  href={"https://www.instagram.com/starbuckskorea/"}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>인스타그램</styled_Footer.FWA2>
                </a>
              </styled_Footer.FWLi>
            </styled_Footer.FWUl>
            <styled_Footer.FWUl>
              <styled_Footer.FWLi>
                <styled_Footer.FWA1>RECRUIT</styled_Footer.FWA1>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>채용 소개</styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
              <styled_Footer.FWLi>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Footer.FWA2>
                    채용 지원하기
                  </styled_Footer.FWA2>
                </Link>
              </styled_Footer.FWLi>
            </styled_Footer.FWUl>
          </styled_Footer.FWInner>
        </styled_Footer.FWrap>

        {/*유틸 버튼*/}
        <styled_Footer.FUButton>
          <styled_Footer.FUBUl>
            <styled_Footer.FUBLi>
              <Link
                to={"/"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <styled_Footer.FUBLiP>HOME</styled_Footer.FUBLiP>
              </Link>
            </styled_Footer.FUBLi>
            {/*로그인 여부에 버튼 다르게 나오기*/}
            {user.email === "" ? (
              <>
                {/*로그인 X => 로그인, 회원가입 버튼*/}
                <styled_Footer.FUBLi>
                  <Link
                    to={"/login"}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <styled_Footer.FUBLiP>
                      Sign In
                    </styled_Footer.FUBLiP>
                  </Link>
                </styled_Footer.FUBLi>
                <styled_Footer.FUBLi>
                  <Link
                    to={"/joinAgree"}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <styled_Footer.FUBLiP>
                      Join Us
                    </styled_Footer.FUBLiP>
                  </Link>
                </styled_Footer.FUBLi>
              </>
            ) : (
              <>
                {/*로그인 O => 로그아웃 버튼*/}
                <styled_Footer.FUBLi>
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <styled_Footer.FUBLiP onClick={(e) => logout(e)}>
                      Sign Out
                    </styled_Footer.FUBLiP>
                  </Link>
                </styled_Footer.FUBLi>
              </>
            )}
          </styled_Footer.FUBUl>
        </styled_Footer.FUButton>

        {/*수상 내역 => Slider 사용, 2초 간격으로 3개씩 넘어감*/}
        <styled_Footer.FAward>
          <styled_Footer.FAInner>
            <FAIDive>
              <Slider {...settings}>
                <FAIDLi>
                  <FAIDLImg src={FAward2} alt={"FAward2"} />
                </FAIDLi>
                <FAIDLi>
                  <FAIDLImg src={FAward3} alt={"FAward3"} />
                </FAIDLi>
                <FAIDLi>
                  <FAIDLImg src={FAward4} alt={"FAward4"} />
                </FAIDLi>
                <FAIDLi>
                  <FAIDLImg src={FAward5} alt={"FAward5"} />
                </FAIDLi>
                <FAIDLi>
                  <FAIDLImg src={FAward6} alt={"FAward6"} />
                </FAIDLi>
                <FAIDLi>
                  <FAIDLImg src={FAward7} alt={"FAward7"} />
                </FAIDLi>
                {/*3개씩 넘어가게 만들려고 FAward1 양 옆에 공백*/}
                <FAIDLi>
                  <FAIDLImg />
                </FAIDLi>
                <FAIDLi>
                  <FAIDLImg src={FAward1} alt={"FAward1"} />
                </FAIDLi>
                <FAIDLi>
                  <FAIDLImg />
                </FAIDLi>
              </Slider>
            </FAIDive>
          </styled_Footer.FAInner>
        </styled_Footer.FAward>

        {/*그외 기타*/}
        <styled_Footer.FAside>
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAsideAGreen>
              개인정보처리방침
            </styled_Footer.FAsideAGreen>
          </Link>
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAsideA>
              영상정보처리기기 운영관리 방침
            </styled_Footer.FAsideA>
          </Link>
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAsideA>
              홈페이지 이용약관
            </styled_Footer.FAsideA>
          </Link>
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAsideA>
              위치정보 이용약관
            </styled_Footer.FAsideA>
          </Link>
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAsideA>
              스타벅스 카드 이용약관
            </styled_Footer.FAsideA>
          </Link>
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAsideA>
              비회원 이용약관
            </styled_Footer.FAsideA>
          </Link>
          <br />
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAsideA>
              My DT Pass 서비스 이용약관
            </styled_Footer.FAsideA>
          </Link>
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAsideA>
              윤리경영 핫라인
            </styled_Footer.FAsideA>
          </Link>
          <br />
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAButtonA>
              찾아오시는 길
            </styled_Footer.FAButtonA>
          </Link>
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAButtonA>
              신규입점제의
            </styled_Footer.FAButtonA>
          </Link>
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Footer.FAButtonA>
              사이트 맵
            </styled_Footer.FAButtonA>
          </Link>
          <br />
          <styled_Footer.FAUl>
            <styled_Footer.FALi>
              사업자등록번호 : 201-81-21515
            </styled_Footer.FALi>
            <styled_Footer.FALi>
              주식회사 에스씨케이컴퍼니 대표이사: 송 데이비드 호섭
            </styled_Footer.FALi>
            <styled_Footer.FALi>TEL: 1522-3232</styled_Footer.FALi>
            <styled_Footer.FALi>
              개인정보 책임자: 이현수
            </styled_Footer.FALi>
          </styled_Footer.FAUl>
          <styled_Footer.FASpan>
            ⓒ 2022 StopUps Coffee Company. All Rights Reserved.
          </styled_Footer.FASpan>
        </styled_Footer.FAside>
      </styled_Footer.F>
    </>
  );
};
