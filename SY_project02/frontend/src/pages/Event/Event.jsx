import {AllBox} from "../../styled/AllBox";
import Header from "../../components/Header/Header";
import {NTIH2, NTIImg, NTInner, NTitleBox} from "../../styled/Notice/Notice";
import ETitle from "../../image/Event/ETitle.jpg";
import {
    EBox,
    EBPosition,
    ESA,
    ESAClicked,
    ESArticle, ESDd,
    ESDiv, ESDl, ESDLA, ESDLDd, ESDLDl, ESDLDt, ESDLH4, ESDLi, ESDLImg, ESDLP, ESDt, ESDUl,
    ESection,
    ESH31,
    ESH32,
    ESH33,
    ESH34, ESList
} from "../../styled/Event/Event";
import ESTitle from "../../image/Event/ESTitle.jpg"
import {Link} from "react-router-dom";

const Event = () => {
    // 각 이벤트 버튼 클릭 시 버튼 ESAClicked로 변경 및 ESArticle display:block 변경

    return (
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
            <EBox>
                <EBPosition>
                    <ESection>
                        {/*이벤트 종류 버튼 박스*/}
                        <ESDiv/>
                        {/*이벤트 종류 버튼*/}
                        <ESH31>
                            {/*클릭된 이벤트 종류*/}
                            <ESAClicked href={"#"}>전체</ESAClicked>
                        </ESH31>
                        {/*전체 - 진행&종료 이벤트 전체 박스*/}
                        <ESArticle>
                            <ESList>
                                <ESDl>
                                    {/*진행 이벤트*/}
                                    <ESDt>진행 이벤트</ESDt>
                                    <ESDd>
                                        <ESDUl>
                                            {/*각각 이벤트*/}
                                            <ESDLi>
                                                <ESDLDl>
                                                    <ESDLDt>
                                                        <ESDLA>
                                                            <Link to={"/summerEvent"}>
                                                                <ESDLImg src={ESTitle} alt={"ESTitle"}/>
                                                            </Link>
                                                        </ESDLA>
                                                    </ESDLDt>
                                                    <ESDLDd>
                                                        <ESDLH4>서머 2 프로모션</ESDLH4>
                                                        <ESDLP>2022-07-26~2022-09-01</ESDLP>
                                                    </ESDLDd>
                                                </ESDLDl>
                                            </ESDLi>
                                        </ESDUl>
                                    </ESDd>
                                    {/*종료 이벤트*/}
                                    <ESDt>종료 이벤트</ESDt>
                                    <ESDd></ESDd>
                                </ESDl>
                            </ESList>
                        </ESArticle>
                        <ESH32>
                            <ESA href={"#"} id={"StopUpsCard"}>스탑업스 카드</ESA>
                        </ESH32>
                        {/*/!*스탑업스 카드 - 진행&종료 이벤트 전체 박스*!/*/}
                        {/*<ESArticle>*/}
                        {/*    <ESList>*/}
                        {/*        <ESDl>*/}
                        {/*            /!*진행 이벤트*!/*/}
                        {/*            <ESDt>진행 이벤트</ESDt>*/}
                        {/*            <ESDd>*/}
                        {/*            </ESDd>*/}
                        {/*            /!*종료 이벤트*!/*/}
                        {/*            <ESDt>종료 이벤트</ESDt>*/}
                        {/*            <ESDd></ESDd>*/}
                        {/*        </ESDl>*/}
                        {/*    </ESList>*/}
                        {/*</ESArticle>*/}
                        <ESH33>
                            <ESA href={"#"}>스탑업스 리워드</ESA>
                        </ESH33>
                        {/*/!*스탑업스 리워드 - 진행&종료 이벤트 전체 박스*!/*/}
                        {/*<ESArticle>*/}
                        {/*    <ESList>*/}
                        {/*        <ESDl>*/}
                        {/*            /!*진행 이벤트*!/*/}
                        {/*            <ESDt>진행 이벤트</ESDt>*/}
                        {/*            <ESDd>*/}
                        {/*            </ESDd>*/}
                        {/*            /!*종료 이벤트*!/*/}
                        {/*            <ESDt>종료 이벤트</ESDt>*/}
                        {/*            <ESDd></ESDd>*/}
                        {/*        </ESDl>*/}
                        {/*    </ESList>*/}
                        {/*</ESArticle>*/}
                        <ESH34>
                            <ESA href={"#"}>온라인</ESA>
                        </ESH34>
                        {/*/!*온라인 - 진행&종료 이벤트 전체 박스*!/*/}
                        {/*<ESArticle>*/}
                        {/*    <ESList>*/}
                        {/*        <ESDl>*/}
                        {/*            /!*진행 이벤트*!/*/}
                        {/*            <ESDt>진행 이벤트</ESDt>*/}
                        {/*            <ESDd>*/}
                        {/*            </ESDd>*/}
                        {/*            /!*종료 이벤트*!/*/}
                        {/*            <ESDt>종료 이벤트</ESDt>*/}
                        {/*            <ESDd></ESDd>*/}
                        {/*        </ESDl>*/}
                        {/*    </ESList>*/}
                        {/*</ESArticle>*/}
                    </ESection>
                </EBPosition>
            </EBox>
        </AllBox>
    );
};

export default Event;