import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_JoinAB from "../../styled/Join/JoinAgreeBox";
import * as styled_LOG from "../../styled/Login/Login";
import * as styled_Join from "../../styled/Join/Join";
import * as styled_MIA from "../../styled/MyInfo/MyInfoAgree";
import MIAPhone from "../../image/MyInfo/MIAPhone.jpg"
import {Link} from "react-router-dom";
import {Footer} from "../../components/Footer/Footer";

const MyInfo = () => {
    return (
        <styled_AB.AllBox>
            <Header/>

            <styled_MIA.MIABox>
                <styled_LOG.LFB>
                    <styled_LOG.LFInner>
                        <form>
                            <styled_LOG.LFFFieldset>
                                <styled_Join.RFStrong>개인정보 확인 및 수정</styled_Join.RFStrong>
                                <styled_Join.RFSection>
                                    <styled_Join.RFSectionImg/>
                                    <styled_Join.RFSectionP>개인정보 수정을 위해 아래 인증방법으로 본인 확인이 필요합니다.</styled_Join.RFSectionP>
                                    <styled_MIA.MIAInnerBox>
                                        <styled_MIA.MIAStrong>인증방식 선택</styled_MIA.MIAStrong>
                                        <styled_MIA.MIAP>본인 명의의 휴대폰을 통한 인증 방법입니다.</styled_MIA.MIAP>
                                        <styled_JoinAB.PhonePassBox>
                                            <styled_JoinAB.PPDiv>
                                                <styled_JoinAB.PPFigure>
                                                    <styled_JoinAB.PPFImg src={MIAPhone} alt={"MIAPhone"}/>
                                                </styled_JoinAB.PPFigure>
                                                <styled_MIA.MIAPText>휴대폰 인증</styled_MIA.MIAPText>
                                                <styled_MIA.MIAPText2>
                                                    본인 명의의 휴대폰으로 본인 인증을 통해, 개인정보를
                                                    <br/>
                                                    확인 및 수정하실 수 있습니다.
                                                </styled_MIA.MIAPText2>
                                                <Link to={"/myInfoPass"} style={{textDecoration: "none"}}>
                                                    <styled_MIA.MIAPButton>
                                                        인증하기
                                                    </styled_MIA.MIAPButton>
                                                </Link>
                                            </styled_JoinAB.PPDiv>
                                        </styled_JoinAB.PhonePassBox>
                                    </styled_MIA.MIAInnerBox>
                                </styled_Join.RFSection>
                            </styled_LOG.LFFFieldset>
                        </form>
                    </styled_LOG.LFInner>
                </styled_LOG.LFB>
            </styled_MIA.MIABox>

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default MyInfo;
