import {
    LN,
    LNLeft,
    LNLeftInner,
    LNLeftInnerDl,
    LNLeftInnerLDt,
    LNLeftInnerLDtImg,
    LNLeftInnerP, LNLeftInnerPImg, LNRight, LNRightA, LNRightAImg, LNRightSpan, LNRightSpanImg, PB
} from "../../styled/LineNotice";
import MLNLeft from "../../image/LineNotice/MLNLeft.png";
import MLNLeftButton from "../../image/LineNotice/MLNLeftButton.png";
import MLNRight from "../../image/LineNotice/MLNRight.png";
import MLNRightToggle1 from "../../image/LineNotice/MLNRightToggle1.png";
import {useState} from "react";
import {Link} from "react-router-dom";

export const LineNotice = () => {
    const [openPromotion, setOpenPromotion] = useState(false);
    const promotionToggle = () => {
        setOpenPromotion(!openPromotion);
    }
    return (
        <>
            {/*라인 공지*/}
            <LN>
                {/*라인 공지 왼쪽*/}
                <LNLeft>
                    <LNLeftInner>
                        {/*라인 공지 왼쪽의 공지사항 및 내용*/}
                        <LNLeftInnerDl>
                            <LNLeftInnerLDt>
                                <LNLeftInnerLDtImg src={MLNLeft}
                                                   alt={"mainPromotionBannerLeft"}/>
                                {/*나중에 공지사항 생기면 dd 추가 + 움직임 이벤트 + 해당 공지사항 이동 링크*/}
                            </LNLeftInnerLDt>
                        </LNLeftInnerDl>
                        {/*라인 공지 왼쪽의 오른쪽 버튼*/} {/*추후 공지사항으로 이동 링크*/}
                        <LNLeftInnerP>
                            <Link to={"/notice"}>
                                <LNLeftInnerPImg src={MLNLeftButton} alt={"mainPromotionBannerLeftButton"}/>
                            </Link>
                        </LNLeftInnerP>
                    </LNLeftInner>
                    {/*라인 공지 오른쪽 버튼*/}
                </LNLeft>

                {/*라인 공지 오른쪽*/}
                <LNRight>
                    <LNRightA>
                        <LNRightAImg src={MLNRight} alt={"mainPromotionBannerRight"}/>
                    </LNRightA>
                    <LNRightSpan>
                        {/*후에 토글 버튼, 클릭 시 밑에 창 뜨고 닫히는 토글 버튼*/}
                        <LNRightSpanImg src={MLNRightToggle1} onClick={promotionToggle}/>
                    </LNRightSpan>
                </LNRight>
            </LN>

            {/*라인 토글 버튼 클릭 시 뜨는 프로모션 창*/}
            {openPromotion === true ?
                <PB>

                </PB> : null}
        </>
    );
};