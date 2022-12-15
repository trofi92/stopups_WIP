/*global kakao */

// html script tag 추가
export const mapScript = document.createElement("script");
mapScript.async = true;
mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&libraries=services,clusterer,drawing&autoload=false`;
document.head.appendChild(mapScript);
export const map = (lat, lon) => {
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
    const kakaoMap = new kakao.maps.Map(mapContainer, mapOption);
    // 마커가 지도 위에 표시되도록 설정
    marker.setMap(kakaoMap);
  });
};
