import styled, {keyframes} from "styled-components";
import MSImg from "../image/Main/MSeason/MSImg.png"
import MSTitle from "../image/Main/MSeason/MSTitle.png"
import MSPBBackground from "../image/Main/MStopUpsReword/MSPBBackground.png"
import MRBackground from "../image/Main/MReserve/MRBackground.jpg"
import MRIText1 from "../image/Main/MReserve/MRIText1.png"
import MRIText2 from "../image/Main/MReserve/MRIText2.png"
import MRImg from "../image/Main/MReserve/MRImg.png"
import MSBackground from "../image/Main/MStore/MSBackground.jpg"
import MStore1 from "../image/Main/MStore/MStore1.png"
import MStore2 from "../image/Main/MStore/MStore2.png"
import MStore3 from "../image/Main/MStore/MStore3.png"
import MStore4 from "../image/Main/MStore/MStore4.png"
import MStoreText1 from "../image/Main/MStore/MStoreText1.png"
import MStoreText2 from "../image/Main/MStore/MStoreText2.png"
import MSRCoffee from "../image/Main/MStopUpsReword/MSRCoffee.png"
import MSRCard from "../image/Main/MStopUpsReword/MSRCard.png"

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`

// 여름 시즌 메뉴
export const MS = styled.div`
  width: auto;
  height: 2020px;
  background-position: center top;
  box-sizing: border-box;
  margin-top: 70px;
  background-image: url(${MSImg});
`

export const MSInner = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`

export const MSITitle = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 440px;
  margin: 0 auto;
  background-image: url(${MSTitle});
  background-position: center top;
  background-repeat: no-repeat;
  opacity: 0;
  animation: ${fadeIn} 0.7s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`

export const MSIImg1 = styled.img`
  position: relative;
  box-sizing: border-box;
  z-index: 10;
  opacity: 0;
  animation: ${fadeIn} 0.7s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`

export const MSIImg2 = styled.img`
  position: relative;
  box-sizing: border-box;
  bottom: 50px;
  z-index: 11;
  opacity: 0;
  animation: ${fadeIn} 0.7s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`

export const MSIImg3 = styled.img`
  position: relative;
  box-sizing: border-box;
  bottom: 150px;
  z-index: 12;
  opacity: 0;
  animation: ${fadeIn} 0.7s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`

export const MSIButtonDiv = styled.div`
  z-index: 13;
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 38px;
  bottom: 80px;
`

// 스타벅스 리워드
// 로그인 X
export const MSR = styled.section`
  position: relative;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 40px;
  background-color: #1e3932;
`

export const MSRInner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0;
  vertical-align: baseline;

  :after {
    content: "";
    display: block;
    clear: both;
  }
`
// 리워드 로고
export const MSRLogo = styled.div`
  width: 35%;
  margin-top: 30px;
  margin-right: 30px;
  float: left;
  margin-left: 40px;
  text-align: center;
  padding: 0;
`

export const MSRLImg = styled.img`
  width: auto;
  max-width: 100%;
  vertical-align: top;
  padding: 0;
`
// 리워드 내용
export const MSRCont = styled.div`
  width: calc(65% - 80px);
  box-sizing: border-box;
  float: left;
  padding-right: 30px;
  color: #fff;
  letter-spacing: 0.5px;
  margin: 0;
  vertical-align: baseline;
`
// 리워드 내용 위쪽
export const MSRCInfo = styled.div`
  position: relative;
  margin-bottom: 22px;
  border-bottom: 1px solid #4b615b;
  vertical-align: baseline;
`

export const MSRCIText = styled.div`
  margin-bottom: 12px;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const MSRCIH2 = styled.h2`
  line-height: 1.4;
  margin-bottom: 12px;
  font-size: 26px;
  font-weight: normal;
  padding: 0;
  vertical-align: baseline;
`

export const MSRCIP = styled.p`
  line-height: 1.4;
  font-size: 17px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSRCIButton = styled.div`
  display: inline-block;
  position: static;
  top: auto;
  bottom: auto;
  right: auto;
  margin-bottom: 20px;
`

export const MSRCIJoin = styled.p`
  box-sizing: border-box;
  display: inline-block;
  height: 38px;
  line-height: 34px;
  padding-left: 18.5px;
  padding-right: 18.5px;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  background-color: #00704a;
  border: 2px solid #00704a;
  margin: 0;
  vertical-align: baseline;

  :hover {
    text-decoration: underline;
    color: #fff;
  }
`

export const MSRCILogin = styled.p`
  box-sizing: border-box;
  display: inline-block;
  height: 38px;
  line-height: 34px;
  padding-left: 18.5px;
  padding-right: 18.5px;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 9px;
  background-color: transparent;
  border: 2px solid #fff;
  vertical-align: baseline;

  :hover {
    text-decoration: underline;
    color: #fff;
  }
`

// 리워드 내용 아래쪽
export const MSRCGift = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSRCGText = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const MSRCGP = styled.p`
  line-height: 1.4;
  font-size: 14px;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const MSRCGButton = styled.div`
  margin-top: 20px;
  display: inline-block;
  position: static;
  top: auto;
  bottom: auto;
  right: auto;
  margin-bottom: 20px;
  width: 183px;
  height: 38px;
  line-height: 36px;
  text-align: center;
  font-size: 14px;
  border: 2px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
