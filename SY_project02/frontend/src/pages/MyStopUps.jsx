import { AllBox } from "../styled/AllBox";
import Header from "../components/Header/Header";
import {
  FBox,
  FCBox,
  FContentsAllBox,
  FHeader,
  FHTInner,
  FHTInnerH4,
  FHTitle,
} from "../styled/Favorite";
import MyStopUpsHeaderImg from "../image/MyStopUps/MSUHeaderImg.png";
import {
  HSU1RDImg,
  HSU1RDivD,
  HSU1RDivU,
  HSU1RDText,
  HSU1RUImg,
  HSU1RULink,
  HSU1RUSpan,
  HSU1RUText,
  HSU1RUTStrong,
  MSU1ArticleL,
  MSU1ArticleR,
  MSU1LButton,
  MSU1LP,
  MSU1LPSpan,
  MSU1LPStrong,
  MSU2DDButton,
  MSU2DDCont,
  MSU2DDIcon,
  MSU2DivD,
  MSU2DivU,
  MSU2DUButton1,
  MSU2DUButton2,
  MSU2DUCont,
  MSU2DUContBox,
  MSU2DUCStrong,
  MSU2DUIcon,
  MSU2DUIconBox,
  MSU3ArticleL,
  MSU3ArticleR,
  MSU3CCP,
  MSU3LHeader,
  MSU3LHStrong,
  MSU3LSFigure,
  MSU3LSFImg,
  MSU3LSFP,
  MSU3LSlider,
  MSU3RCCFigure,
  MSU3RChargeCare,
  MSU3RIBIconI3,
  MSU3RIBIconSpan1,
  MSU3RIBIconSpan2,
  MSU3RIBIconSpan3,
  MSU3RIBLink1,
  MSU3RIBLink2,
  MSU3RIBLink3,
  MSU3RIBTextSpan,
  MSU3RIconsBox,
  MSU3RRCFigure,
  MSU3RRCP,
  MSU3RRCPStrong,
  MSU3RRegiCard,
  MSUDiv,
  MSUSection,
  MSUSection1,
  MSUSection2,
  MSUSection3,
  MSUSFieldset,
  MSUSHeader,
  MSUSHP,
} from "../styled/MyStopUps";
import { Link } from "react-router-dom";
import MSUNoStore from "../image/MyStopUps/MSUNoStore.jpg";
import { Footer } from "../components/Footer/Footer";

