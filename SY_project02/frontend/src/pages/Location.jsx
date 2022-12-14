/*global kakao */
import React from "react";
import * as styled_Map from "../styled/Map";

export const Location = () => {
  const [state, setState] = React.useState({
    center: {
      lat: null,
      lng: null,
    },
    errMsg: null,
    isLoading: true,
  });
  // html script tag 추가
  const mapScript = document.createElement("script");
  mapScript.async = true;
  mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&libraries=services,clusterer,drawing&autoload=false`;
  document.head.appendChild(mapScript);

  //로딩시 위치정보 수신, 카카오맵 API 요청 실행
  React.useEffect(() => {
    const onGeoOk = (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const API_KEY = process.env.REACT_APP_W_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      setState((prev) => ({
        ...prev,
        center: {
          lat: lat, // 위도
          lng: lon, // 경도
        },
        isLoading: false,
      }));

      const city = document.querySelector("#weather span:last-child");
      const weather = document.querySelector(
        "#weather span:first-child"
      );

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let currentWeather = data.weather[0].id;
          const weatherEmoji = document.createElement("p");

          const weatherImg = () => {
            if (currentWeather >= 801)
              return (weatherEmoji.InnerText = "☁️");
            if (currentWeather === 800)
              return (weatherEmoji.InnerText = "☀️");
            if (currentWeather >= 200 && currentWeather < 233)
              return (weatherEmoji.InnerText = "🌩️");
            if (currentWeather >= 300 && currentWeather < 322)
              return (weatherEmoji.InnerText = "🌧️");
            if (currentWeather >= 500 && currentWeather < 532)
              return (weatherEmoji.InnerText = "🌧️");
            if (currentWeather >= 600 && currentWeather < 623)
              return (weatherEmoji.InnerText = "❄️");
            if (currentWeather >= 701 && currentWeather < 782)
              return (weatherEmoji.InnerText = "🌫️");
            if ((currentWeather = 781))
              return (weatherEmoji.InnerText = "🌪️");
            else return "";
          };

          city.innerText = ` / ${data.name}`;
          weather.innerText = `${
            data.weather[0].main
          } ${weatherImg()} / ${data.main.temp}°C`;
        });
      //카카오 맵 불러오기
      const onLoadKakaoMap = () => {
        kakao.maps.load(() => {
          // 지도를 삽입할 DOM요소 지정
          const mapContainer = document.getElementById("map");
          const mapOption = {
            // 지도의 중심좌표
            center: new kakao.maps.LatLng(lat, lon),
            // 지도의 확대 레벨
            level: 3,
          };
          //맵 마커 불러오기
          const markerPosition = new kakao.maps.LatLng(lat, lon);
          const marker = new kakao.maps.Marker({
            position: markerPosition,
          });

          // DOM요소, 좌표값을 전달해서 새로운 지도 생성
          const kakaoMap = new kakao.maps.Map(
            mapContainer,
            mapOption
          );
          // 마커가 지도 위에 표시되도록 설정
          marker.setMap(kakaoMap);
        });
      };
      //html에 삽입한 script tag에 로딩 이벤트를 추가, 로딩시 API에 위에 작성한 내용들을 일괄 요청
      mapScript.addEventListener("load", onLoadKakaoMap);
    };
    const onGeoError = () => {
      alert("현재 위치를 알 수 없어요!.");
    };
    //브라우저에 위치정보 요청
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  return (
    <div>
      {/*지도*/}
      <styled_Map.MSection
        id="map"
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={1}
      >
        {/* 디자인 자비좀 ㅎㅎ */}
      </styled_Map.MSection>
      <div id="weather">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
