import {
    ESArticle,
    ESDd,
    ESDl,
    ESDLA, ESDLDd,
    ESDLDl,
    ESDLDt, ESDLH4,
    ESDLi,
    ESDLImg, ESDLP,
    ESDt,
    ESDUl,
    ESList
} from "../../styled/Event/Event";
import {Link} from "react-router-dom";
import ESTitle from "../../image/Event/ESTitle.jpg";


export const EAll = () => {
    return (
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
    );
};