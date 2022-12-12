import styled from "styled-components";
import MyStopUpsBImg from "../image/MyStopUps/MSPBImg.jpg"
import MyStopUpsBImg2 from "../image/MyStopUps/MSUBImg2.jpg"
import MSUStoreIcon from "../image/MyStopUps/MSUStoreIcon.png"
import MSULinkImg from "../image/MyStopUps/MSULinkImg.png"
import MSUCoffeeIcon from "../image/MyStopUps/MSUCoffeeIcon.png"
import MSUS2Card from "../image/MyStopUps/MSUS2Card.png"
import MSUS2Coffee from "../image/MyStopUps/MSUS2Coffee.png"
import MSU3RegiCardImg from "../image/MyStopUps/MSU3RegiCardImg.png"
import MSU3ChargeCardImg from "../image/MyStopUps/MSU3ChargeCardImg.png"
import MSU3RImg1 from "../image/MyStopUps/MSU3RImg1.jpg"
import MSU3RImg2 from "../image/MyStopUps/MSU3RImg2.jpg"
import MSU3RImg3 from "../image/MyStopUps/MSU3RImg3.jpg"

// My StopUps 내용 이너 박스
export const MSUDiv = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

// 개인정보, 비밀번호, 매장 및 전체 이벤트 섹션
export const MSUSection1 = styled.section`
  width: 100%;
  background: url(${MyStopUpsBImg});
  border-radius: 3px;
  height: 148px;
  display: block;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

// 왼쪽(개인정보, 비밀번호)
export const MSU1ArticleL = styled.article`
  width: 70%;
  padding: 0 10px;
  box-sizing: border-box;
  float: left;
  height: 148px;
  position: relative;
  display: block;
`

// 상단 텍스트
export const MSU1LP = styled.p`
  font-size: 14px;
  color: #222;
  margin-top: 30px;
  margin-bottom: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSU1LPStrong = styled.strong`
  line-height: 24px;
  font-weight: bold;
  color: #222;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSU1LPSpan = styled.span`
  font-size: 13px;
  color: #666;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

// 버튼
export const MSU1LButton = styled.p`
  top: 110px;
  background: #fcfcfc;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: #444;
  display: block;
  font-size: 12px;
  font-weight: bold;
  float: left;
  height: 26px;
  line-height: 26px;
  margin: 20px 10px 0 0;
  text-align: center;
  width: 84px;
`

// 오른쪽(매장, 전체 이벤트)
export const MSU1ArticleR = styled.article`
  float: right;
  width: 30%;
  background: url(${MyStopUpsBImg2});
  height: 148px;
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
`

// 위(신규 매장 오픈 이벤트)
export const HSU1RDivU = styled.div`
  width: 100%;
  border-bottom: 1px dotted #bbb;
  height: 74px;
  position: relative;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const HSU1RULink = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  color: #666;
  cursor: pointer;
`

export const HSU1RUImg = styled.p`
  left: 8%;
  background: url(${MSUStoreIcon}) no-repeat;
  background-size: 100% auto;
  height: 35px;
  position: absolute;
  top: 23px;
  width: 63px;
  margin: 0;
`

export const HSU1RUText = styled.p`
  left: 45%;
  color: #444;
  line-height: 18px;
  position: absolute;
  top: 23px;
  font-size: 12px;
  margin: 0;
`

export const HSU1RUTStrong = styled.strong`
  color: #222;
  font-size: 15px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const HSU1RUSpan = styled.span`
  right: 5%;
  background: url(${MSULinkImg});
  display: block;
  height: 12px;
  position: absolute;
  top: 32px;
  width: 7px;
  margin: 0;
  padding: 0;
`

// 아래(스타벅스 전체 이벤트)
export const HSU1RDivD = styled.div`
  width: 100%;
  height: 73px;
  position: relative;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  display: block;
`

export const HSU1RDImg = styled.p`
  left: 8%;
  background: url(${MSUCoffeeIcon}) no-repeat;
  background-size: 100% auto;
  height: 41px;
  position: absolute;
  top: 16px;
  width: 46px;
  margin: 0;