`

export const MSRCGBP = styled.p`
  display: block;
  width: 100%;
  height: 100%;
  color: #fff;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  cursor: pointer;

  :hover {
    text-decoration: underline;
    color: #fff;
  }
`

// 스타벅스 리워드
// 로그인 O
export const MSRL = styled.div`
  height: 280px;
  background: #111;
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSRLInner = styled.div`
  width: 96%;
  height: auto;
  box-sizing: border-box;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  top: 30px;
  padding: 0;
  vertical-align: baseline;
`

export const MSRLUser = styled.div`
  border-right: 1px solid #1d1d1d;
  height: auto;
  width: 50%;
  padding-left: 0;
  float: left;
  box-sizing: border-box;
  position: relative;
  margin: 0;
  
  :hover {
    text-decoration: underline;
    color: #cac5c1;
  }
`

export const MSRLUP = styled.p`
  float: left;
  margin: 3px 162.906px 0 162.891px;
  background: url(${MSRCoffee}) no-repeat;
  background-size: 100% auto;
  height: 84px;
  width: 50px;
`

export const MSRLUDiv = styled.div`
  float: none;
  margin: 10px auto 0 auto;
  text-align: center;
  position: relative;
  padding-top: 86px;
`

export const MSRLUDP = styled.p`
  margin: 0 auto;
  display: block;
  float: none;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  width: 220px;
  color: #fff;
  font-weight: normal;
`

export const MSRLUDPSpan1 = styled.span`
  float: none;
  display: block;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSRLUDPSpan2 = styled.span`
  font-size: 16px;
  float: none;
  display: block;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSRLCard = styled.div`
  height: auto;
  text-align: center;
  margin: 0 auto;
  padding: 16px 0 0 0;
  width: 48%;
  box-sizing: border-box;
  float: left;
  
  :hover {
    text-decoration: underline;
    color: #cac5c1;
  }
`

export const MSRLCP = styled.p`
  float: none;
  margin: 10px auto 0 auto;
  width: 90px;
  background: url(${MSRCard}) no-repeat;
  background-size: 100% auto;
  height: 57.7px;
`

export const MSRLCPTxt = styled.p`
  float: none;
  margin: 10px auto 0 auto;
  font-size: 16px;
  line-height: 1.2;
  text-align: center;
  width: 200px;
  font-weight: normal;
  color: #fff;
`

export const MSRLCPTStrong = styled.strong`
  font-size: 18px;
  line-height: 1.4;
`


// 시즌 프로모션 배너
export const SPB = styled.section`
  height: 348.3px;
  position: relative;
  background: url(${MSPBBackground}) center/cover no-repeat;
  overflow: hidden;
  display: block;
`

export const SPBBox = styled.div`
  width: calc(65% - 80px);
  box-sizing: border-box;
  float: right;
  margin-top: 130px;
  padding-right: 30px;
  color: #fff;
  letter-spacing: 0.5px;
  vertical-align: baseline;
`

const fadeInRight = keyframes`
  0%{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`

export const SPBText = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  animation: ${fadeInRight} 1s
`

export const SPBTP = styled.p`
  line-height: 1.4;
  font-size: 12px;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const SPBTButtonBox = styled.div`
  margin-top: 39px;
  width: 125px;
  height: 38px;
  z-index: 6;
`

export const SPBTButton = styled.p`
  color: #fff;
  border: 2px solid #fff;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 15px;
  line-height: 34px;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  
  :hover {
    text-decoration: underline;
    color: #167672;
    background: #fff;
    -webkit-transition: background-color .7s, color .7s;
  }
`

// 메인 리저브
export const MReserve = styled.section`
  background: url(${MRBackground}) center -6px no-repeat #16151b;
  background-size: 100% auto;
  height: 1130px;
  padding: 0;
  position: relative;
  width: 100%;
`

export const MRInner = styled.div`
  bottom: 0;
  left: 50%;
  margin-left: -640px;
  position: absolute;
  top: 0;
  width: 1280px;
`

const fadeInDown = keyframes`
  0%{
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`
export const MRText1 = styled.div`
  top: 734px;
  background: url(${MRIText1}) no-repeat;
  background-size: 100% auto;
  height: 72px;
  left: 50%;
  margin-left: -175px;
  position: absolute;
  width: 350px;
  z-index: 7;
  animation: ${fadeInDown} 0.9s;
`

const fadeInUp = keyframes`
  0%{
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`

export const MRText2 = styled.div`
  top: 838px;
  background: url(${MRIText2}) no-repeat;
  background-size: 100% auto;
  height: 129px;
  left: 50%;
  margin-left: -220px;
  position: absolute;
  width: 440px;
  z-index: 7;
  animation: ${fadeInUp} 0.9s;
`

export const MRIImg = styled.div`
  position: static;
  top: auto;
  right: auto;
  margin: 130px auto 0;
  transform: translateY(0);
  width: 570px;
  height: 380px;
  background-image: url(${MRImg});
  background-size: 100% !important;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 7;
  animation: ${fadeInDown} 0.9s;
`

