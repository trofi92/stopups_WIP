import {
    LN,
    LNLeft,
    LNLeftInner,
    LNLeftInnerDl, LNLeftInnerLDd, LNLeftInnerLDLi, LNLeftInnerLDLP,
    LNLeftInnerLDt,
    LNLeftInnerLDtImg, LNLeftInnerLDUl,
    LNLeftInnerP,
    LNLeftInnerPImg,
    LNRight,
    LNRightA,
    LNRightAImg,
    LNRightSpan,
    LNRightSpanImg,
    PB,
    PBCLi,
    PBCLImg,
    PBCont,
    PBContBox,
    PBCUl,
    PBInnerBox,
    PBSCBox,
    PBSCDDiv,
    PBSCDDP,
    PBSCDiv,
    PBSCNextBtn,
    PBSCPageBox,
    PBSCPIP,
    PBSCPItem,
    PBSCPrevBtn,
    PBSlicerController
} from "../../styled/LineNotice";
import MLNLeft from "../../image/LineNotice/MLNLeft.png";
import MLNLeftButton from "../../image/LineNotice/MLNLeftButton.png";
import MLNRight from "../../image/LineNotice/MLNRight.png";
import MLNRightToggle1 from "../../image/LineNotice/MLNRightToggle1.png";
import MPBImg1 from "../../image/Main/MPromotionBanner/MPBImg1.png"
import {useState} from "react";
import {Link} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MPBImg2 from "../../image/Main/MPromotionBanner/MPBImg2.png"

export const LineNotice = () => {
    const [openPromotion, setOpenPromotion] = useState(false);
    const promotionToggle = () => {
        setOpenPromotion(!openPromotion);
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 2000
    };
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
                            </LNLeftInnerLDt>
                            {/*나중에 공지사항 생기면 dd 추가 + 움직임 이벤트 + 해당 공지사항 이동 링크*/}
                            <LNLeftInnerLDd>
                                <LNLeftInnerLDUl>
                                    <LNLeftInnerLDLi>
                                        <Link to={"/noticeText"} style={{textDecoration: "none"}}>
                                            <LNLeftInnerLDLP>공지사항</LNLeftInnerLDLP>
                                        </Link>
                                    </LNLeftInnerLDLi>
                                </LNLeftInnerLDUl>
                            </LNLeftInnerLDd>
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
                    <PBInnerBox>
                        {/*프로모션 내용*/}
                        <PBContBox>
                            <PBCont>
                                {/*<PBCUl>*/}
                                <Slider {...settings}>
                                    <PBCLi>
                                        <Link to={"/summerEvent"}>
                                            <PBCLImg src={MPBImg1} alt={"MPBImg1"}/>
                                        </Link>
                                    </PBCLi>
                                    <PBCLi>
                                        <PBCLImg src={MPBImg2} alt={"MPBImg2"}/>
                                    </PBCLi>
                                </Slider>
                                {/*</PBCUl>*/}
                            </PBCont>
                        </PBContBox>
                        {/*프로모션 양옆에 살짝 보이는 부분*/}{/*하나밖에 없음*/}
                        {/*슬라이드 컨트롤러*/}
                        {/*<PBSlicerController>*/}
                        {/*    /!*일시정지*!/*/}
                        {/*    <PBSCBox>*/}
                        {/*        <PBSCDiv>*/}
                        {/*            <PBSCDDiv>*/}
                        {/*                <PBSCDDP/>*/}
                        {/*            </PBSCDDiv>*/}
                        {/*        </PBSCDiv>*/}
                        {/*    </PBSCBox>*/}
                        {/*    /!*페이지 버튼*!/*/}
                        {/*    <PBSCPageBox>*/}
                        {/*        <PBSCDDiv>*/}
                        {/*            <PBSCPItem>*/}
                        {/*                <PBSCPIP/>*/}
                        {/*            </PBSCPItem>*/}
                        {/*        </PBSCDDiv>*/}
                        {/*    </PBSCPageBox>*/}
                        {/*</PBSlicerController>*/}
                        {/*/!*왼쪽 버튼*!/*/}
                        {/*<PBSCPrevBtn/>*/}
                        {/*/!*오른쪽 버튼*!/*/}
                        {/*<PBSCNextBtn/>*/}
                    </PBInnerBox>
                </PB> : null}
        </>
    );
};