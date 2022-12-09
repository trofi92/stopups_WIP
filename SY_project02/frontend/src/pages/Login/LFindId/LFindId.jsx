import {AllBox} from "../../../styled/AllBox";
import Header from "../../../components/Header/Header";
import {LFB, LFFFieldset, LFInner} from "../../../styled/Login/Login";
import {RFSection, RFSectionImg, RFSectionP, RFStrong} from "../../../styled/Join/Join";
import {MIABox} from "../../../styled/MyInfo/MyInfoAgree";
import {LFIBox, LFIDDiv, LFIDP, LFIDSpanColor, LFIDStrong} from "../../../styled/Login/LFindId";
import {LJButton} from "../../../styled/Button";
import {Link} from "react-router-dom";
import {Footer} from "../../../components/Footer/Footer";


const LFindId = () => {
    return (
        <AllBox>
            <Header/>

            <LFIBox>
                <LFB>
                    <LFInner>
                        <LFFFieldset>
                            <RFStrong>아이디 찾기</RFStrong>
                            <RFSection>
                                <LFIDDiv>
                                    <RFSectionImg/>
                                    <LFIDP>
                                        <LFIDStrong>
                                            고객님의 아이디는
                                            <LFIDSpanColor>유저 아이디</LFIDSpanColor>
                                            입니다
                                        </LFIDStrong>
                                    </LFIDP>
                                </LFIDDiv>
                            </RFSection>
                            <Link to={"/login"} style={{textDecoration: "none"}}>
                                <LJButton>로그인</LJButton>
                            </Link>
                        </LFFFieldset>
                    </LFInner>
                </LFB>
            </LFIBox>

            <Footer/>
        </AllBox>
    );
};

export default LFindId;