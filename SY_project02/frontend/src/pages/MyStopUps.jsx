import * as styled_AB from "../styled/AllBox";
import Header from "../components/Header/Header";
import * as styled_F from "../styled/Favorite";
import MyStopUpsHeaderImg from "../image/MyStopUps/MSUHeaderImg.png";
import * as styled_MSU from "../styled/MyStopUps";
import { Link } from "react-router-dom";
import MSUNoStore from "../image/MyStopUps/MSUNoStore.jpg";
import { Footer } from "../components/Footer/Footer";
import { useSelector } from "react-redux";
import { decrypt } from "../utils/crypto-front";

const MyStopUps = () => {
  const user = useSelector((state) => state.user);

  const email = decrypt(user.email);

  return (
    <styled_AB.AllBox>
      <Header />

      <styled_F.FBox>
        {/*My StopUps 헤더*/}
        <styled_F.FHeader>
          <styled_F.FHTitle>
            <styled_F.FHTInner>
              <styled_F.FHTInnerH4>
                <img
                  src={MyStopUpsHeaderImg}
                  alt={"MyStopUpsHeaderImg"}
                />
              </styled_F.FHTInnerH4>
            </styled_F.FHTInner>
          </styled_F.FHTitle>
        </styled_F.FHeader>
      </styled_F.FBox>

      {/*My StopUps 내용 전체 박스*/}
      <styled_F.FContentsAllBox>
        <styled_F.FCBox>
          <styled_MSU.MSUDiv>
            {/*개인정보, 비밀번호, 매장 및 전체 이벤트 섹션*/}
            <styled_MSU.MSUSection1>
              {/*왼쪽*/}
              <styled_MSU.MSU1ArticleL>
                <styled_MSU.MSU1LP>
                  <styled_MSU.MSU1LPStrong>
                    {email}
                  </styled_MSU.MSU1LPStrong>
                  님 안녕하세요.
                  <br />
                  <styled_MSU.MSU1LPSpan>
                    (지금 스탑업스 카드를 등록하시면 StopUps Rewards
                    혜택을 받으실 수 있습니다.)
                  </styled_MSU.MSU1LPSpan>
                </styled_MSU.MSU1LP>
                <Link to={"/myInfoAgree"}>
                  <styled_MSU.MSU1LButton>
                    개인정보 수정
                  </styled_MSU.MSU1LButton>
                </Link>
                <Link to={"/myInfoPassword"}>
                  <styled_MSU.MSU1LButton>
                    비밀번호 변경
                  </styled_MSU.MSU1LButton>
                </Link>
              </styled_MSU.MSU1ArticleL>
              {/*오른쪽*/}
              <styled_MSU.MSU1ArticleR>
                {/*위*/}
                <styled_MSU.HSU1RDivU>
                  <Link to={"/serviceReady"}>
                    <styled_MSU.HSU1RULink>
                      <styled_MSU.HSU1RUImg />
                      <styled_MSU.HSU1RUText>
                        신규 매장
                        <br />
                        <styled_MSU.HSU1RUTStrong>
                          오픈 이벤트
                        </styled_MSU.HSU1RUTStrong>
                      </styled_MSU.HSU1RUText>
                      <styled_MSU.HSU1RUSpan />
                    </styled_MSU.HSU1RULink>
                  </Link>
                </styled_MSU.HSU1RDivU>
                {/*아래*/}
                <styled_MSU.HSU1RDivD>
                  <Link to={"/event/all"}>
                    <styled_MSU.HSU1RULink>
                      <styled_MSU.HSU1RDImg />
                      <styled_MSU.HSU1RDText>
                        스타벅스
                        <br />
                        <styled_MSU.HSU1RUTStrong>
                          전체 이벤트
                        </styled_MSU.HSU1RUTStrong>
                      </styled_MSU.HSU1RDText>
                      <styled_MSU.HSU1RDImg />
                      <styled_MSU.HSU1RUSpan />
                    </styled_MSU.HSU1RULink>
                  </Link>
                </styled_MSU.HSU1RDivD>
              </styled_MSU.MSU1ArticleR>
            </styled_MSU.MSUSection1>

            {/*카드 및 혜택 보기, 카드 구매 섹션*/}
            {/*구현 미지수*/}
            <styled_MSU.MSUSection2>
              {/*위*/}
              <styled_MSU.MSU2DivU>
                {/*이미지*/}
                <styled_MSU.MSU2DUIconBox>
                  <styled_MSU.MSU2DUIcon />
                </styled_MSU.MSU2DUIconBox>
                {/*텍스트*/}
                <styled_MSU.MSU2DUContBox>
                  <styled_MSU.MSU2DUCont>
                    <styled_MSU.MSU2DUCStrong>
                      아직 등록된 스탑업스 카드가 없으신가요?
                    </styled_MSU.MSU2DUCStrong>
                    <br />
                    스탑업스 카드를 등록하시고 생일 무료음료 쿠폰과
                    다양한 스탑업스의
                    <br />
                    리워드를 경험하세요. 스탑업스만의 특별한 혜택을
                    경험하실 수 있습니다.
                  </styled_MSU.MSU2DUCont>
                  <Link to={"/serviceReady"}>
                    <styled_MSU.MSU2DUButton1>
                      스탑업스 카드 보기
                    </styled_MSU.MSU2DUButton1>
                  </Link>
                  <Link to={"/serviceReady"}>
                    <styled_MSU.MSU2DUButton2>
                      스탑업스 e-Gift Card 구매
                    </styled_MSU.MSU2DUButton2>
                  </Link>
                </styled_MSU.MSU2DUContBox>
              </styled_MSU.MSU2DivU>
              {/*아래*/}
              <styled_MSU.MSU2DivD>
                {/*이미지*/}
                <styled_MSU.MSU2DUIconBox>
                  <styled_MSU.MSU2DDIcon />
                </styled_MSU.MSU2DUIconBox>
                {/*텍스트*/}
                <styled_MSU.MSU2DUContBox>
                  <styled_MSU.MSU2DDCont>
                    <styled_MSU.MSU2DUCStrong>
                      스탑업스만의 특별한 혜택이 궁금하신가요?
                    </styled_MSU.MSU2DUCStrong>
                    <br />
                    혜책에 편리함까지 더한 스탑업스 리워드로
                    <br />
                    한층 더 스탑업스를 특별하게 즐기세요.
                  </styled_MSU.MSU2DDCont>
                  <Link to={"/serviceReady"}>
                    <styled_MSU.MSU2DDButton>
                      스탑업스 혜택보기
                    </styled_MSU.MSU2DDButton>
                  </Link>
                </styled_MSU.MSU2DUContBox>
              </styled_MSU.MSU2DivD>
            </styled_MSU.MSUSection2>

            {/*새 매장 소개, 카드 등록, 충전, 영수증, 캘린더, 쿠폰*/}
            {/*구현 미지수*/}
            <styled_MSU.MSUSection3>
              {/*왼쪽*/}
              <styled_MSU.MSU3ArticleL>
                {/*헤더*/}
                <styled_MSU.MSU3LHeader>
                  <styled_MSU.MSU3LHStrong>
                    새로운 스탑업스 매장을 소개합니다.
                  </styled_MSU.MSU3LHStrong>
                  <br />
                  전국의 새로운 스탑업스의 얼굴들을 만나보세요~!
                </styled_MSU.MSU3LHeader>
                {/*내용*/}
                {/*신규 매장 없을 때로 만듬*/}
                <styled_MSU.MSU3LSlider>
                  <styled_MSU.MSUDiv>
                    <styled_MSU.MSU3LSFigure>
                      <styled_MSU.MSU3LSFImg
                        src={MSUNoStore}
                        alt={"MSUNoStore"}
                      />
                    </styled_MSU.MSU3LSFigure>
                    <styled_MSU.MSU3LSFP>
                      신규 매장이 없습니다.
                    </styled_MSU.MSU3LSFP>
                  </styled_MSU.MSUDiv>
                </styled_MSU.MSU3LSlider>
              </styled_MSU.MSU3ArticleL>
              {/*오른쪽*/}
              <styled_MSU.MSU3ArticleR>
                {/*카드 등록*/}
                <styled_MSU.MSU3RRegiCard>
                  <Link to={"/serviceReady"}>
                    <styled_MSU.MSU3RRCFigure />
                    <styled_MSU.MSU3RRCP>
                      <styled_MSU.MSU3RRCPStrong>
                        카드등록
                      </styled_MSU.MSU3RRCPStrong>
                      <br />
                      카드를 등록하시고 다양한 리워드를 만나보세요.
                    </styled_MSU.MSU3RRCP>
                  </Link>
                </styled_MSU.MSU3RRegiCard>
                {/*카드 충전*/}
                <styled_MSU.MSU3RChargeCare>
                  <Link to={"/serviceReady"}>
                    <styled_MSU.MSU3RCCFigure />
                    <styled_MSU.MSU3CCP>
                      <styled_MSU.MSU3RRCPStrong>
                        카드충전
                      </styled_MSU.MSU3RRCPStrong>
                      <br />
                      매장과 온라인에서 간편하게 충전하세요.
                    </styled_MSU.MSU3CCP>
                  </Link>
                </styled_MSU.MSU3RChargeCare>
                {/*나머지 아이콘들*/}
                <styled_MSU.MSU3RIconsBox>
                  {/*왼쪽*/}
                  <Link to={"/serviceReady"}>
                    <styled_MSU.MSU3RIBLink1>
                      <styled_MSU.MSU3RIBIconSpan1 />
                      <styled_MSU.MSU3RIBTextSpan>
                        전자영수증
                      </styled_MSU.MSU3RIBTextSpan>
                    </styled_MSU.MSU3RIBLink1>
                  </Link>
                  {/*가운데*/}
                  <Link to={"/serviceReady"}>
                    <styled_MSU.MSU3RIBLink2>
                      <styled_MSU.MSU3RIBIconSpan2 />
                      <styled_MSU.MSU3RIBTextSpan>
                        캘린더
                      </styled_MSU.MSU3RIBTextSpan>
                    </styled_MSU.MSU3RIBLink2>
                  </Link>
                  {/*중간*/}
                  <Link to={"/serviceReady"}>
                    <styled_MSU.MSU3RIBLink3>
                      <styled_MSU.MSU3RIBIconSpan3>
                        <styled_MSU.MSU3RIBIconI3>
                          0
                        </styled_MSU.MSU3RIBIconI3>
                      </styled_MSU.MSU3RIBIconSpan3>
                      <styled_MSU.MSU3RIBTextSpan>
                        e-쿠폰
                      </styled_MSU.MSU3RIBTextSpan>
                    </styled_MSU.MSU3RIBLink3>
                  </Link>
                </styled_MSU.MSU3RIconsBox>
              </styled_MSU.MSU3ArticleR>
            </styled_MSU.MSUSection3>
          </styled_MSU.MSUDiv>
        </styled_F.FCBox>
      </styled_F.FContentsAllBox>

      <Footer />
    </styled_AB.AllBox>
  );
};

export default MyStopUps;
