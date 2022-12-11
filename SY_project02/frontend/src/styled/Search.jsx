import styled from "styled-components";
import SearchButtonImg from "../image/SearchButtonImg.png"

// 통합검색 전체 박스
export const SBox = styled.div`
  width: 100%;
  margin: 61px 0 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
`

// 통합검색 내용 전체 박스
export const SInnerBox = styled.div`
  width: 100%;
  float: left;
  margin-bottom: 90px;
  padding: 0;
  vertical-align: baseline;
`

// 통합검색 입력
export const SFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const SFBox = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  line-height: 1;
`

export const SFStrong = styled.strong`
  color: #222;
  font-size: 18px;
`

// 통합검색 인풋
export const SFInputBox = styled.div`
  height: 46px;
  left: 50%;
  margin-left: -251px;
  position: absolute;
  top: 40px;
  width: 502px;
  padding: 0;
`

export const SFInput = styled.input`
  border: 3px solid #006633;
  border-radius: 23px;
  color: #666;
  float: left;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  text-indent: 20px;
  width: 440px;
  outline: none;
  vertical-align: middle;
  margin: 0;
  padding: 0;
`

export const SFIP = styled.p`
  background: url(${SearchButtonImg});
  float: right;
  height: 45px;
  overflow: hidden;
  width: 45px;
  margin: 0;
  padding: 0;
`

// 통합검색 버튼
export const SFButtonBox = styled.div`
  display: inline-block;
  margin-top: 116px;
  width: 100%;
  padding: 0;
`

export const SFBUl = styled.ul`
  margin: 0 0 0 -0.963%;
  padding: 0;
`

export const SFBLi = styled.li`
  background: #f4f4f1;
  border-radius: 3px;
  float: left;
  font-size: 14px;
  height: 35px;
  line-height: 35px;
  margin: 0 0 10px 0.963%;
  width: 19.036%;
  list-style: none;
  padding: 0;
`

export const SFBLPGreen = styled.p`
  background: #006633;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  
  :hover {
    text-decoration: underline;
  }
`

export const SFBLP = styled.p`
  border-radius: 3px;
  color: #444;
  display: block;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  
  :hover {
    color: white;
    background: #006633;
    text-decoration: underline;
  }
`

// 검색 결과가 없는 경우
export const SNoResult = styled.p`
  text-align: center;
  padding-top: 100px;
  margin: 0;
`

// 검색 결과 공통
export const SSection = styled.section`
  display: inline-block;
  margin-top: 50px;
  width: 100%;
  padding: 0;
  vertical-align: baseline;
`

// 검색 결과 공통 헤더
export const SSHeader = styled.header`
  border-bottom: 1px solid #ddd;
  height: 40px;
  width: 100%;
  display: block;
  margin: 0;
  padding-top: 0;
  vertical-align: baseline;
`

export const SSHH2 = styled.h2`
  color: #222;
  float: left;
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
  padding: 0;
  margin-bottom: 0;
  line-height: 1;
`

export const SSHP = styled.p`
  background: #666;
  border-radius: 3px;
  color: #fff;
  float: right;
  font-size: 12px;
  font-weight: bold;
  height: 28px;
  line-height: 28px;
  padding: 0 20px;
  margin: 0;
  
  :hover {
    text-decoration: underline;
  }
`

export const SSUl = styled.ul`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const SSLi = styled.li`
  border-bottom: 1px solid #ddd;
  float: left;
  padding: 20px 0;
  width: 100%;
  margin: 0;
  display: list-item;
  line-height: 1;
`

// 검색 결과가 없을 때 공통
export const SSLP = styled.p`
  text-align: center;
  padding-top: 10px;
  display: block;
  margin: 0;
`

// 이벤트 검색 결과가 있을 때
export const SEFigure = styled.figure`
  height: auto;
  width: 30%;
  float: left;
  display: block;
  margin: 0;
  padding: 0;
`
// 이벤트 검색 결과가 있을 때 이미지
export const SEFImg = styled.img`
  width: 100%;
  vertical-align: top;
  max-width: 100%;
  margin: 0;
  padding: 0;
`
// 이벤트 검색 결과가 있을 때 내용
export const SEDiv = styled.div`
  margin-left: 20px;
  width: 65%;
  float: left;
  padding: 0;
`

export const SEDHeader = styled.header`
  float: left;
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const SEDHH3 = styled.h3`
  color: #444;
  float: left;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.8;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const SEDHSpan = styled.span`
  background: #006633;
  border-radius: 3px;
  color: #fff;
  float: left;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  margin-left: 9px;
  text-align: center;
  width: 43px;
  padding: 0;
  vertical-align: baseline;
  margin-top: 3px;
`

export const SEDPDate = styled.p`
  color: #666;
  font-size: 14px;
  float: left;
  margin-top: 10px;
  width: 100%;
  padding: 0;
`

export const SEDPLink = styled.p`
  float: left;
  margin-top: 20px;
  width: 100%;
  padding: 0;
  vertical-align: baseline;
  color: #666;
  font-size: 12px;
  word-break: break-all;
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
  }
`

export const SEDPP = styled.p`

`

// 뉴스 검색 결과가 있을 때


// 매장 이벤트 검색 결과가 있을 때


// 원두 검색 결과가 있을 때


// 음료 검색 결과가 있을 때


// 푸드 검색 결과가 있을 때


// 상품 검색 결과가 있을 때


// 매장 검색 결과가 있을 때

