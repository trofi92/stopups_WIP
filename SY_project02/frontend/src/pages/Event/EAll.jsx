import * as styled_Event from "../../styled/Event/Event";
import {Link} from "react-router-dom";
import ESTitle from "../../image/Event/ESTitle.jpg";


export const EAll = () => {
    return (
        <styled_Event.ESArticle>
            <styled_Event.ESList>
                <styled_Event.ESDl>
                    {/*진행 이벤트*/}
                    <styled_Event.ESDt>진행 이벤트</styled_Event.ESDt>
                    <styled_Event.ESDd>
                        <styled_Event.ESDUl>
                            {/*각각 이벤트*/}
                            <styled_Event.ESDLi>
                                <styled_Event.ESDLDl>
                                    <styled_Event.ESDLDt>
                                        <styled_Event.ESDLA>
                                            <Link to={"/summerEvent"}>
                                                <styled_Event.ESDLImg src={ESTitle} alt={"ESTitle"}/>
                                            </Link>
                                        </styled_Event.ESDLA>
                                    </styled_Event.ESDLDt>
                                    <styled_Event.ESDLDd>
                                        <styled_Event.ESDLH4>서머 2 프로모션</styled_Event.ESDLH4>
                                        <styled_Event.ESDLP>2022-07-26~2022-09-01</styled_Event.ESDLP>
                                    </styled_Event.ESDLDd>
                                </styled_Event.ESDLDl>
                            </styled_Event.ESDLi>
                        </styled_Event.ESDUl>
                    </styled_Event.ESDd>
                    {/*종료 이벤트*/}
                    <styled_Event.ESDt>종료 이벤트</styled_Event.ESDt>
                    <styled_Event.ESDd></styled_Event.ESDd>
                </styled_Event.ESDl>
            </styled_Event.ESList>
        </styled_Event.ESArticle>
    );
};