`

export const HSU1RDText = styled.p`
  left: 45%;
  color: #444;
  line-height: 18px;
  position: absolute;
  top: 18px;
  font-size: 12px;
  margin: 0;
`

// 카드 및 혜택 보기, 카드 구매 섹션
export const MSUSection2 = styled.section`
  padding: 30px 2% 23px 2%;
  width: 96%;
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 222px;
  margin-top: 30px;
  display: block;
`
// 위
export const MSU2DivU = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  height: 107px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

// 이미지
export const MSU2DUIconBox = styled.div`
  width: 16%;
  float: left;
  height: 107px;
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const MSU2DUIcon = styled.figure`
  background: url(${MSUS2Card});
  height: 55px;
  top: 5px;
  width: 86px;
  position: absolute;
  display: block;
  margin: 0;
  padding: 0;
`

// 텍스트
export const MSU2DUContBox = styled.div`
  width: 84%;
  float: left;
  height: 107px;
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const MSU2DUCont = styled.div`
  width: 65%;
  color: #444;
  font-size: 13px;
  line-height: 18px;
  position: absolute;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSU2DUCStrong = styled.strong`
  color: #222;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSU2DUButton1 = styled.p`
  width: 33%;
  top: 0;
  height: 30px;
  position: absolute;
  right: 0;
  margin: 0;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  display: block;
  //height: 28px;
  line-height: 28px;
  text-align: center;
  background: #222;
  border: 1px solid #222;
  color: #fff;
`

export const MSU2DUButton2 = styled.p`
  width: 33%;
  top: 40px;
  height: 30px;
  position: absolute;
  right: 0;
  margin: 0;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  display: block;
  //height: 28px;
  line-height: 28px;
  text-align: center;
  background: #e2c383;
  border: 1px solid #bb9f65;
  color: #222;
`

// 아래
export const MSU2DivD = styled.div`
  width: 100%;
  height: 107px;
  margin-top: 7px;
  padding: 0;
  vertical-align: baseline;
`

export const MSU2DDIcon = styled.figure`
  background: url(${MSUS2Coffee});
  height: 107px;
  top: 0;
  width: 102px;
  position: absolute;
  display: block;
  margin: 0;
  padding: 0;
`

export const MSU2DDCont = styled.div`
  width: 65%;
  color: #444;
  font-size: 13px;
  line-height: 18px;
  top: 30px;
  position: absolute;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSU2DDButton = styled.p`
  width: 33%;
  top: 44px;
  height: 30px;
  position: absolute;
  right: 0;
  margin: 0;
  border-radius: 3px;
  font-size: 12px;
  font-weight: bold;
  display: block;
  //height: 28px;
  line-height: 28px;
  text-align: center;
  background: #222;
  border: 1px solid #222;
  color: #fff;
`


// 새 매장 소개, 카드 등록, 충전, 영수증, 캘린더, 쿠폰
export const MSUSection3 = styled.section`
  width: 100%;
  height: 360px;
  margin-top: 30px;
  display: block;
  padding: 0;
  vertical-align: baseline;
`

// 왼쪽
export const MSU3ArticleL = styled.article`
  padding: 30px 2.5%;
  width: 44%;
  background: #f4f4f2;
  border-radius: 3px;
  float: left;
  height: 300px;
  display: block;
  margin: 0;
  vertical-align: baseline;
`
// 왼쪽 헤더
export const MSU3LHeader = styled.header`
  font-size: 12px;
  border-bottom: 1px solid #ddd;
  color: #444;
  height: 59px;
  display: block;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSU3LHStrong = styled.strong`
  color: #222;
  font-size: 16px;
  line-height: 30px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

// 신규 매장 없을 때
export const MSU3LSlider = styled.div`
  width: 100%;
  height: 210px;
  margin-top: 30px;
  padding: 0;
  vertical-align: baseline;
`

export const MSU3LSFigure = styled.figure`
  margin: 80px 0 20px 0;
  text-align: center;
  display: block;
  padding: 0;
  vertical-align: baseline;
`

export const MSU3LSFImg = styled.img`
  vertical-align: top;
  max-width: 100%;
  margin: 0;
  padding: 0;
`

export const MSU3LSFP = styled.p`
  text-align: center;
  font-size: 14px;
  color: #444;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`


