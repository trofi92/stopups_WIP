import * as styled_AB from "../../../styled/AllBox";
import Header from "../../../components/Header/Header";
import * as styled_LOG from "../../../styled/Login/Login";
import * as styled_Join from "../../../styled/Join/Join";
import * as styled_LFId from "../../../styled/Login/LFindId";
import * as styled_BU from "../../../styled/Button";
import {Link} from "react-router-dom";
import {Footer} from "../../../components/Footer/Footer";


const LFindId = () => {
    return (
        <styled_AB.AllBox>
            <Header/>

            <styled_LFId.LFIBox>
                <styled_LOG.LFB>
                    <styled_LOG.LFInner>
                        <styled_LOG.LFFFieldset>
                            <styled_Join.RFStrong>아이디 찾기</styled_Join.RFStrong>
                            <styled_Join.RFSection>
                                <styled_LFId.LFIDDiv>
                                    <styled_Join.RFSectionImg/>
                                    <styled_LFId.LFIDP>
                                        <styled_LFId.LFIDStrong>
                                            고객님의 아이디는
                                            <styled_LFId.LFIDSpanColor>유저 아이디</styled_LFId.LFIDSpanColor>
                                            입니다
                                        </styled_LFId.LFIDStrong>
                                    </styled_LFId.LFIDP>
                                </styled_LFId.LFIDDiv>
                            </styled_Join.RFSection>
                            <Link to={"/login"} style={{textDecoration: "none"}}>
                                <styled_BU.LJButton>로그인</styled_BU.LJButton>
                            </Link>
                        </styled_LOG.LFFFieldset>
                    </styled_LOG.LFInner>
                </styled_LOG.LFB>
            </styled_LFId.LFIBox>

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default LFindId;
