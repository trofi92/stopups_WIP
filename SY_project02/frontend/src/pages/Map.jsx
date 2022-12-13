import { AllBox } from "../styled/AllBox";
import Header from "../components/Header/Header";
import {
  MBox,
  MBSDiv,
  MBSection,
  MBSP,
  MSButtonBox,
  MSDDiv,
  MSDDLi,
  MSDDLImg,
  MSDDLP,
  MSDDLPSpan,
  MSection,
} from "../styled/Map";
import { Footer } from "../components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MBImg from "../image/MBImg.png";

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
    <AllBox>
      <Header />

      {/*지도 전체 박스*/}
      <MBox>
        {/*지도*/}
        <MSection></MSection>

        {/*매장에서 진행되는 이벤트*/}
        <MBSection>
          <MBSP>매장에서 진행되는 이벤트</MBSP>
          <MBSDiv>
            <MSDDiv>
              <Slider {...settings}>
                <MSDDLi>
                  <MSDDLImg src={MBImg} alt={"MBImg"} />
                  <MSDDLP>
                    준비중
                    <br />
                    <MSDDLPSpan>-</MSDDLPSpan>
                  </MSDDLP>
                </MSDDLi>
                <MSDDLi>
                  <MSDDLImg src={MBImg} alt={"MBImg"} />
                  <MSDDLP>
                    준비중
                    <br />
                    <MSDDLPSpan>-</MSDDLPSpan>
                  </MSDDLP>
                </MSDDLi>
                <MSDDLi>
                  <MSDDLImg src={MBImg} alt={"MBImg"} />
                  <MSDDLP>
                    준비중
                    <br />
                    <MSDDLPSpan>-</MSDDLPSpan>
                  </MSDDLP>
                </MSDDLi>
              </Slider>
            </MSDDiv>
            {/*이전, 다음 버튼*/}
            <MSButtonBox></MSButtonBox>
          </MBSDiv>
        </MBSection>
      </MBox>

      <Footer />
    </AllBox>
  );
};

export default Map;
