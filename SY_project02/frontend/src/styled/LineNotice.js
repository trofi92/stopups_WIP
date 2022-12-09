import styled from "styled-components";
import MPBStop from "../image/Main/MPromotionBanner/MPBStop.png"
import MPBPage1 from "../image/Main/MPromotionBanner/MPBPage1.png"
import MPBPrev from "../image/Main/MPromotionBanner/MPBPrev.png"
import MPBNext from "../image/Main/MPromotionBanner/MPBNext.png"

// 라인 공지
export const LN = styled.section`
  height: 80px;
  background: orange;
`
// 라인 공지 왼쪽
export const LNLeft = styled.div`
  background: black;
  height: 80px;
  width: 55%;
  float: left;
`

export const LNLeftInner = styled.div`
  height: 44px;
  margin: 18px 0 0 20px;
  width: 90%;
`
// 라인 공지 왼쪽의 공지사항 및 내용
export const LNLeftInnerDl = styled.dl`
  height: 44px;
  width: 85%;
  float: left;
  position: relative;
  margin: 0;
`

export const LNLeftInnerLDt = styled.dt`
  background-size: 65px auto;
  height: 17px;
  overflow: hidden;
  width: 65px;
  padding-top: 10px;
`

export const LNLeftInnerLDtImg = styled.img`
  vertical-align: top;
  max-width: 100%;
`
// 공지사항 생기면 추가 + 움직임 이벤트
export const LNLeftInnerLDd = styled.dd`
  position: absolute;
  left: 65px;
  top: 9px;
  width: 520px;
  height: 24px;
  text-indent: 15px;
  overflow: hidden;
`
// 라인 공지 왼쪽의 오른쪽 버튼
export const LNLeftInnerP = styled.p`
  height: 44px;
  width: 43px;
  float: right;
  position: relative;
  margin: 0;
`

export const LNLeftInnerPImg = styled.img`
  background-size: 100% auto;
  height: 44px;
  width: 43px;
  cursor: pointer;
`

// 라인 공지 오른쪽
export const LNRight = styled.div`
  background: white;
  height: 80px;
  width: 45%;
  float: right;
  position: relative;
  z-index: 10;
`

export const LNRightA = styled.a`
  height: 44px;
  left: 10%;
  top: 18px;
  width: 235px;
  display: block;
  position: absolute;
`

export const LNRightAImg = styled.img`
  background-size: 100% auto;
  height: 17px;
  left: 0;
  top: 14px;
  width: 129px;
  overflow: hidden;
  position: absolute;
`

export const LNRightSpan = styled.span`
  height: 43px;
  right: 90px;
  top: 18px;
  width: 43px;
  overflow: hidden;
  position: absolute;
`

export const LNRightSpanImg = styled.img`
  vertical-align: top;
  max-width: 100%;
`


// 라인 토글 버튼 클릭 시 밑에 뜨는 프로모션 창
export const PB = styled.section`
  display: block;
  height: 446px;
  background: #f6f5ef;
  border-top: 1px solid #f6f5ef;
  position: relative;
  width: 100%;
  z-index: 10;
`

// 프로모션 내용
export const PBInnerBox = styled.div`
  height: 421px;
  margin-top: 25px;
  margin-left: -310px;
  width: 620px;
  left: 50%;
  position: relative;
  text-align: center;
  padding: 0;
  vertical-align: baseline;
`

export const PBContBox = styled.div`
  max-width: 100%;
  position: relative;
  margin: 0 auto 60px;
  padding: 0;
  vertical-align: baseline;
`

export const PBCont = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 346px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const PBCUl = styled.ul`
  width: 515%;
  position: relative;
  margin-left: 55px;
  padding: 0;
  vertical-align: baseline;
`

export const PBCLi = styled.li`
  float: left;
  list-style: none;
  position: relative;
  margin: 0 5px;
  width: 500px !important;
  padding: 0;
  vertical-align: baseline;
`

export const PBCLImg = styled.img`
  position: relative;
  max-width: 100%;
  display: block;
  vertical-align: top;
  margin: 0;
  padding: 0;
`

// 슬라이드 컨트롤러
export const PBSlicerController = styled.div`
  bottom: 30px;
  height: 12px;
  line-height: 1px;
  position: absolute;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`
// 일시정지
export const PBSCBox = styled.div`
  display: inline-block;
  height: 12px;
  position: relative;
  width: 9px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const PBSCDiv = styled.div`
  position: absolute;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const PBSCDDiv = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const PBSCDDP = styled.p`
  background: url(${MPBStop}) 0 0;
  height: 12px;
  width: 9px;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  cursor: pointer;
`

// 페이지 버튼
export const PBSCPageBox = styled.div`
  display: inline-block;
  height: 12px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const PBSCPItem = styled.div`
  float: left;
  margin-left: 8px;
  padding: 0;
  vertical-align: baseline;
  text-align: center;
`

export const PBSCPIP = styled.p`
  background: url(${MPBPage1}) 0 0 no-repeat;
  height: 12px;
  width: 13px;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  cursor: pointer;
`

// 왼쪽 버튼
export const PBSCPrevBtn = styled.p`
  position: absolute;
  left: 3%;
  top: 225px;
  display: block;
  background: url(${MPBPrev}) no-repeat center center transparent;
  width: 51px;
  height: 51px;
  border: 2px solid #222;
  border-radius: 27.5px;
  cursor: pointer;
`

// 오른쪽 버튼
export const PBSCNextBtn = styled.p`
  position: absolute;
  right: 3%;
  top: 225px;
  display: block;
  background: url(${MPBNext}) no-repeat center center transparent;
  width: 51px;
  height: 51px;
  border: 2px solid #222;
  border-radius: 27.5px;
  cursor: pointer;
`