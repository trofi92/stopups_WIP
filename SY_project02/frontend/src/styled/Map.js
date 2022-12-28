import styled from "styled-components";
import MBackground from "../image/Map/MBackground.png"
import MapInput from "../image/Map/MapInput.png"

// 지도 전체 박스
export const MBox = styled.div`
  background-size: cover;
  width: 100%;
  height: 100%;
  margin-top: 60px;
`
// 지도
export const MSection = styled.section`
  display: block;
  position: relative;
  overflow: hidden;
  background: url(${MBackground});
  height: 550px;
  width: 100%;
`

// 매장에서 진행되는 이벤트
export const MBSection = styled.section`
  height: 350px;
  margin: 30px auto 70px;
  width: 530px;
  position: relative;
  display: block;
`

export const MBSP = styled.p`
  font-size: 18px;
  color: #222;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 0;
  vertical-align: baseline;
`

export const MBSDiv = styled.div`
  max-width: 580px;
  position: relative;
  margin: 0 auto 60px;
  padding: 0;
  vertical-align: baseline;
`

export const MSDDiv = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 360px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSDDLi = styled.div`
  float: left;
  list-style: none;
  position: relative;
  width: 255px;
  margin-right: 20px;
  height: 315px;
`

export const MSDDLImg = styled.img`
  border-radius: 3px;
  text-align: center;
  margin: 0 auto;
  width: 255px;
  height: 255px;
  display: block;
  vertical-align: top;
`
export const MSDDLP = styled.p`
  bottom: 0;
  color: #444;
  font-size: 14px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const MSDDLPSpan = styled.span`
  color: #666;
  font-size: 12px;
  margin: 0;
  padding: 0;
`

// 이전, 다음 버튼
export const MSButtonBox = styled.div`
  max-width: 580px;
  position: relative;
  margin: 0 auto 60px;
  padding: 0;
  vertical-align: baseline;
`

// 지도 위에 띄울 그거
export const MModal = styled.div`
  top: 30px;
  left: 0;
  position: absolute;
`

export const MMFieldset = styled.fieldset`
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  border: 0;
`

export const MMDiv = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 2px 0 3px 0 rgb(0 0 0 / 20%);
  left: 20px;
  position: absolute;
  top: 0;
  width: 300px;
  z-index: 7;
`

export const MMSection = styled.section`
  background: #fff;
  border-radius: 3px;
  height: 118px;
  position: relative;
  display: block;
`

export const MMHeader = styled.header`
  border-top-left-radius: 3px;
  float: left;
  height: 58px;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

export const MMHH2 = styled.h2`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 58px;
  width: 100%;
  display: block;
  background: #006633;
  overflow: hidden;
  margin: 0;
  color: #fff;
  text-align: center;
  line-height: 55px;
`

export const MMArticle = styled.article`
  left: 0;
  position: absolute;
  top: 58px;
  width: 100%;
`

export const MMAArticle = styled.article`
  background: #fff;
  display: block;
  position: relative;
  width: 300px;
`

export const MMAAHeader= styled.header`
  left: 0;
  float: left;
  height: 40px;
  position: absolute;
  top: 0;
  width: 100%;
  background: #fff;
`

export const MMAAHH3 = styled.h3`
  border-color: #006633;
  height: 38px;
  line-height: 38px;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  text-align: center;
  width: 100%;
  color: #444;
  font-size: 12px;
  margin: 0;
`

export const MMAAArticle = styled.article`
  display: block;
  //padding: 40px 0 0 0;
`

export const MMAAADiv1 = styled.div`
  background: #006633;
  height: 60px;
  width: 100%;
`

export const MMAAADiv1Inner = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 3px;
  float: left;
  height: 38px;
  margin: 10px 0 0 10px;
  position: relative;
  width: 278px;
`

export const MMAAADiv1IInput = styled.input`
  border: none;
  float: left;
  height: 100%;
  margin-left: 2%;
  padding: 0;
  width: 96%;
  vertical-align: middle;
`

export const MMAAADib1IA = styled.p`
  background: url(${MapInput});
  display: block;
  height: 23px;
  overflow: hidden;
  position: absolute;
  right: 7px;
  top: 7px;
  text-indent: -20000px;
  width: 19px;
  margin: 0;
  cursor: pointer;
`

export const MMAAADiv2 = styled.div`
  line-height: inherit;
  height: 22px;
  padding-top: 5px;
  background: #f4f4f2;
  color: #444;
  font-size: 14px;
  position: relative;
  text-indent: 10px;
  width: 100%;
  
  strong {
   font-size: 14px; 
    font-weight: 400;
  }
  
  span {
    color: #006633;
  }
`

export const MMAAADiv3 = styled.div`
  background: #fff;
  position: relative;
  width: 100%;
  
  h2 {
    color: #444;
    background: #f4f4f2;
    padding: 15px 0;
    border-color: #fff;
    line-height: 20px;
    text-align: center;
    width: 100%;
    font-size: 13px;
    margin: 0 auto;
    cursor: pointer;
    
    :hover {
      text-decoration: underline;
    }
  }
`

export const MMAAADiv4 = styled.div`
  background: #fff;
  position: relative;
  width: 100%;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  
  div {
    padding-top: 20px;
    border-color: #fff;
    height: 60px;
    line-height: 20px;
    text-align: center;
    width: 100%;
    color: #444;
    font-size: 13px;
    margin: 0;
  }
`