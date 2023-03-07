import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useDebounce } from "../../hooks/use-debounce";
import { useDispatch, useSelector } from "react-redux";
import { setULocation } from "../../features/userInfo/userInfoSlice";
import * as styled_Map from "../../styled/Map";
import { useLocation, useNavigate } from "react-router-dom";

const mapScript = document.createElement("script");
mapScript.async = true;
mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&libraries=services,clusterer,drawing&autoload=false`;
document.head.appendChild(mapScript);

export const Location = () => {
  const { kakao } = window;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const [position, setPosition] = useState({
    lat: "",
    lng: "",
  });
  const [keywords, setKeywords] = useState("");

  const deb = useDebounce(keywords, 500);

  const handleInfo = () => {
    if (location.pathname === "/map") {
      dispatch(setULocation(info));
      alert(
        `선택하신 ${info.content}(매장)이 픽업 매장으로 설정되었습니다.`
      );
    } else {
      dispatch(setULocation(info));
      alert(
        `선택하신 ${info.content}(매장)이 픽업 매장으로 설정되었습니다. 결제 페이지로 이동합니다.`
      );
      navigate("/payment");
    }
  };

  const handleKeywords = (e) => {
    setKeywords(e.target.value);
  };

  useEffect(() => {
    const geoOption = {
      enableHighAccuracy: true,
      timeout: 10000,
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          title: "현재 위치",
        });
      }, geoOption);
    }
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keywords, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        map.setBounds(bounds);
      }
    });
  }, [deb]);

  return (
    <>
      <styled_Map.MModal>
        <styled_Map.MMFieldset>
          <styled_Map.MMDiv>
            <styled_Map.MMSection>
              <styled_Map.MMHeader>
                <styled_Map.MMHH2>매장찾기</styled_Map.MMHH2>
                <styled_Map.MMArticle>
                  <styled_Map.MMAArticle>
                    <styled_Map.MMAAHeader>
                      <styled_Map.MMAAHH3>퀵 검색</styled_Map.MMAAHH3>
                      <styled_Map.MMAAArticle>
                        <styled_Map.MMAAADiv1>
                          <styled_Map.MMAAADiv1Inner>
                            <styled_Map.MMAAADiv1IInput
                              placeholder={"매장명 또는 주소"}
                              type="text"
                              onChange={handleKeywords}
                            />
                            <styled_Map.MMAAADib1IA />
                          </styled_Map.MMAAADiv1Inner>
                        </styled_Map.MMAAADiv1>
                        <styled_Map.MMAAADiv3>
                          <h2 onClick={handleInfo}>픽업 위치 지정</h2>
                        </styled_Map.MMAAADiv3>
                        <styled_Map.MMAAADiv4>
                          <div>
                            매장명 또는 주소를 입력하신 후<br />
                            지도 위의 체커를 선택하고 버튼을
                            클릭해주세요.
                          </div>
                        </styled_Map.MMAAADiv4>
                      </styled_Map.MMAAArticle>
                    </styled_Map.MMAAHeader>
                  </styled_Map.MMAArticle>
                </styled_Map.MMArticle>
              </styled_Map.MMHeader>
            </styled_Map.MMSection>
          </styled_Map.MMDiv>
        </styled_Map.MMFieldset>
      </styled_Map.MModal>

      <Map
        center={{
          lat: position.lat,
          lng: position.lng,
        }}
        style={{
          width: "100%",
          height: "550px",
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
    </>
  );
};