export const MRButtonBox = styled.div`
  opacity: 1;
  width: 125px;
  height: 38px;
  left: 50%;
  margin-left: -60px;
  top: 1000px;
  position: absolute;
`

export const MRButton = styled.p`
  font-size: 15px;
  border: 2px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  color: #fff;
  display: block;
  height: 100%;
  line-height: 34px;
  text-align: center;
  width: 100%;

  :hover {
    text-decoration: underline;
    color: #302F35;
    background: #fff;
    -webkit-transition: background-color .7s, color .7s;
  }
`

// 리저브 매거진
export const RMagazine = styled.section`
  position: relative;
  height: auto;
  padding: 0;
  width: 100%;
  background: none;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeIn} 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`

export const RMInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  vertical-align: baseline;

  :after {
    content: "";
    display: block;
    clear: both;
  }
`

export const RMVisual = styled.div`
  bottom: 0;
  right: auto;
  width: 100%;
  top: 0;
  margin-right: -483px;
  position: relative !important;
`

export const RMVImg = styled.img`
  max-width: none;
  width: 100%;
  display: block;
  vertical-align: top;
  margin: 0;
  padding: 0;
`

export const RMButtonBox = styled.div`
  width: 100% !important;
  position: absolute;
  bottom: 3.833049403747871%;
  padding: 0;
  left: 0;
  right: 0;
  z-index: 10;
  max-width: 800px;
  margin-top: 0;
  //margin: 33px auto 0;
  box-sizing: border-box;
`

export const RMBBInner = styled.div`
  padding: 0;
  margin: 0 auto;
  width: 524px;
  box-sizing: border-box;
  height: 38px;
  border: 0;
  vertical-align: baseline;
`

export const RMBBIP = styled.p`
  display: block;
  margin: 0 auto;
  width: 125px;
  height: 100%;
  color: #000;
  font-size: 15px;
  line-height: 34px;
  text-align: center;
  border: 2px solid #000;
  border-radius: 5px;
  box-sizing: border-box;

  :hover {
    text-decoration: underline;
    color: #fff;
    background: black;
    -webkit-transition: background-color .7s, color .7s, border-color .7s;
  }
`

// 매장 찾기
export const MStore = styled.section`
  position: relative;
  height: 750px;
  padding: 0;
  width: 100%;
  background: url(${MSBackground});
  background-size: 100% auto;
  opacity: 0;
  animation: ${fadeIn} 0.7s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
`

export const MStoreInner = styled.section`
  left: 50%;
  margin-left: -640px;
  position: absolute;
  top: 0;
  width: 1280px;
`

export const MSDiv1 = styled.div`
  background: url(${MStore1});
  background-size: 100% auto;
  height: 199px;
  left: 630px;
  width: 200px;
  position: absolute;
  top: 149px;
  z-index: 5;
`

export const MSDiv2 = styled.div`
  background: url(${MStore2});
  background-size: 100% auto;
  height: 255px;
  left: 400px;
  width: 300px;
  position: absolute;
  top: 0;
  z-index: 4;
`

export const MSDiv3 = styled.div`
  background: url(${MStore3});
  background-size: 100% auto;
  height: 115px;
  left: 390px;
  width: 280px;
  position: absolute;
  top: 240px;
  z-index: 4;
`

export const MSDiv4 = styled.div`
  background: url(${MStore4});
  background-size: 100% auto;
  height: 75px;
  left: 770px;
  width: 170px;
  position: absolute;
  top: 675px;
  z-index: 4;
  right: 30px;
`

export const MSDiv5 = styled.div`
  background: url(${MStoreText1});
  background-size: 100% auto;
  height: 96px;
  left: 50%;
  margin-left: -190px;
  width: 380px;
  position: absolute;
  top: 390px;
  z-index: 4;
  right: 149px;
  overflow: hidden;
  animation: ${fadeInDown} 0.9s;
`

export const MSDiv6 = styled.div`
  background: url(${MStoreText2});
  background-size: 100% auto;
  height: 104px;
  left: 50%;
  margin-left: -220px;
  width: 440px;
  position: absolute;
  top: 510px;
  z-index: 4;
  right: 168px;
  overflow: hidden;
  animation: ${fadeInUp} 0.9s;
`

export const MSButton = styled.div`
  border: 2px solid #222;
  border-radius: 3px;
  height: 34px;
  left: 50%;
  line-height: 34px;
  margin-left: -62px;
  position: absolute;
  top: 640px;
  width: 121px;
  z-index: 4;
  bottom: 70px;
`

export const MSButtonP = styled.p`
  display: block;
  margin: 0 auto;
  width: 125px;
  height: 100%;
  color: #000;
  font-size: 15px;
  line-height: 34px;
  text-align: center;
  //border: 2px solid #000;
  //border-radius: 5px;
  box-sizing: border-box;

  :hover {
    text-decoration: underline;
    color: #fff;
    background: black;
    -webkit-transition: background-color .7s, color .7s, border-color .7s;
  }
`