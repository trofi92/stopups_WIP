import styled from "styled-components";

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