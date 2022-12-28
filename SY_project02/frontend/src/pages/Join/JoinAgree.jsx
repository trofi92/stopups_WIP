import Header from "../../components/Header/Header";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_LOG from "../../styled/Login/Login";
import {Footer} from "../../components/Footer/Footer";
import * as styled_AB from "../../styled/AllBox";
import {HomePageAgree} from "./HomePageAgree";
import {UserAgree} from "./UserAgree";
import {useNavigate} from "react-router-dom";
import * as styled_JoinAB from "../../styled/Join/JoinAgreeBox";
import PhonePassImg from "../../image/Join/PhonePassImg.png"
import {useState} from "react";

const JoinAgree = () => {
    const [checkedHome, setCheckedHome] = useState(false);
    const [checkedUser, setCheckedUser] = useState(false);

    const navigator = useNavigate();

    const onClickCheckedHome = () => {
        setCheckedHome(!checkedHome);
        console.log("home=>", !checkedHome);
    };

    const onClickCheckedUser = () => {
        setCheckedUser(!checkedUser);
        console.log("user=>", !checkedUser);
    };

    const onSubmitAgree = (e) => {
        e.preventDefault();
        if (checkedHome !== true) {
            alert("홈페이지 이용약관 동의에 동의하셔야 합니다.")
        } else if (checkedUser !== true) {
            alert("개인정보 수집 및 이용동의에 동의하셔야 합니다.")
        } else {
            navigator("/joinPass");
        }
    }

    return (
        <styled_AB.AllBox>
            <Header/>

            <styled_JoinAB.JABox>
                <styled_LOG.LFB>
                    <styled_LOG.LFInner>
                        {/*회원가입 동의 폼*/}
                        <form method={"post"}>
                            <styled_LOG.LFFFieldset>
                                <styled_Join.RFStrong>회원가입</styled_Join.RFStrong>
                                <styled_Join.RFSection>
                                    <styled_Join.RFSectionImg/>
                                    <styled_Join.RFSectionP>회원가입 약관동의 및 본인인증단계입니다.</styled_Join.RFSectionP>
                                    <styled_Join.RFSectionDiv>
                                        <styled_Join.RFSectionStrong>
                                            홈페이지 이용약관 동의
                                            <styled_Join.RFSectionSpan>(필수)</styled_Join.RFSectionSpan>
                                        </styled_Join.RFSectionStrong>
                                        {/*체크*/}
                                        <styled_Join.AgreeSpan>
                                            {/*체크 토글 버튼 만들기*/}
                                            <styled_Join.AIH
                                                type={"checkbox"}
                                                onClick={onClickCheckedHome}
                                                checkedHome={checkedHome}
                                            />
                                        </styled_Join.AgreeSpan>
                                        {/*동의 약관 내용 박스*/}
                                        <HomePageAgree/>
                                    </styled_Join.RFSectionDiv>
                                    <styled_Join.RFSectionDiv>
                                        <styled_Join.RFSectionStrong>
                                            개인정보 수집 및 이용동의
                                            <styled_Join.RFSectionSpan>(필수)</styled_Join.RFSectionSpan>
                                        </styled_Join.RFSectionStrong>
                                        <styled_Join.AgreeSpan>
                                            {/*체크 토글 버튼 만들기*/}
                                            <styled_Join.AIH
                                                type={"checkbox"}
                                                onClick={onClickCheckedUser}
                                                checkedUser={checkedUser}
                                            />
                                        </styled_Join.AgreeSpan>
                                        {/*동의 약관 내용 박스*/}
                                        <UserAgree/>
                                    </styled_Join.RFSectionDiv>

                                    <styled_Join.RFSectionDiv>
                                        <styled_Join.RFSectionStrong>
                                            회원가입 유의 사항
                                        </styled_Join.RFSectionStrong>
                                        <styled_JoinAB.RFSNoticeUl>
                                            <styled_JoinAB.RFSNoticeLi>
                                                반드시 회원님 명의로 된 휴대폰, 아이핀을 이용해주세요.
                                            </styled_JoinAB.RFSNoticeLi>
                                            <styled_JoinAB.RFSNoticeLi>
                                                타인의 개인정보를 도용하여 가입할 경우 향후 적발 시 서비스 이용제한 및 법적 제재를 받으실 수 있습니다.
                                            </styled_JoinAB.RFSNoticeLi>
                                            <styled_JoinAB.RFSNoticeLi>
                                                스탑업스 코리아의 공식 홈페이지는 Internet Explorer 9.0이상, Chrome, Firefox, Safari
                                                브라우저에 최적화 되어있습니다.
                                            </styled_JoinAB.RFSNoticeLi>
                                        </styled_JoinAB.RFSNoticeUl>
                                    </styled_Join.RFSectionDiv>

                                    {/*인증방식 선택 박스*/}
                                    <styled_Join.RFSectionDiv>
                                        <styled_Join.RFSectionStrong>
                                            인증방식 선택
                                        </styled_Join.RFSectionStrong>
                                        <styled_JoinAB.PhonePassBox>
                                            <styled_JoinAB.PPDiv>
                                                <styled_JoinAB.PPFigure>
                                                    <styled_JoinAB.PPFImg src={PhonePassImg} alt={"PhonePassImg"}/>
                                                </styled_JoinAB.PPFigure>
                                                <styled_JoinAB.PPPTitle>휴대폰 인증</styled_JoinAB.PPPTitle>
                                                <styled_JoinAB.PPPText>본인 명의의 휴대폰을 통해 인증합니다.</styled_JoinAB.PPPText>
                                                <styled_JoinAB.PPPButtonBox
                                                    onClick={onSubmitAgree}
                                                >
                                                    인증하기
                                                </styled_JoinAB.PPPButtonBox>
                                            </styled_JoinAB.PPDiv>
                                        </styled_JoinAB.PhonePassBox>
                                    </styled_Join.RFSectionDiv>
                                </styled_Join.RFSection>
                            </styled_LOG.LFFFieldset>
                        </form>
                    </styled_LOG.LFInner>
                </styled_LOG.LFB>
            </styled_JoinAB.JABox>

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default JoinAgree;
