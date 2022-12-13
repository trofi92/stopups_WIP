import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_LOG from "../../styled/Login/Login";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_MI from "../../styled/MyInfo/MyInfo";
import * as styled_BU from "../../styled/Button";
import {Footer} from "../../components/Footer/Footer";
import {NickAgree} from "../Join/NickAgree";

const MyInfo = () => {
    return (
        <styled_AB.AllBox>
            <Header/>

            <styled_MI.MIBox>
                <styled_LOG.LFB>
                    <styled_LOG.LFInner>
                        <form>
                            <styled_LOG.LFFFieldset>
                                <styled_Join.RFStrong>개인정보 확인 및 수정</styled_Join.RFStrong>
                                <styled_Join.RFSection>
                                    <styled_MI.MIDiv>
                                        <styled_Join.RFSectionStrong>
                                            이메일
                                        </styled_Join.RFSectionStrong>
                                        <styled_MI.MIEmailInput>유저 이메일</styled_MI.MIEmailInput>
                                    </styled_MI.MIDiv>
                                </styled_Join.RFSection>

                                <styled_Join.RFSection>
                                    <styled_Join.RFSectionDiv>
                                        <styled_Join.RFSectionStrong>
                                            이름(필수)
                                        </styled_Join.RFSectionStrong>
                                        <styled_MI.MIEmailInput>유저 이름</styled_MI.MIEmailInput>
                                    </styled_Join.RFSectionDiv>
                                    <styled_Join.RFSectionDiv>
                                        <styled_Join.RFSectionStrong>
                                            휴대폰(필수)&nbsp;
                                            <styled_MI.MIIcons/>
                                        </styled_Join.RFSectionStrong>
                                        <styled_MI.MIPhoneDiv>
                                            <styled_MI.MIPhoneInput>유저 휴대폰 번호</styled_MI.MIPhoneInput>
                                            <styled_MI.MIPhoneA>인증</styled_MI.MIPhoneA>
                                            <styled_MI.MIIconsPhone/>
                                        </styled_MI.MIPhoneDiv>
                                    </styled_Join.RFSectionDiv>
                                </styled_Join.RFSection>

                                {/*닉네임*/}
                                <styled_Join.RFSection>
                                    <styled_Join.RFSDFigure/>
                                    <styled_Join.RFSDivP>
                                        주문하신 제품을 찾으실 때,
                                        <br/>
                                        파트너가 등록하신 닉네임을 불러드립니다.
                                    </styled_Join.RFSDivP>
                                    <styled_Join.RFSectionDiv>
                                        <styled_Join.RFSectionStrong>
                                            닉네임(필수) &nbsp;
                                            <styled_MI.MIIcons/>
                                        </styled_Join.RFSectionStrong>
                                        <styled_MI.MINIckSection>
                                            <styled_MI.MINSH5>
                                                선택적 개인정보 수집동의 및 이용약관
                                            </styled_MI.MINSH5>
                                            <styled_MI.MINSAgree>
                                                {/*체크 토글 버튼 만들기*/}
                                                <styled_MI.MINSAgreeInput
                                                    type={"checkbox"}
                                                />
                                                <styled_MI.MINSAgreeLabel/>
                                            </styled_MI.MINSAgree>
                                            {/*닉네임 이용약관 동의*/}
                                            <NickAgree/>
                                        </styled_MI.MINIckSection>
                                        {/*체크박스 선택 시 입력 가능*/}
                                        <styled_MI.NINInput
                                            placeholder={"닉네임 입력을 위해 약관에 동의해 주세요."}
                                        />
                                    </styled_Join.RFSectionDiv>
                                </styled_Join.RFSection>
                                <styled_Join.RFormP>
                                    <b>* 필수항목을 모두 입력해야 스탑업스 서비스를 이용하실 수 있습니다.</b>
                                </styled_Join.RFormP>
                                <styled_BU.LJButton>정보수정</styled_BU.LJButton>
                                <styled_MI.MIUnsubscribe>스탑업스 리워드 서비스 이용내역 일괄삭제</styled_MI.MIUnsubscribe>
                            </styled_LOG.LFFFieldset>
                        </form>
                    </styled_LOG.LFInner>
                </styled_LOG.LFB>
            </styled_MI.MIBox>

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default MyInfo;
