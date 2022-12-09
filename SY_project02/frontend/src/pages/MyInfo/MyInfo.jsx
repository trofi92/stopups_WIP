import {AllBox} from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {LFB, LFFFieldset, LFInner} from "../../styled/Login/Login";
import {
    RFormP,
    RFSDFigure, RFSDivP,
    RFSection, RFSectionDiv,
    RFSectionStrong,
    RFStrong
} from "../../styled/Join/Join";
import {
    MIBox,
    MIDiv,
    MIEmailInput,
    MIIcons,
    MIIconsPhone,
    MINABDiv,
    MINAgreeBox, MINAInner,
    MINIckSection,
    MINSAgree,
    MINSAgreeInput,
    MINSAgreeLabel,
    MINSH5,
    MIPhoneA,
    MIPhoneDiv,
    MIPhoneInput, MIUnsubscribe, NINInput
} from "../../styled/MyInfo/MyInfo";
import {LJButton} from "../../styled/Button";
import {Footer} from "../../components/Footer/Footer";
import {NickAgree} from "../Join/NickAgree";

const MyInfo = () => {
    return (
        <AllBox>
            <Header/>

            <MIBox>
                <LFB>
                    <LFInner>
                        <form>
                            <LFFFieldset>
                                <RFStrong>개인정보 확인 및 수정</RFStrong>
                                <RFSection>
                                    <MIDiv>
                                        <RFSectionStrong>
                                            이메일
                                        </RFSectionStrong>
                                        <MIEmailInput>유저 이메일</MIEmailInput>
                                    </MIDiv>
                                </RFSection>

                                <RFSection>
                                    <RFSectionDiv>
                                        <RFSectionStrong>
                                            이름(필수)
                                        </RFSectionStrong>
                                        <MIEmailInput>유저 이름</MIEmailInput>
                                    </RFSectionDiv>
                                    <RFSectionDiv>
                                        <RFSectionStrong>
                                            휴대폰(필수)&nbsp;
                                            <MIIcons/>
                                        </RFSectionStrong>
                                        <MIPhoneDiv>
                                            <MIPhoneInput>유저 휴대폰 번호</MIPhoneInput>
                                            <MIPhoneA>인증</MIPhoneA>
                                            <MIIconsPhone/>
                                        </MIPhoneDiv>
                                    </RFSectionDiv>
                                </RFSection>

                                {/*닉네임*/}
                                <RFSection>
                                    <RFSDFigure/>
                                    <RFSDivP>
                                        주문하신 제품을 찾으실 때,
                                        <br/>
                                        파트너가 등록하신 닉네임을 불러드립니다.
                                    </RFSDivP>
                                    <RFSectionDiv>
                                        <RFSectionStrong>
                                            닉네임(필수) &nbsp;
                                            <MIIcons/>
                                        </RFSectionStrong>
                                        <MINIckSection>
                                            <MINSH5>
                                                선택적 개인정보 수집동의 및 이용약관
                                            </MINSH5>
                                            <MINSAgree>
                                                {/*체크 토글 버튼 만들기*/}
                                                <MINSAgreeInput
                                                    type={"checkbox"}
                                                />
                                                <MINSAgreeLabel/>
                                            </MINSAgree>
                                            {/*닉네임 이용약관 동의*/}
                                            <NickAgree/>
                                        </MINIckSection>
                                        {/*체크박스 선택 시 입력 가능*/}
                                        <NINInput
                                            placeholder={"닉네임 입력을 위해 약관에 동의해 주세요."}
                                        />
                                    </RFSectionDiv>
                                </RFSection>
                                <RFormP>
                                    <b>* 필수항목을 모두 입력해야 스탑업스 서비스를 이용하실 수 있습니다.</b>
                                </RFormP>
                                <LJButton>정보수정</LJButton>
                                <MIUnsubscribe>스탑업스 리워드 서비스 이용내역 일괄삭제</MIUnsubscribe>
                            </LFFFieldset>
                        </form>
                    </LFInner>
                </LFB>
            </MIBox>

            <Footer/>
        </AllBox>
    )
};

export default MyInfo;
