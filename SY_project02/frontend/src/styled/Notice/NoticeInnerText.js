import styled from "styled-components";


// 공지사항 내용 전체 박스
export const NITBox = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const NITInnerBox = styled.div`
  width: 96%;
  margin: 0 auto;
  position: relative;
  padding: 0;
  vertical-align: baseline;
`

// 본문
export const NITSection = styled.section`
  position: relative;
  margin-bottom: 60px;
  display: block;
  padding: 0;
  vertical-align: baseline;
`

// 제목
export const NITHeader= styled.header`
  display: block;
  border-top: 1px solid #333333;
  border-bottom: 1px solid #333333;
  padding: 20px 140px 20px 20px;
  margin: 0;

  :after {
    content: "";
    display: block;
    clear: both;
  }
`

export const NITH3 = styled.h3`
  float: left;
  font-size: 18px;
  font-weight: bold;
  color: #222222;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const NITHSpan = styled.span`
  display: block;
  padding-top: 15px;
`

export const NITUl = styled.ul`
  position: absolute;
  right: 20px;
  top: 15px;
  height: 28px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const NITLi = styled.li`
  float: left;
  padding-left: 8px;
  list-style: none;
  margin: 0;
`

// 본문 내용
export const NITArticle = styled.article`
  padding: 30px 10px;
  border-bottom: 1px solid #ddd;
  position: relative;
  display: block;
  margin: 0;
  vertical-align: baseline;
`

export const NITAInner = styled.div`
  position: relative;
  font-size: 14px;
  color: #666666;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const NITAP = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: 'Noto Sans KR', 'sans-serif';
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  vertical-align: baseline;
`

export const NITASpan = styled.span`
  margin: 0;
  padding: 0;
  font-size: 11pt;
  font-weight: inherit;
`

// 목록 버튼
export const NITButtonBox = styled.div`
  width: 100%;
  height: 45px;
  position: relative;
  margin-top: 20px;
`

export const NITButton = styled.p`
  border-radius: 3px;
  height: 45px;
  width: 84px;
  background: #666666;
  position: absolute;
  right: 0;
  top: 0;
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

// 윗글, 아랫글
export const NITTable = styled.table`
  width: 100%;
  margin-bottom: 75px;
  border-collapse: collapse;
  border-spacing: 0;
  padding: 0;
  vertical-align: baseline;
`

export const NITTh = styled.th`
  border-top: 1px solid #333;
  padding: 15px 0 15px 20px;
  font-size: 14px;
  color: #222222;
  background: #f4f4f2;
  text-align: left;
  border-bottom: 1px solid #dddddd;
`

export const NITTd = styled.td`
  border-top: 1px solid #333;
  padding: 15px 0 15px 20px;
  font-size: 14px;
  color: #666666;
  border-bottom: 1px solid #dddddd;
`

export const NITTdP = styled.p`
  color: #666;
  padding: 0;
  margin: 0;
  
  :hover {
    text-decoration: underline;
  }
`