// 오른쪽
export const MSU3ArticleR = styled.article`
  padding: 20px 2.5%;
  width: 44%;
  border: 1px solid #ddd;
  border-radius: 3px;
  float: right;
  height: 318px;
  display: block;
  margin: 0;
  vertical-align: baseline;
`

// 카드 등록
export const MSU3RRegiCard = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  height: 98px;
  position: relative;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSU3RRCFigure = styled.figure`
  background: url(${MSU3RegiCardImg});
  top: 13px;
  left: 9px;
  height: 61px;
  position: absolute;
  width: 84px;
  display: block;
  margin: 0;
  padding: 0;
`

export const MSU3RRCP = styled.p`
  color: #444;
  font-size: 14px;
  left: 103px;
  line-height: 18px;
  position: absolute;
  top: 13px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSU3RRCPStrong = styled.strong`
  color: #222;
  font-size: 16px;
  line-height: 26px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

// 카드 충전
export const MSU3RChargeCare = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  height: 119px;
  position: relative;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`


export const MSU3RCCFigure = styled.figure`
  background: url(${MSU3ChargeCardImg});
  top: 34px;
  left: 9px;
  height: 61px;
  position: absolute;
  width: 84px;
  display: block;
  margin: 0;
  padding: 0;
`

export const MSU3CCP = styled.p`
  color: #444;
  font-size: 14px;
  left: 103px;
  line-height: 18px;
  position: absolute;
  top: 34px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`


// 나머지 아이콘들
export const MSU3RIconsBox = styled.div`
  background: none;
  width: 100%;
  height: 75px;
  margin-top: 24px;
  padding: 0;
  vertical-align: baseline;
`

// 왼쪽
export const MSU3RIBLink1 = styled.p`
  width: 32%;
  display: block;
  float: left;
  height: 75px;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

export const MSU3RIBIconSpan1 = styled.span`
  background-image: url(${MSU3RImg1});
  width: 66px;
  height: 48px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
  padding: 0;
  display: block;
`

export const MSU3RIBTextSpan = styled.span`
  margin-top: 12px;
  display: block;
  position: relative;
  color: #222;
  font-size: 12px;
  line-height: 9px;
  font-weight: bold;
  text-align: center;
  padding: 0;
`

// 가운데
export const MSU3RIBLink2 = styled.p`
  border-left: 1px solid #ddd;
  width: 32%;
  display: block;
  float: left;
  height: 75px;
  position: relative;
  box-sizing: border-box;
  margin: 0 0 0 1px;
  padding: 0;
`

export const MSU3RIBIconSpan2 = styled.span`
  background-image: url(${MSU3RImg2});
  width: 66px;
  height: 48px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
  padding: 0;
  display: block;
`

// 중간
export const MSU3RIBLink3 = styled.p`
  border-left: 1px solid #ddd;
  padding-left: 13px;
  width: 32%;
  display: block;
  float: left;
  height: 75px;
  position: relative;
  box-sizing: border-box;
  margin: 0 0 0 1px;
`

export const MSU3RIBIconSpan3 = styled.span`
  background-image: url(${MSU3RImg3});
  width: 66px;
  height: 48px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
  padding: 0;
  display: block;
`

export const MSU3RIBIconI3 = styled.i`
  color: #fff;
  display: block;
  font-style: normal;
  height: 21px;
  line-height: 21px;
  position: absolute;
  top: 1px;
  right: 15px;
  text-align: center;
  width: 27px;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 12px;
`

// 스타벅스 리워드 최근 일주일 판매 집계 기준
// 회원가입할 때 나이가 없어서 구현 불가능
export const MSUSection = styled.section`
  background: #f4f4f1;
  border-radius: 3px;
  margin-top: 30px;
  padding: 21px 30px;
  position: relative;
  display: block;
  vertical-align: baseline;
`

export const MSUSFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

// 헤더
export const MSUSHeader = styled.header`
  width: 100%;
  height: 38px;
  display: block;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSUSHP = styled.p`
  font-size: 12px;
  line-height: 38px;
  float: left;
  position: relative;
  margin: 0 7px 0 0;
  padding: 0;
  vertical-align: baseline;
`


// 판매 순위