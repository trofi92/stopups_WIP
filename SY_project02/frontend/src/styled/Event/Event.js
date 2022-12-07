import styled from "styled-components";

// 이벤트 전체 박스
export const EBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const EBPosition = styled.div`
  width: 96%;
  margin: 0 0 0 -48%;
  left: 50%;
  position: relative;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const ESection = styled.section`
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

// 이벤트 종류 버튼 박스
export const ESDiv = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #dddddd;
  height: 71px;
  border-radius: 3px;
  padding: 0;
`

// 이벤트 종류 버튼
export const ESH31 = styled.h3`
  width: 22%;
  left: 2%;
  display: block;
  position: absolute;
  top: 20px;
  border-radius: 3px;
  margin: 0;
  padding: 0;
`

export const ESH32 = styled.h3`
  width: 22%;
  left: 26.6%;
  display: block;
  top: 20px;
  border-radius: 3px;
  margin: 0;
  padding: 0;
  position: absolute;
`

export const ESH33 = styled.h3`
  width: 22%;
  left: 51.3%;
  display: block;
  position: absolute;
  top: 20px;
  border-radius: 3px;
  margin: 0;
  padding: 0;
`

export const ESH34 = styled.h3`
  width: 22%;
  left: 76%;
  display: block;
  position: absolute;
  top: 20px;
  border-radius: 3px;
  margin: 0;
  padding: 0;
`
// 클릭된 이벤트 종류
export const ESAClicked = styled.a`
  width: 100%;
  background: #006633;
  color: #ffffff;
  border-radius: 3px;
  display: block;
  font-size: 14px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  text-decoration: none;
  margin: 0;
  
  :hover {
    text-decoration: underline;
    color: #fff;
  }
`

// 클릭되지 않은 이벤트 종류
export const ESA = styled.a`
  width: 100%;
  font-size: 12px;
  background: #f4f4f2;
  color: #222222;
  border-radius: 3px;
  display: block;
  height: 35px;
  line-height: 35px;
  text-align: center;
  margin: 0;
  text-decoration: none;
  
  :hover {
    text-decoration: underline;
    color: #222
  }
`

// 진행&종료 이벤트 전체 박스
export const ESArticle = styled.article`
  display: block;
  padding-top: 40px;
  margin: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`

export const ESList = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const ESDl = styled.dl`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
`

export const ESDt = styled.dt`
  padding: 21px;
  background: #f4f4f2;
  margin-bottom: 21px;
  border-radius: 3px;
  font-size: 18px;
  font-weight: bold;
  color: #222222;
  overflow: hidden;
`

export const ESDd = styled.dd`
  margin: 0 0 40px 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const ESDUl = styled.ul`
  width: 100%;
  left: 0;
  top: 0;
  position: relative;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  ::after {
    content: "";
    display: block;
    clear: both;
  }
`

export const ESDLi = styled.li`
  width: 32%;
  margin: 0.65%;
  float: left;
  position: relative;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  list-style: none;
`

export const ESDLDl = styled.dl`
  width: 100%;
  margin: 0;
  position: relative;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const ESDLDt = styled.dt`
  width: 100%;
  height: 0;
  padding: 0 0 100% 0;
  margin: 0;
  position: relative;
  border: 0;
  vertical-align: baseline;
  overflow: hidden;
`

export const ESDLA = styled.a`
  margin: 0;
  padding: 0;
  font-size: 100%;
  text-decoration: none;
  vertical-align: baseline;
  color: #666;
  background: transparent;
  cursor: pointer;
`

export const ESDLImg = styled.img`
  width: 100%;
  vertical-align: top;
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  
  transform: scale(1);
  //-webkit-transform: scale(1);
  //-moz-transform: scale(1);
  //-ms-transform: scale(1);
  //-o-transform: scale(1);
  transition: all 0.7s ease-in-out;

  :hover {
    transform: scale(1.2);
    //-webkit-transform: scale(1.2);
    //-moz-transform: scale(1.2);
    //-ms-transform: scale(1.2);
    //-o-transform: scale(1.2);
  }
`

export const ESDLDd = styled.dd`
  height: 50px;
  padding: 19px 10px 0 10px;
  margin: 0;
  border: 0;
  vertical-align: baseline;
`

export const ESDLH4 = styled.h4`
  font-size: 16px;
  color: #444444;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 16px;
  line-height: 19px;
  font-weight: normal;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const ESDLP = styled.p`
  font-size: 12px;
  color: #666666;
  height: 16px;
  line-height: 16px;
  margin-top: 8px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`
