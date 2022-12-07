import styled from "styled-components";
import FLogo from "../image/Footer/FLogo.png"

// 푸터
export const F = styled.div`
  margin: 0 auto;
  //height: 825.938px;
  padding: 32px 0 35px 0;
  background: #2c2a29;
  position: relative;
  width: 100%;
  clear: both;
  height: 100%;
`

// 메뉴
export const FWrap = styled.div`
  left: 2%;
  width: 96%;
  margin-left: 0;
  background: url(${FLogo}) right 8px no-repeat;
  display: inline-block;
  position: relative;
`

export const FWInner = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const FWUl = styled.ul`
  width: calc(96% / 3);
  display: inline-block;
  vertical-align: top;
  margin-bottom: 30px;
  padding: 0;
  margin-top: 0;
`

export const FWLi = styled.li`
  list-style: none;
  margin-left: 0;
  display: list-item;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const FWA1 = styled.a`
  font-size: 14px;
  line-height: 40px;
  width: 100%;
  margin-left: 0;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;
  cursor: pointer;
  color: #fff;
  
  :hover {
    text-decoration: underline;
  }
`

export const FWA2 = styled.p`
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  margin: 0;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;
  cursor: pointer;
  color: #fff;
  
  :hover {
    text-decoration: underline;
  }
`

// 유틸 버튼
export const FUButton = styled.div`
  width: 100%;
  display: block;
  position: relative;
`

export const FUBUl = styled.ul`
  width: 60%;
  margin: 25px auto 0;
  text-align: center;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const FUBLi = styled.li`
  display: inline-block;
  float: none;
  width: 31%;
  margin: 0.75%;
  list-style: none;
`

export const FUBLiP = styled.p`
  display: block;
  color: #ffffff;
  font-size: 24px;
  border: 2px solid #ffffff;
  border-radius: 3px;
  text-align: center;
  padding: 14.6px 4.4px;
  margin: 0;
  
  :hover {
    text-decoration: underline;
  }
`

// 수상 내역
export const FAward = styled.div`
  height: 80px;
  margin-top: 40px;
  background: #282828;
  position: relative;
  width: 100%;
  padding-top: 20px;
`

export const FAInner = styled.div`
  width: 762px;
  margin-left: -381px;
  position: absolute;
  left: 50%;
  padding-bottom: 20px;
`

// 그외 기타
export const FAside = styled.aside`
  color: #999;
  font-size: 12px;
  line-height: 24px;
  padding-top: 30px;
  text-align: center;
  width: 100%;
`

export const FAsideAGreen = styled.a`
  border-right: 1px solid #393939;
  font-size: 12px;
  padding: 0 10px;
  color: #00b050 !important;
  font-weight: bold;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

export const FAsideA = styled.a`
  border-right: 1px solid #393939;
  font-size: 12px;
  padding: 0 10px;
  color: #ccc;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

export const FAButtonA = styled.a`
  background: none;
  border: 2px solid #fff;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  margin: 10px 2px 0 3px;
  width: 110px;
  height: 30px;
  line-height: 30px;

  :hover {
    text-decoration: underline;
  }
`

export const FAUl = styled.ul`
  padding: 25px 0 5px 0;
  margin: 0 auto;
  text-align: center;
  
  :after {
    content: "";
    display: block;
    clear: both;
  }
`

export const FALi = styled.li`
  line-height: 1.3;
  display: inline-block;
  margin: 0 7px;
  list-style: none;
`

export const FASpan = styled.span`
  display: inline-block;
  line-height: 40px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`