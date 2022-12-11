import {AllBox} from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {NTIH2, NTIImg, NTInner, NTitleBox} from "../../styled/Notice/Notice";
import ETitle from "../../image/Event/ETitle.jpg";
import {
    ESADImg,
    ESADiv, ESADiv2, ESADiv3, ESADiv4, ESADP1, ESADP2, ESADP3, ESADP4,
    ESArticle,
    ESBox, ESBP, ESBPButton,
    ESBPosition, ESButtonBox,
    ESSection,
    ESSHeader,
    ESSHH3,
    ESSHSpan,
    ESSLA, ESSLAImg,
    ESSLi,
    ESSUl
} from "../../styled/Event/ESummer";
import ESFaceBook from "../../image/Event/ESummer/ESFaceBook.png"
import ESMenu from "../../image/Event/ESummer/ESMenu.jpg"
import ESDessert from "../../image/Event/ESummer/ESDessert.jpg"
import ESMD from "../../image/Event/ESummer/ESMD.jpg"
import ESBlend from "../../image/Event/ESummer/ESBlend.jpg"
import ESCard from "../../image/Event/ESummer/ESCard.jpg"
import {Link} from "react-router-dom";

const ESummer = () => {
    return(
        <AllBox>
            <Header/>

            {/*이벤트 타이틀*/}
            <NTitleBox>
                <NTInner>
                    <NTIH2>
                        <NTIImg src={ETitle} alt={"ETitle"}/>
                    </NTIH2>
                </NTInner>
            </NTitleBox>
            {/*이벤트 전체 박스*/}
            <ESBox>
                <ESBPosition>
                    <ESSection>
                        {/*섹션의 헤더*/}
                        <ESSHeader>
                            <ESSHH3>
                                서머 2 프로모션
                                <ESSHSpan>2022-07-26~2022-09-01</ESSHSpan>
                            </ESSHH3>
                            <ESSUl>
                                <ESSLi>
                                    <ESSLA>
                                        <ESSLAImg src={ESFaceBook} alt={"ESFaceBook"}/>
                                    </ESSLA>
                                </ESSLi>
                            </ESSUl>
                        </ESSHeader>
                        {/*섹션의 아티클*/}
                        <ESArticle>
                            <ESADiv>
                                <ESADiv2>
                                    <ESADiv3>
                                        {/*음료*/}
                                        <ESADiv4>
                                            <ESADImg src={ESMenu} alt={"ESMenu"}/>
                                            {/*클릭 시 각 음료 페이지로 이동*/}
                                            <Link to={"#"}>
                                                <ESADP1>우리 쑥 크림 프라푸치노 with 콜드 브루</ESADP1>
                                            </Link>
                                            <Link to={"#"}>
                                                <ESADP2>제주 청귤 라임 에이드</ESADP2>
                                            </Link>
                                            <Link to={"#"}>
                                                <ESADP3>쿨 서머 캐모마일 블렌디드</ESADP3>
                                            </Link>
                                        </ESADiv4>
                                        {/*디저트*/}
                                        <ESADiv4>
                                            <ESADImg src={ESDessert} alt={"ESDessert"}/>
                                        </ESADiv4>
                                        {/*MD*/}
                                        <ESADiv4>
                                            <ESADImg src={ESMD} alt={"ESMD"}/>
                                        </ESADiv4>
                                        {/*블랜드*/}
                                        <ESADiv4>
                                            <ESADImg src={ESBlend} alt={"ESBlend"}/>
                                        </ESADiv4>
                                        {/*카드*/}
                                        <ESADiv4>
                                            <ESADImg src={ESCard} alt={"ESCard"}/>
                                            <Link to={"#"}>
                                                <ESADP4>2022 서머 선샤인 카드 자세히보기</ESADP4>
                                            </Link>
                                        </ESADiv4>
                                    </ESADiv3>
                                </ESADiv2>
                            </ESADiv>
                        </ESArticle>
                        {/*목록 버튼*/}
                        <ESButtonBox>
                            <Link to={"/event"} style={{textDecoration: "none"}}>
                                <ESBP>
                                    목록
                                </ESBP>
                            </Link>
                        </ESButtonBox>
                    </ESSection>
                </ESBPosition>
            </ESBox>
            <Footer/>
        </AllBox>
    );
}

export default ESummer;