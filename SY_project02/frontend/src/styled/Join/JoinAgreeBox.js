import styled from "styled-components";

// 전체 박스
export const JABox = styled.div`
  background-size: cover;
  width: 100%;
  height: 1600px;
  margin-top: 60px;
`

// 인증방식
export const PhonePassBox = styled.div`
  padding: 25px 0;
  width: auto;
  border: 1px solid #ddd;
  border-radius: 3px;
  vertical-align: baseline;
`

export const PPDiv = styled.div`
  width: 100%;
  text-align: center;
`

export const PPFigure = styled.figure`
  margin-bottom: 20px;
  height: 82px;
  display: block;
  padding: 0;
  vertical-align: baseline;
`

export const PPFImg = styled.img`
  vertical-align: top;
  max-width: 100%;
  padding: 0;
`

export const PPPTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin-bottom: 10px;
  padding: 0;
  vertical-align: baseline;
`

export const PPPText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  padding: 0;
  vertical-align: baseline;
`

export const PPPButtonBox = styled.p`
  width: 82px;
  height: 30px;
  line-height: 30px;
  background: #006241;
  margin: 0 auto;
  border-radius: 3px;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`


// 회원가입 동의 약관 전체 박스
export const ABox = styled.div`
  background: #f7f7f7;
  box-sizing: border-box;
  color: #666 !important;
  height: 170px;
  width: 100%;
  padding: 20px 2%;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 20px;
  overflow: hidden;
  margin-top: 20px;
`

export const ABSBox = styled.div`
  position: relative;
  //overflow: hidden;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 100%;
  max-width: 100%;
  outline: none;
  direction: ltr;
`

// 안쪽 박스
export const ABSInnerBox = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-right: 30px;
  overflow: hidden;
  width: auto;
  height: auto;
  padding: 0;
  vertical-align: baseline;
`


export const ABSIBP = styled.div`
  font-size: 14px;
  color: #444444;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

// 스크롤 박스
export const ABSScrollBox = styled.div`
  display: block;
  opacity: 0.75;
  position: absolute;
  width: 16px;
  height: auto;
  left: auto;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  transition: opacity .2s ease-in-out, background-color .2s ease-in-out;
`

export const ABSSBContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: auto;
  margin: 0;
  padding: 0;
  vertical-align: bottom;
`
// 스크롤 드래그 바
export const ABSSBCDragger = styled.div`
  position: absolute;
  min-height: 33px;
  top: 0;
  display: block;
  max-height: 118px;
  height: 33px !important;
  cursor: pointer;
  width: 100%;
  z-index: 1;
  margin: 0;
  padding: 0;
`

export const ABSSBCDBar = styled.div`
  line-height: 33px;
  width: 10px;
  background: #666 !important;
  position: relative;
  height: 100%;
  margin: 0 auto;
  transition: opacity .2s ease-in-out, background-color .2s ease-in-out;
  border-radius: 16px;
  text-align: center;
`

// 스크롤 드래그 길이
export const ABSSBCRail = styled.div`
  background-color: rgba(0,0,0,0.4);
  width: 2px;
  height: 100%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 0;
`

// 회원가입 유의사항
export const RFSNoticeUl = styled.ul`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const RFSNoticeLi = styled.li`
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  position: relative;
  padding-left: 10px;
  list-style: none;
  margin: 0;
  vertical-align: baseline;
  
  :before {
    content: "·";
    left: 0;
    position: absolute;
    top: 0;
  }
`
