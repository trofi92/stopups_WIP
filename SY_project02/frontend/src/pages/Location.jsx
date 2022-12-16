import React from "react";
import * as styled_Map from "../styled/Map";
import { fetchLocation } from "../util/fetchLocation";
import { map, mapScript } from "../util/kakaoMap";

export const Location = () => {
  const [view, setView] = React.useState(false);
  const handleMap = () => {
    setView((prev) => !prev);
  };
  console.log(view);
  //로딩시 위치정보 수신, 카카오맵 API 요청 실행
  React.useEffect(() => {
    const onGeoOk = async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const API_KEY = process.env.REACT_APP_W_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

      //날씨, 위치정보
      fetchLocation(url);
      //카카오 맵 불러오기
      const onLoadKakaoMap = () => {
        map(lat, lon);
      };
      //html에 삽입한 script tag에 로딩 이벤트를 추가, 로딩시 API에 위에 작성한 내용들을 일괄 요청
      mapScript.addEventListener("load", onLoadKakaoMap);
    };

    const onGeoError = () => {
      alert("현재 위치를 알 수 없어요!.");
    };
    //브라우저에 위치정보 요청
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, [view]);

  return (
    <div>
      {/*지도*/}
      <styled_Map.MSection
        id="map"
        style={{
          // 지도의 크기
          width: "100%",
          height: "450px",
        }}
        level={1}
      >
        {/* 디자인 자비좀 ㅎㅎ */}
      </styled_Map.MSection>
      <button onClick={handleMap}>
        지도가 보이지 않을때 클릭해주세요
      </button>
      <div id="weather">
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
