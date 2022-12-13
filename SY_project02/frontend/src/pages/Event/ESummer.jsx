import * as styled_AB from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import * as styled_Notice from "../../styled/Notice/Notice";
import ETitle from "../../image/Event/ETitle.jpg";
import * as styled_ESummer from "../../styled/Event/ESummer";
import ESFaceBook from "../../image/Event/ESummer/ESFaceBook.png"
import ESMenu from "../../image/Event/ESummer/ESMenu.jpg"
import ESDessert from "../../image/Event/ESummer/ESDessert.jpg"
import ESMD from "../../image/Event/ESummer/ESMD.jpg"
import ESBlend from "../../image/Event/ESummer/ESBlend.jpg"
import ESCard from "../../image/Event/ESummer/ESCard.jpg"
import {Link} from "react-router-dom";

const ESummer = () => {
    return(
        <styled_AB.AllBox>
            <Header/>

            {/*이벤트 타이틀*/}
            <styled_Notice.NTitleBox>
                <styled_Notice.NTInner>
                    <styled_Notice.NTIH2>
                        <styled_Notice.NTIImg src={ETitle} alt={"ETitle"}/>
                    </styled_Notice.NTIH2>
                </styled_Notice.NTInner>
            </styled_Notice.NTitleBox>
            {/*이벤트 전체 박스*/}
            <styled_ESummer.ESBox>
                <styled_ESummer.ESBPosition>
                    <styled_ESummer.ESSection>
                        {/*섹션의 헤더*/}
                        <styled_ESummer.ESSHeader>
                            <styled_ESummer.ESSHH3>
                                서머 2 프로모션
                                <styled_ESummer.ESSHSpan>2022-07-26~2022-09-01</styled_ESummer.ESSHSpan>
                            </styled_ESummer.ESSHH3>
                            <styled_ESummer.ESSUl>
                                <styled_ESummer.ESSLi>
                                    <styled_ESummer.ESSLA>
                                        <styled_ESummer.ESSLAImg src={ESFaceBook} alt={"ESFaceBook"}/>
                                    </styled_ESummer.ESSLA>
                                </styled_ESummer.ESSLi>
                            </styled_ESummer.ESSUl>
                        </styled_ESummer.ESSHeader>
                        {/*섹션의 아티클*/}
                        <styled_ESummer.ESArticle>
                            <styled_ESummer.ESADiv>
                                <styled_ESummer.ESADiv2>
                                    <styled_ESummer.ESADiv3>
                                        {/*음료*/}
                                        <styled_ESummer.ESADiv4>
                                            <styled_ESummer.ESADImg src={ESMenu} alt={"ESMenu"}/>
                                            {/*클릭 시 각 음료 페이지로 이동*/}
                                            <Link to={"#"}>
                                                <styled_ESummer.ESADP1>우리 쑥 크림 프라푸치노 with 콜드 브루</styled_ESummer.ESADP1>
                                            </Link>
                                            <Link to={"#"}>
                                                <styled_ESummer.ESADP2>제주 청귤 라임 에이드</styled_ESummer.ESADP2>
                                            </Link>
                                            <Link to={"#"}>
                                                <styled_ESummer.ESADP3>쿨 서머 캐모마일 블렌디드</styled_ESummer.ESADP3>
                                            </Link>
                                        </styled_ESummer.ESADiv4>
                                        {/*디저트*/}
                                        <styled_ESummer.ESADiv4>
                                            <styled_ESummer.ESADImg src={ESDessert} alt={"ESDessert"}/>
                                        </styled_ESummer.ESADiv4>
                                        {/*MD*/}
                                        <styled_ESummer.ESADiv4>
                                            <styled_ESummer.ESADImg src={ESMD} alt={"ESMD"}/>
                                        </styled_ESummer.ESADiv4>
                                        {/*블랜드*/}
                                        <styled_ESummer.ESADiv4>
                                            <styled_ESummer.ESADImg src={ESBlend} alt={"ESBlend"}/>
                                        </styled_ESummer.ESADiv4>
                                        {/*카드*/}
                                        <styled_ESummer.ESADiv4>
                                            <styled_ESummer.ESADImg src={ESCard} alt={"ESCard"}/>
                                            <Link to={"#"}>
                                                <styled_ESummer.ESADP4>2022 서머 선샤인 카드 자세히보기</styled_ESummer.ESADP4>
                                            </Link>
                                        </styled_ESummer.ESADiv4>
                                    </styled_ESummer.ESADiv3>
                                </styled_ESummer.ESADiv2>
                            </styled_ESummer.ESADiv>
                        </styled_ESummer.ESArticle>
                        {/*목록 버튼*/}
                        <styled_ESummer.ESButtonBox>
                            <Link to={"/event"} style={{textDecoration: "none"}}>
                                <styled_ESummer.ESBP>
                                    목록
                                </styled_ESummer.ESBP>
                            </Link>
                        </styled_ESummer.ESButtonBox>
                    </styled_ESummer.ESSection>
                </styled_ESummer.ESBPosition>
            </styled_ESummer.ESBox>
            <Footer/>
        </styled_AB.AllBox>
    );
};

export default ESummer;
