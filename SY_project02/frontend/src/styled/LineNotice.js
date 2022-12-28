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

export const LNLeftInnerLDUl = styled.ul`
  direction: ltr;
  font-size: 13px;
  color: #fff;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const LNLeftInnerLDLi = styled.li`
  display: block;
  width: 40%;
  height: 24px;
  line-height: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  vertical-align: baseline;
`

export const LNLeftInnerLDLP = styled.p`
  color: #fff;
  display: block;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 14px;
  margin: 0;
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
  height: 40px;
  right: 90px;
  top: 18px;
  width: 40px;
  overflow: hidden;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;
`

export const LNRightSpanImg = styled.img`
  vertical-align: top;
  max-width: 100%;
  margin-left: 1.5px;
  margin-top: 2px;
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
  height: 362px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const PBCLi = styled.li`
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