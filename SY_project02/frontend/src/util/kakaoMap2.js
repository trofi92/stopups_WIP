export const mapScript = document.createElement("script");
mapScript.async = true;
mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&libraries=services,clusterer,drawing&autoload=false`;
document.head.appendChild(mapScript);
