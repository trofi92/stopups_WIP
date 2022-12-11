import styled from "styled-components";
import ESUlImg from "../../image/Event/ESummer/ESUlImg.png"

// 전체 박스
export const ESBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const ESBPosition = styled.div`
  width: 96%;
  margin: 0 0 0 -48%;
  left: 50%;
  position: relative;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const ESSection = styled.section`
  display: block;
  margin-bottom: 60px;
  position: relative;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

// 섹션 헤더
export const ESSHeader = styled.header`
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 20px 140px 20px 20px;
  display: block;
  margin: 0;
  vertical-align: baseline;
  height: 18px;
  
  :after {
    content: "";
    display: block;
    clear: both;
  }
`

export const ESSHH3 = styled.h3`
  float: left;
  font-size: 18px;
  font-weight: bold;
  color: #222222;
  margin: 0;
  padding: 0;
  border: 0;
  line-height: 18px;
  vertical-align: baseline;
`

export const ESSHSpan = styled.span`
  font-size: 12px;
  font-weight: normal;
  color: #666666;
  padding-left: 5px;
  vertical-align: bottom;
  margin: 0;
  border: 0;
`

export const ESSUl = styled.ul`
  position: absolute;
  right: 20px;
  top: 15px;
  height: 28px;
  background: url(${ESUlImg}) 0 0 no-repeat;
  margin: 0;
  padding: 0;
`

export const ESSLi = styled.li`
  float: left;
  padding-left: 8px;
  margin: 0;
  list-style: none;
`

export const ESSLA = styled.a`
  margin: 0;
  padding: 0;
  font-size: 100%;
  text-decoration: none;
  vertical-align: baseline;
  color: #666;
  background: transparent;
  cursor: pointer;
`

export const ESSLAImg = styled.img`
  vertical-align: top;
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
`

// 섹션의 아티클
export const ESArticle = styled.article`
  padding: 20px;
  position: relative;
  display: block;
  margin: 0;
  border: 0;
  vertical-align: baseline;
`

export const ESADiv = styled.div`
  position: relative;
  display: block;
  margin: 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
`

export const ESADiv2 = styled.div`
  display: block;
  margin: 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
`

export const ESADiv3 = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
`

export const ESADiv4 = styled.div`
  position: relative;
  margin: 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
`

export const ESADImg = styled.img`
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
  vertical-align: top;
  max-width: 100%;
`

export const ESADP1 = styled.p`
  display: block;
  position: absolute;
  background: rgba(162, 141, 25, 0);
  margin: 0;
  text-indent: -20000px;
  overflow: hidden;
  left: 10%;
  top: 26.1%;
  width: 34.8%;
  height: 24%;
`

export const ESADP2 = styled.p`
  display: block;
  position: absolute;
  background: rgba(162, 141, 25, 0);
  margin: 0;
  text-indent: -20000px;
  overflow: hidden;
  left: 55.6%;
  top: 48.2%;
  width: 33.8%;
  height: 22.5%;
`

export const ESADP3 = styled.p`
  display: block;
  position: absolute;
  background: rgba(162, 141, 25, 0);
  margin: 0;
  text-indent: -20000px;
  overflow: hidden;
  left: 10.8%;
  top: 66.5%;
  width: 33.8%;
  height: 22.5%;
`

export const ESADP4 = styled.p`
  display: block;
  position: absolute;
  background: rgba(162, 141, 25, 0);
  margin: 0;
  text-indent: -20000px;
  overflow: hidden;
  left: 6%;
  top: 65.5%;
  width: 11.2%;
  height: 4.4%;
`

export const ESButtonBox = styled.div`
  width: 100%;
  height: 45px;
  position: relative;
  padding-top: 20px;
  margin: 0;
  vertical-align: baseline;
`

export const ESBP = styled.p`
  border-radius: 3px;
  height: 45px;
  width: 84px;
  background: #666666;
  margin-top: 20px;
  position: absolute;
  right: 50px;
  top: 0;
  padding: 0;
  display: block;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  line-height: 45px;

  :hover {
    text-decoration: underline;
  }
`