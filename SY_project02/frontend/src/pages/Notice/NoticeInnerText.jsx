import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import * as styled_Notice from "../../styled/Notice/Notice";
import NTitleImg from "../../image/Notice/Ntitle.jpg";
import * as styled_NoticeIT from "../../styled/Notice/NoticeInnerText";
import ESFaceBook from "../../image/Event/ESummer/ESFaceBook.png";
import * as styled_ESummer from "../../styled/Event/ESummer";
import {Link} from "react-router-dom";
import {Footer} from "../../components/Footer/Footer";

const NoticeInnerText = () => {

    return (
        <styled_AB.AllBox>
            <Header/>
            {/*공지사항 타이틀*/}
            <styled_Notice.NTitleBox>
                <styled_Notice.NTInner>
                    <styled_Notice.NTIH2>
                        <styled_Notice.NTIImg src={NTitleImg} alt={"NTitleImg"}/>
                    </styled_Notice.NTIH2>
                </styled_Notice.NTInner>
            </styled_Notice.NTitleBox>

            {/*공지사항 내용*/}
            <styled_NoticeIT.NITBox>
                <styled_NoticeIT.NITInnerBox>
                    {/*본문*/}
                    <styled_NoticeIT.NITSection>
                        {/*제목*/}
                        <styled_NoticeIT.NITHeader>
                            <styled_NoticeIT.NITH3>
                                시스템 개선 및 서비스 점검 안내
                                <styled_NoticeIT.NITHSpan/>
                            </styled_NoticeIT.NITH3>
                            <styled_NoticeIT.NITUl>
                                <styled_NoticeIT.NITLi>
                                    <styled_ESummer.ESSLAImg src={ESFaceBook} alt={"ESFaceBook"}/>
                                </styled_NoticeIT.NITLi>
                            </styled_NoticeIT.NITUl>
                        </styled_NoticeIT.NITHeader>
                        {/*본문 내용*/}
                        <styled_NoticeIT.NITArticle>
                            <styled_NoticeIT.NITAInner>
                                {/*한 줄씩 받아와서 적기*/}
                                <styled_NoticeIT.NITAP>
                                    <styled_NoticeIT.NITASpan>
                                        공지사항 내용
                                    </styled_NoticeIT.NITASpan>
                                </styled_NoticeIT.NITAP>
                                <styled_NoticeIT.NITAP>
                                    <styled_NoticeIT.NITASpan>
                                        공지사항 내용
                                        <styled_NoticeIT.NITASpan> 이런 식으로 </styled_NoticeIT.NITASpan>
                                        <styled_NoticeIT.NITASpan>해놨던데 </styled_NoticeIT.NITASpan>
                                        <styled_NoticeIT.NITASpan>왜지</styled_NoticeIT.NITASpan>
                                    </styled_NoticeIT.NITASpan>
                                </styled_NoticeIT.NITAP>
                            </styled_NoticeIT.NITAInner>
                        </styled_NoticeIT.NITArticle>
                        {/*목록 버튼*/}
                        <styled_NoticeIT.NITButtonBox>
                            <Link to={"/notice"}>
                                <styled_NoticeIT.NITButton>
                                    목록
                                </styled_NoticeIT.NITButton>
                            </Link>
                        </styled_NoticeIT.NITButtonBox>
                    </styled_NoticeIT.NITSection>
                    {/*윗글, 아랫글*/}
                    <styled_NoticeIT.NITTable>
                        <colgroup>
                            <col width={"18.181818%"}/>
                            <col width={"89.818182%"}/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <styled_NoticeIT.NITTh>윗글</styled_NoticeIT.NITTh>
                                <styled_NoticeIT.NITTd>
                                    <Link to={"#"} style={{textDecoration: "none"}}>
                                        <styled_NoticeIT.NITTdP>윗글 제목</styled_NoticeIT.NITTdP>
                                    </Link>
                                </styled_NoticeIT.NITTd>
                            </tr>
                            <tr>
                                <styled_NoticeIT.NITTh>아랫글</styled_NoticeIT.NITTh>
                                <styled_NoticeIT.NITTd>
                                    <Link to={"#"} style={{textDecoration: "none"}}>
                                        <styled_NoticeIT.NITTdP>아랫글 제목</styled_NoticeIT.NITTdP>
                                    </Link>
                                </styled_NoticeIT.NITTd>
                            </tr>
                        </tbody>
                    </styled_NoticeIT.NITTable>
                </styled_NoticeIT.NITInnerBox>
            </styled_NoticeIT.NITBox>

            <Footer/>
        </styled_AB.AllBox>
    );
};

export default NoticeInnerText;
