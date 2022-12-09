import {
    MSR,
    MSRCGBP,
    MSRCGButton,
    MSRCGift, MSRCGP, MSRCGText,
    MSRCIButton,
    MSRCIH2, MSRCIJoin, MSRCILogin,
    MSRCInfo,
    MSRCIP,
    MSRCIText,
    MSRCont,
    MSRInner,
    MSRLImg,
    MSRLogo
} from "../../styled/Main";
import MSRLogoImg from "../../image/Main/MStopUpsReword/MSRLogo.png";
import {Link} from "react-router-dom";

export const MSReword = () => {
    return (
        <MSR>
            <MSRInner>
                {/*로고*/}
                <MSRLogo>
                    <MSRLImg src={MSRLogoImg} alt={"MSRLogoImg"}/>
                </MSRLogo>
                {/*내용*/}
                <MSRCont>
                    {/*위쪽*/}
                    <MSRCInfo>
                        <MSRCIText>
                            <MSRCIH2>
                                스탑업스만의 특별한 혜택,
                                <br/>
                                <strong>스탑업스 리워드</strong>
                            </MSRCIH2>
                            <MSRCIP>
                                <strong>스탑업스 회원이세요?</strong>
                                로그인을 통해
                                <br/>
                                나만의 리워드를 확인해보세요.
                                <br/>
                                <strong>스탑업스 회원이 아니세요?</strong>
                                <br/>
                                가입을 통해 리워드 혜택을 즐기세요.
                            </MSRCIP>
                        </MSRCIText>
                        {/*height 38px이 안됨*/}
                        <MSRCIButton>
                            <Link to={"/joinAgree"}>
                                <MSRCIJoin>회원가입</MSRCIJoin>
                            </Link>
                            <Link to={"/login"}>
                                <MSRCILogin>로그인</MSRCILogin>
                            </Link>
                        </MSRCIButton>
                    </MSRCInfo>
                    {/*아래쪽*/}
                    <MSRCGift>
                        <MSRCGText>
                            <MSRCGP>
                                회원 가입 후, 스탑업스 e-Gift Card를
                                <br/>스
                                <strong>"나에게 선물하기"로 구매하시고, 편리하게 등록하세요!</strong>
                                카드를 등록하여 스탑업스 리워드 회원이 되신 후,
                                <br/>
                                첫 구매를 하시면 무료 음료쿠폰을 드립니다!
                            </MSRCGP>
                        </MSRCGText>
                        <MSRCGButton>
                            <Link to={"/serviceReady"} style={{textDecoration: "none"}}>
                                <MSRCGBP>e-Gift Card 선물하기</MSRCGBP>
                            </Link>
                        </MSRCGButton>
                    </MSRCGift>
                </MSRCont>
            </MSRInner>
        </MSR>
    );
};

