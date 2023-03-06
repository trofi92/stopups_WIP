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
    autoplaySpeed: 2000,
  };

  return (
    <>
      <styled_LN.LN>
        <styled_LN.LNLeft>
          <styled_LN.LNLeftInner>
            <styled_LN.LNLeftInnerDl>
              <styled_LN.LNLeftInnerLDt>
                <styled_LN.LNLeftInnerLDtImg
                  src={MLNLeft}
                  alt={"mainPromotionBannerLeft"}
                />
              </styled_LN.LNLeftInnerLDt>
              <styled_LN.LNLeftInnerLDd>
                <styled_LN.LNLeftInnerLDUl>
                  <styled_LN.LNLeftInnerLDLi>
                    <Link
                      to={"/notice"}
                      style={{ textDecoration: "none" }}
                    >
                      <styled_LN.LNLeftInnerLDLP>
                        공지사항
                      </styled_LN.LNLeftInnerLDLP>
                    </Link>
                  </styled_LN.LNLeftInnerLDLi>
                </styled_LN.LNLeftInnerLDUl>
              </styled_LN.LNLeftInnerLDd>
            </styled_LN.LNLeftInnerDl>
            <styled_LN.LNLeftInnerP>
              <Link to={"/notice"}>
                <styled_LN.LNLeftInnerPImg
                  src={MLNLeftButton}
                  alt={"mainPromotionBannerLeftButton"}
                />
              </Link>
            </styled_LN.LNLeftInnerP>
          </styled_LN.LNLeftInner>
        </styled_LN.LNLeft>

        <styled_LN.LNRight>
          <styled_LN.LNRightA>
            <styled_LN.LNRightAImg
              src={MLNRight}
              alt={"mainPromotionBannerRight"}
            />
          </styled_LN.LNRightA>
          <styled_LN.LNRightSpan onClick={promotionToggle}>
            {openPromotion === true ? (
              <styled_LN.LNRightSpanImg src={MLNRightToggle2} />
            ) : (
              <styled_LN.LNRightSpanImg src={MLNRightToggle1} />
            )}
          </styled_LN.LNRightSpan>
        </styled_LN.LNRight>
      </styled_LN.LN>

      {openPromotion === true ? (
        <styled_LN.PB>
          <styled_LN.PBInnerBox>
            <styled_LN.PBContBox>
              <styled_LN.PBCont>
                <Slider {...settings}>
                  <styled_LN.PBCLi>
                    <Link to={"/summerEvent"}>
                      <styled_LN.PBCLImg
                        src={MPBImg1}
                        alt={"MPBImg1"}
                      />
                    </Link>
                  </styled_LN.PBCLi>
                  <styled_LN.PBCLi>
                    <styled_LN.PBCLImg
                      src={MPBImg2}
                      alt={"MPBImg2"}
                    />
                  </styled_LN.PBCLi>
                </Slider>
              </styled_LN.PBCont>
            </styled_LN.PBContBox>
          </styled_LN.PBInnerBox>
        </styled_LN.PB>
      ) : null}
    </>
  );
};
