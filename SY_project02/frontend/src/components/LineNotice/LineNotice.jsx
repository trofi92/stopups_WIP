import * as styled_LN from "../../styled/LineNotice";
import MLNLeft from "../../image/LineNotice/MLNLeft.png";
import MLNLeftButton from "../../image/LineNotice/MLNLeftButton.png";
import MLNRight from "../../image/LineNotice/MLNRight.png";
import MLNRightToggle1 from "../../image/LineNotice/MLNRightToggle1.png";
import MLNRightToggle2 from "../../image/LineNotice/MLNRightToggle2.png";
import MPBImg1 from "../../image/Main/MPromotionBanner/MPBImg1.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MPBImg2 from "../../image/Main/MPromotionBanner/MPBImg2.png";

export const LineNotice = () => {
  const [openPromotion, setOpenPromotion] = useState(MLNRightToggle1);

  const promotionToggle = () => {
    setOpenPromotion(!openPromotion);
  };


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
            <styled_LN.LN>
                {/*라인 공지 왼쪽*/}
                <styled_LN.LNLeft>
                    <styled_LN.LNLeftInner>
                        {/*라인 공지 왼쪽의 공지사항 및 내용*/}
                        <styled_LN.LNLeftInnerDl>
                            <styled_LN.LNLeftInnerLDt>
                                <styled_LN.LNLeftInnerLDtImg src={MLNLeft}
                                                   alt={"mainPromotionBannerLeft"}/>
                            </styled_LN.LNLeftInnerLDt>
                            {/*나중에 공지사항 생기면 dd 추가 + 움직임 이벤트 + 해당 공지사항 이동 링크*/}
                            <styled_LN.LNLeftInnerLDd>
                                <styled_LN.LNLeftInnerLDUl>
                                    <styled_LN.LNLeftInnerLDLi>
                                        <Link to={"/noticeText"} style={{textDecoration: "none"}}>
                                            <styled_LN.LNLeftInnerLDLP>공지사항</styled_LN.LNLeftInnerLDLP>
                                        </Link>
                                    </styled_LN.LNLeftInnerLDLi>
                                </styled_LN.LNLeftInnerLDUl>
                            </styled_LN.LNLeftInnerLDd>
                        </styled_LN.LNLeftInnerDl>
                        {/*라인 공지 왼쪽의 오른쪽 버튼*/} {/*추후 공지사항으로 이동 링크*/}
                        <styled_LN.LNLeftInnerP>
                            <Link to={"/notice"}>
                                <styled_LN.LNLeftInnerPImg src={MLNLeftButton} alt={"mainPromotionBannerLeftButton"}/>
                            </Link>
                        </styled_LN.LNLeftInnerP>
                    </styled_LN.LNLeftInner>
                    {/*라인 공지 오른쪽 버튼*/}
                </styled_LN.LNLeft>

                {/*라인 공지 오른쪽*/}
                <styled_LN.LNRight>
                    <styled_LN.LNRightA>
                        <styled_LN.LNRightAImg src={MLNRight} alt={"mainPromotionBannerRight"}/>
                    </styled_LN.LNRightA>
                    <styled_LN.LNRightSpan onClick={promotionToggle}>
                        {/*후에 토글 버튼, 클릭 시 밑에 창 뜨고 닫히는 토글 버튼*/}
                        {openPromotion === true ? (
                            <styled_LN.LNRightSpanImg src={MLNRightToggle2} />
                        ) : (
                            <styled_LN.LNRightSpanImg src={MLNRightToggle1} />
                        )}
                    </styled_LN.LNRightSpan>
                </styled_LN.LNRight>
            </styled_LN.LN>

            {/*라인 토글 버튼 클릭 시 뜨는 프로모션 창*/}
            {openPromotion === true ?
                <styled_LN.PB>
                    <styled_LN.PBInnerBox>
                        {/*프로모션 내용*/}
                        <styled_LN.PBContBox>
                            <styled_LN.PBCont>
                                {/*<PBCUl>*/}
                                <Slider {...settings}>
                                    <styled_LN.PBCLi>
                                        <Link to={"/summerEvent"}>
                                            <styled_LN.PBCLImg src={MPBImg1} alt={"MPBImg1"}/>
                                        </Link>
                                    </styled_LN.PBCLi>
                                    <styled_LN.PBCLi>
                                        <styled_LN.PBCLImg src={MPBImg2} alt={"MPBImg2"}/>
                                    </styled_LN.PBCLi>
                                </Slider>
                                {/*</PBCUl>*/}
                            </styled_LN.PBCont>
                        </styled_LN.PBContBox>
                        {/*프로모션 양옆에 살짝 보이는 부분하나밖에 없음*/}
                        {/*슬라이드 컨트롤러*/}
                        {/*<styled_LN.PBSlicerController>*/}
                        {/*    /!*일시정지*!/*/}
                        {/*    <styled_LN.PBSCBox>*/}
                        {/*        <styled_LN.PBSCDiv>*/}
                        {/*            <styled_LN.PBSCDDiv>*/}
                        {/*                <styled_LN.PBSCDDP/>*/}
                        {/*            </styled_LN.PBSCDDiv>*/}
                        {/*        </styled_LN.PBSCDiv>*/}
                        {/*    </styled_LN.PBSCBox>*/}
                        {/*    /!*페이지 버튼*!/*/}
                        {/*    <styled_LN.PBSCPageBox>*/}
                        {/*        <styled_LN.PBSCDDiv>*/}
                        {/*            <styled_LN.PBSCPItem>*/}
                        {/*                <styled_LN.PBSCPIP/>*/}
                        {/*            </styled_LN.PBSCPItem>*/}
                        {/*        </styled_LN.PBSCDDiv>*/}
                        {/*    </styled_LN.PBSCPageBox>*/}
                        {/*</styled_LN.PBSlicerController>*/}
                        {/*/!*왼쪽 버튼*!/*/}
                        {/*<styled_LN.PBSCPrevBtn/>*/}
                        {/*/!*오른쪽 버튼*!/*/}
                        {/*<styled_LN.PBSCNextBtn/>*/}
                    </styled_LN.PBInnerBox>
                </styled_LN.PB> : null}
        </>
    );
};