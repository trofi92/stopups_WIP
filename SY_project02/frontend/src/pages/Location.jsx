/*global kakao */
import { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useDebounce } from "../hooks/use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { setULocation } from "../features/userInfo/userInfoSlice";

const mapScript = document.createElement("script");
mapScript.async = true;
mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&libraries=services,clusterer,drawing&autoload=false`;
document.head.appendChild(mapScript);

export const Location = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  // 현위치 저장
  const [position, setPosition] = useState({
    lat: "",
    lng: "",
  });
  const [keywords, setKeywords] = useState("");

  //필요 이상의 렌더링을 줄이기 위해 검색어 입력속도 제한
  const deb = useDebounce(keywords, 500);

  const handleInfo = () => {
    dispatch(setULocation(info));
    alert(
      `선택하신 ${info.content}(매장)이 픽업 매장으로 설정되었습니다`
    );
    console.log(info);
    console.log(user);
  };

  const handleKeywords = (e) => {
    setKeywords(e.target.value);
    console.log(keywords);
  };

  useEffect(() => {
    const geoOption = {
      enableHighAccuracy: true, // literally accuracy
      timeout: 10000, // gps 값 요청 후 최대 대기 시간
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // position이라는 state를 활용하여 내 위치 값을 가져와 저장
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            title: "현재 위치",
          });
        },
        (e) => {
          console.log(e);
        },
        geoOption
      );
    }
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keywords, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
    console.log(markers, info, position);
  }, [deb]);

  return (
    <>
      <Map
        center={{
          lat: position.lat,
          lng: position.lng,
        }}
        style={{
          width: "100%",
          height: "480px",
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
      <details>
        <summary>매장 선택하기</summary>
        검색어 입력 후 나타난 지도 위의 체커를 선택한 후 버튼을
        클릭해주세요.
      </details>
      <input type="text" onChange={handleKeywords} />
      <button onClick={handleInfo}>픽업 위치 지정</button>
    </>
  );
};
