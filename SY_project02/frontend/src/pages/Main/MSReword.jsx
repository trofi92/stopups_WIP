import * as styled_Main from "../../styled/Main";
import MSRLogoImg from "../../image/Main/MStopUpsReword/MSRLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { decrypt } from "../../utils/crypto-front";

export const MSReword = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  const email = decrypt(user.email);

  return (
    // 로그인 여부에 따라 화면에 다르게 출력
    user.email === "" ? (
      <styled_Main.MSR>
        <styled_Main.MSRInner>
          {/*로고*/}
          <styled_Main.MSRLogo>
            <styled_Main.MSRLImg
              src={MSRLogoImg}
              alt={"MSRLogoImg"}
            />
          </styled_Main.MSRLogo>
          {/*내용*/}
          <styled_Main.MSRCont>
            {/*위쪽*/}
            <styled_Main.MSRCInfo>
              <styled_Main.MSRCIText>
                <styled_Main.MSRCIH2>
                  스탑없으만의 특별한 혜택,
                  <br />
                  <strong>스탑없으 리워드</strong>
                </styled_Main.MSRCIH2>
                <styled_Main.MSRCIP>
                  <strong>스탑없으 회원이세요?</strong>
                  로그인을 통해
                  <br />
                  나만의 리워드를 확인해보세요.
                  <br />
                  <strong>스탑없으 회원이 아니세요?</strong>
                  <br />
                  가입을 통해 리워드 혜택을 즐기세요.
                </styled_Main.MSRCIP>
              </styled_Main.MSRCIText>
              <styled_Main.MSRCIButton>
                <Link to={"/joinAgree"}>
                  <styled_Main.MSRCIJoin>
                    회원가입
                  </styled_Main.MSRCIJoin>
                </Link>
                <Link to={"/login"}>
                  <styled_Main.MSRCILogin>
                    로그인
                  </styled_Main.MSRCILogin>
                </Link>
              </styled_Main.MSRCIButton>
            </styled_Main.MSRCInfo>
            {/*아래쪽*/}
            <styled_Main.MSRCGift>
              <styled_Main.MSRCGText>
                <styled_Main.MSRCGP>
                  회원 가입 후, 스탑없으 e-Gift Card를
                  <br />스
                  <strong>
                    "나에게 선물하기"로 구매하시고, 편리하게
                    등록하세요!
                  </strong>
                  카드를 등록하여 스탑없으 리워드 회원이 되신 후,
                  <br />첫 구매를 하시면 무료 음료쿠폰을 드립니다!
                </styled_Main.MSRCGP>
              </styled_Main.MSRCGText>
              <styled_Main.MSRCGButton>
                <Link
                  to={"/serviceReady"}
                  style={{ textDecoration: "none" }}
                >
                  <styled_Main.MSRCGBP>
                    e-Gift Card 선물하기
                  </styled_Main.MSRCGBP>
                </Link>
              </styled_Main.MSRCGButton>
            </styled_Main.MSRCGift>
          </styled_Main.MSRCont>
        </styled_Main.MSRInner>
      </styled_Main.MSR>
    ) : (
      <styled_Main.MSRL>
        <styled_Main.MSRLInner>
          {/*유저*/}
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Main.MSRLUser>
              <styled_Main.MSRLUP />
              <styled_Main.MSRLUDiv>
                <styled_Main.MSRLUDP>
                  <styled_Main.MSRLUDPSpan1>
                    <strong>{email}</strong>
                    님, 안녕하세요!
                  </styled_Main.MSRLUDPSpan1>
                  <styled_Main.MSRLUDPSpan2>
                    혜택에 편리함까지 더한 스탑없으 리워드를
                    즐겨보세요.
                  </styled_Main.MSRLUDPSpan2>
                </styled_Main.MSRLUDP>
              </styled_Main.MSRLUDiv>
            </styled_Main.MSRLUser>
          </Link>
          {/*카드*/}
          <Link
            to={"/serviceReady"}
            style={{ textDecoration: "none" }}
          >
            <styled_Main.MSRLCard>
              <styled_Main.MSRLCP />
              <styled_Main.MSRLCPTxt>
                <styled_Main.MSRLCPTStrong>
                  스탑없으 카드 등록
                </styled_Main.MSRLCPTStrong>
                <br />
                등록된 카드가 없습니다.
                <br />
                새로우 카드를 등록하세요.
              </styled_Main.MSRLCPTxt>
            </styled_Main.MSRLCard>
          </Link>
        </styled_Main.MSRLInner>
      </styled_Main.MSRL>
    )
  );
};
