import React from "react";
import * as styled_AB from "../styled/AllBox";
import Header from "../components/Header/Header";
import * as styled_Map from "../styled/Map";
import { Footer } from "../components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MBImg from "../image/MBImg.png";
import { Location } from "./Location";

const Map = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <styled_AB.AllBox>
      <Header />

      {/*지도 전체 박스*/}
      <styled_Map.MBox>
        {/*지도*/}
        <styled_Map.MSection>
          <Location />
        </styled_Map.MSection>

        {/*매장에서 진행되는 이벤트*/}
        <styled_Map.MBSection>
          <styled_Map.MBSP>매장에서 진행되는 이벤트</styled_Map.MBSP>
          <styled_Map.MBSDiv>
            <styled_Map.MSDDiv>
              <Slider {...settings}>
                <styled_Map.MSDDLi>
                  <styled_Map.MSDDLImg src={MBImg} alt={"MBImg"} />
                  <styled_Map.MSDDLP>
                    준비중
                    <br />
                    <styled_Map.MSDDLPSpan>-</styled_Map.MSDDLPSpan>
                  </styled_Map.MSDDLP>
                </styled_Map.MSDDLi>
                <styled_Map.MSDDLi>
                  <styled_Map.MSDDLImg src={MBImg} alt={"MBImg"} />
                  <styled_Map.MSDDLP>
                    준비중
                    <br />
                    <styled_Map.MSDDLPSpan>-</styled_Map.MSDDLPSpan>
                  </styled_Map.MSDDLP>
                </styled_Map.MSDDLi>
                <styled_Map.MSDDLi>
                  <styled_Map.MSDDLImg src={MBImg} alt={"MBImg"} />
                  <styled_Map.MSDDLP>
                    준비중
                    <br />
                    <styled_Map.MSDDLPSpan>-</styled_Map.MSDDLPSpan>
                  </styled_Map.MSDDLP>
                </styled_Map.MSDDLi>
              </Slider>
            </styled_Map.MSDDiv>
            {/*이전, 다음 버튼*/}
            <styled_Map.MSButtonBox></styled_Map.MSButtonBox>
          </styled_Map.MBSDiv>
        </styled_Map.MBSection>
      </styled_Map.MBox>

      <Footer />
    </styled_AB.AllBox>
  );
};
export default Map;
