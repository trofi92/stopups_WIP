/*global kakao */
import React from "react";
import * as styled_AB from "../styled/AllBox";
import Header from "../components/Header/Header";
import * as styled_Map from "../styled/Map";
import { Footer } from "../components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MBImg from "../image/MBImg.png";
import { MapMarker, Map } from "react-kakao-maps-sdk";

const Map1 = () => {
  const [state, setState] = React.useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  const mapScript = document.createElement("script");

  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;

  document.head.appendChild(mapScript);

  const onLoadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      new window.kakao.maps.Map(mapContainer, mapOption);
    });
  };
  mapScript.addEventListener("load", onLoadKakaoMap);

  React.useEffect(() => {
    const onGeoOk = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const API_KEY = "ffd86e9c843e6dd08b0984e54f694a43";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      const weather = document.querySelector(
        "#weather span:first-child"
      );
      console.log(weather);
      const city = document.querySelector("#weather span:last-child");
      console.log(city);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          city.innerText = data.name;
          const weatherEmoji = document.createElement("p");
          const weatherImg = () => {
            if (data.weather[0].id >= 801)
              return (weatherEmoji.InnerText = "☁️");
            if (data.weather[0].id === 800)
              return (weatherEmoji.InnerText = "☀️");
            if (data.weather[0].id >= 200 && data.weather[0].id < 233)
              return (weatherEmoji.InnerText = "🌩️");
            if (data.weather[0].id >= 300 && data.weather[0].id < 322)
              return (weatherEmoji.InnerText = "🌧️");
            if (data.weather[0].id >= 500 && data.weather[0].id < 532)
              return (weatherEmoji.InnerText = "🌧️");
            if (data.weather[0].id >= 600 && data.weather[0].id < 623)
              return (weatherEmoji.InnerText = "❄️");
            if (data.weather[0].id >= 701 && data.weather[0].id < 782)
              return (weatherEmoji.InnerText = "🌫️");
            if ((data.weather[0].id = 781))
              return (weatherEmoji.InnerText = "🌪️");
            else return "";
          };
          setState((prev) => ({
            ...prev,
            center: {
              lat: lat, // 위도
              lng: lon, // 경도
            },
            isLoading: false,
          }));
          console.log(data.weather[0].id);
          weather.innerText = `${
            data.weather[0].main
          } ${weatherImg()} / ${data.main.temp}`;
        });
    };
    function onGeoError() {
      alert("현재 위치를 알 수 없어요!.");
    }

    // if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

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
          <Map
            id="map"
            center={state.center}
            style={{
              // 지도의 크기
              width: "100%",
              height: "450px",
            }}
            level={3}
          >
            {/* <MSection
            id="map"
            center={state.center}
            style={{
              // 지도의 크기
              width: "100%",
              height: "450px",
            }}
            level={3}
          > */}
            {!state.isLoading && (
              <MapMarker position={state.center}>
                <div style={{ padding: "5px", color: "#000" }}>
                  {state.errMsg ? state.errMsg : "여기에 계신가요?!"}
                </div>
              </MapMarker>
            )}
            {/* </MSection> */}
          </Map>
          <div id="weather">
            <span></span>
            <span></span>
          </div>
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
export default Map1;
