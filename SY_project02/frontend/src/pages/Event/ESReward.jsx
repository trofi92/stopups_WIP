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


export const ESReward = () => {
    return (
        <ESArticle>
            <ESList>
                <ESDl>
                    {/*진행 이벤트*/}
                    <ESDt>진행 이벤트</ESDt>
                    <ESDd>
                    </ESDd>
                    {/*종료 이벤트*/}
                    <ESDt>종료 이벤트</ESDt>
                    <ESDd></ESDd>
                </ESDl>
            </ESList>
        </ESArticle>
    );
};