const MyStopUps = () => {
  return (
    <AllBox>
      <Header />

      <FBox>
        {/*My StopUps 헤더*/}
        <FHeader>
          <FHTitle>
            <FHTInner>
              <FHTInnerH4>
                <img
                  src={MyStopUpsHeaderImg}
                  alt={"MyStopUpsHeaderImg"}
                />
              </FHTInnerH4>
            </FHTInner>
          </FHTitle>
        </FHeader>
      </FBox>

      {/*My StopUps 내용 전체 박스*/}
      <FContentsAllBox>
        <FCBox>
          <MSUDiv>
            {/*개인정보, 비밀번호, 매장 및 전체 이벤트 섹션*/}
            <MSUSection1>
              {/*왼쪽*/}
              <MSU1ArticleL>
                <MSU1LP>
                  <MSU1LPStrong>유저 이름</MSU1LPStrong>
                  님 안녕하세요.
                  <br />
                  <MSU1LPSpan>
                    (지금 스탑업스 카드를 등록하시면 StopUps Rewards
                    혜택을 받으실 수 있습니다.)
                  </MSU1LPSpan>
                </MSU1LP>
                <Link to={"/myInfoAgree"}>
                  <MSU1LButton>개인정보 수정</MSU1LButton>
                </Link>
                <Link to={"/myInfoPassword"}>
                  <MSU1LButton>비밀번호 변경</MSU1LButton>
                </Link>
              </MSU1ArticleL>
              {/*오른쪽*/}
              <MSU1ArticleR>
                {/*위*/}
                <HSU1RDivU>
                  <Link to={"#"}>
                    <HSU1RULink>
                      <HSU1RUImg />
                      <HSU1RUText>
                        신규 매장
                        <br />
                        <HSU1RUTStrong>오픈 이벤트</HSU1RUTStrong>
                      </HSU1RUText>
                      <HSU1RUSpan />
                    </HSU1RULink>
                  </Link>
                </HSU1RDivU>
                {/*아래*/}
                <HSU1RDivD>
                  <Link to={"/event"}>
                    <HSU1RULink>
                      <HSU1RDImg />
                      <HSU1RDText>
                        스타벅스
                        <br />
                        <HSU1RUTStrong>전체 이벤트</HSU1RUTStrong>
                      </HSU1RDText>
                      <HSU1RDImg />
                      <HSU1RUSpan />
                    </HSU1RULink>
                  </Link>
                </HSU1RDivD>
              </MSU1ArticleR>
            </MSUSection1>

            {/*카드 및 혜택 보기, 카드 구매 섹션*/}
            {/*구현 미지수*/}
            <MSUSection2>
              {/*위*/}
              <MSU2DivU>
                {/*이미지*/}
                <MSU2DUIconBox>
                  <MSU2DUIcon />
                </MSU2DUIconBox>
                {/*텍스트*/}
                <MSU2DUContBox>
                  <MSU2DUCont>
                    <MSU2DUCStrong>
                      아직 등록된 스탑업스 카드가 없으신가요?
                    </MSU2DUCStrong>
                    <br />
                    스탑업스 카드를 등록하시고 생일 무료음료 쿠폰과
                    다양한 스탑업스의
                    <br />
                    리워드를 경험하세요. 스탑업스만의 특별한 혜택을
                    경험하실 수 있습니다.
                  </MSU2DUCont>
                  <Link to={"/serviceReady"}>
                    <MSU2DUButton1>스탑업스 카드 보기</MSU2DUButton1>
                  </Link>
                  <Link to={"/serviceReady"}>
                    <MSU2DUButton2>
                      스탑업스 e-Gift Card 구매
                    </MSU2DUButton2>
                  </Link>
                </MSU2DUContBox>
              </MSU2DivU>
              {/*아래*/}
              <MSU2DivD>
                {/*이미지*/}
                <MSU2DUIconBox>
                  <MSU2DDIcon />
                </MSU2DUIconBox>
                {/*텍스트*/}
                <MSU2DUContBox>
                  <MSU2DDCont>
                    <MSU2DUCStrong>
                      스탑업스만의 특별한 혜택이 궁금하신가요?
                    </MSU2DUCStrong>
                    <br />
                    혜책에 편리함까지 더한 스탑업스 리워드로
                    <br />
                    한층 더 스탑업스를 특별하게 즐기세요.
                  </MSU2DDCont>
                  <Link to={"/serviceReady"}>
                    <MSU2DDButton>스탑업스 혜택보기</MSU2DDButton>
                  </Link>
                </MSU2DUContBox>
              </MSU2DivD>
            </MSUSection2>

            {/*새 매장 소개, 카드 등록, 충전, 영수증, 캘린더, 쿠폰*/}
            {/*구현 미지수*/}
            <MSUSection3>
              {/*왼쪽*/}
              <MSU3ArticleL>
                {/*헤더*/}
                <MSU3LHeader>
                  <MSU3LHStrong>
                    새로운 스탑업스 매장을 소개합니다.
                  </MSU3LHStrong>
                  <br />
                  전국의 새로운 스탑업스의 얼굴들을 만나보세요~!
                </MSU3LHeader>
                {/*내용*/}
                {/*신규 매장 없을 때로 만듬*/}
                <MSU3LSlider>
                  <MSUDiv>
                    <MSU3LSFigure>
                      <MSU3LSFImg
                        src={MSUNoStore}
                        alt={"MSUNoStore"}
                      />
                    </MSU3LSFigure>
                    <MSU3LSFP>신규 매장이 없습니다.</MSU3LSFP>
                  </MSUDiv>
                </MSU3LSlider>
              </MSU3ArticleL>
              {/*오른쪽*/}
              <MSU3ArticleR>
                {/*카드 등록*/}
                <MSU3RRegiCard>
                  <Link to={"/serviceReady"}>
                    <MSU3RRCFigure />
                    <MSU3RRCP>
                      <MSU3RRCPStrong>카드등록</MSU3RRCPStrong>
                      <br />
                      카드를 등록하시고 다양한 리워드를 만나보세요.
                    </MSU3RRCP>
                  </Link>
                </MSU3RRegiCard>
                {/*카드 충전*/}
                <MSU3RChargeCare>
                  <Link to={"/serviceReady"}>
                    <MSU3RCCFigure />
                    <MSU3CCP>
                      <MSU3RRCPStrong>카드충전</MSU3RRCPStrong>
                      <br />
                      매장과 온라인에서 간편하게 충전하세요.
                    </MSU3CCP>
                  </Link>
                </MSU3RChargeCare>
                {/*나머지 아이콘들*/}
                <MSU3RIconsBox>
                  {/*왼쪽*/}
                  <Link to={"/serviceReady"}>
                    <MSU3RIBLink1>
                      <MSU3RIBIconSpan1 />
                      <MSU3RIBTextSpan>전자영수증</MSU3RIBTextSpan>
                    </MSU3RIBLink1>
                  </Link>
                  {/*가운데*/}
                  <Link to={"/serviceReady"}>
                    <MSU3RIBLink2>
                      <MSU3RIBIconSpan2 />
                      <MSU3RIBTextSpan>캘린더</MSU3RIBTextSpan>
                    </MSU3RIBLink2>
                  </Link>
                  {/*중간*/}
                  <Link to={"/serviceReady"}>
                    <MSU3RIBLink3>
                      <MSU3RIBIconSpan3>
                        <MSU3RIBIconI3>0</MSU3RIBIconI3>
                      </MSU3RIBIconSpan3>
                      <MSU3RIBTextSpan>e-쿠폰</MSU3RIBTextSpan>
                    </MSU3RIBLink3>
                  </Link>
                </MSU3RIconsBox>
              </MSU3ArticleR>
            </MSUSection3>
          </MSUDiv>

          {/*스타벅스 리워드 최근 일주일 판매 집계 기준*/}
          {/*회원가입할 때 나이가 없어서 구현 불가능*/}
          {/*<MSUSection>*/}
          {/*    <form method={"post"}>*/}
          {/*        <MSUSFieldset>*/}
          {/*            /!*헤더*!/*/}
          {/*            <MSUSHeader>*/}
          {/*                <MSUSHP>스타벅스 코리아를 사랑하는</MSUSHP>*/}
          {/*            </MSUSHeader>*/}
          {/*            /!*판매순*!/*/}
          {/*        </MSUSFieldset>*/}
          {/*    </form>*/}
          {/*</MSUSection>*/}
        </FCBox>
      </FContentsAllBox>

      <Footer />
    </AllBox>
  );
};

export default MyStopUps;
