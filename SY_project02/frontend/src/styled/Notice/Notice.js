import styled from "styled-components";

// 공지사항 타이틀
export const NTitleBox = styled.div`
  width: 100%;
  height: 98px;
  background: white;
  margin-top: 61px;
  padding: 0;
  border: 0;
`

export const NTInner = styled.div`
  width: 96%;
  margin: 0 auto;
  padding-top: 0;
  height: 91px;
  position: relative;
`

export const NTIH2 = styled.h2`
  padding-top: 30px;
  position: relative;
  margin: 0;
`

export const NTIImg = styled.img`
  vertical-align: top;
  max-width: 100%;
  margin: 0;
  padding: 0;
`

// 공지사항
export const NB = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const NBPosition = styled.div`
  width: 96%;
  padding-bottom: 80px;
  margin: 0 auto;
`

// 공지사항 검색창
export const NInput = styled.div`
  padding: 20px 30px;
  height: 38px;
  background: #f4f4f2;
  border-radius: 3px;
  margin-bottom: 40px;
  position: relative;
`

export const NIP = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
  margin: 0;
  padding: 0;
`

export const NIPInput = styled.input`
  width: 321px;
  height: 36px;
  line-height: 36px;
  border: 1px solid #ddd;
  border-radius: 3px;
  text-indent: 10px;
  color: #666;
  padding: 0;
  margin-right: 3px;
  box-sizing: content-box;
  vertical-align: top;
`

export const NIPA = styled.a`
  display: inline-block;
  width: 54px;
  height: 38px;
  line-height: 38px;
  background: #777;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;
  cursor: pointer;
`

// 공지사항 게시글들
export const NTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

// 넓이
export const NColgroup = styled.colgroup`
  display: table-column-group;
  border-collapse: collapse;
  border-spacing: 0;
`

// 게시글들 헤드
export const NThead = styled.thead`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const NTr = styled.tr`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const NTh = styled.th`
  font-size: 14px;
  font-weight: bold;
  color: #222;
  text-align: center;
  padding: 17px 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  line-height: 14px;
`

// 게시글들 박스
export const NTbody = styled.tbody`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

// 각각 게시글
export const NTBTr = styled.tr`
  font-size: 12px;
  color: #666;
  text-align: center;
  padding: 17px 0;
  border-bottom: 1px solid #ddd;
  line-height: 1.8;
  margin: 0;
`

export const NTBTd = styled.td`
  font-size: 12px;
  color: #666;
  text-align: center;
  padding: 17px 0;
  border-bottom: 1px solid #ddd;
  line-height: 1.8;
`

export const NTBTDLeft = styled.td`
  text-align: left;
  font-size: 12px;
  color: #666;
  padding: 17px 0 17px 20px;
  border-bottom: 1px solid #ddd;
  line-height: 1.8;
`

export const NTBTDLA = styled.p`
  color: #666;
  font-size: 16px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
    color: #666;
  }
`

// 게시글 페이지
export const NPagination = styled.div`
  height: 27px;
  margin-top: 50px;
  width: 100%;
  border: 0;
  padding: 0;
  vertical-align: baseline;
`

export const NPUl = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

// 숫자
export const NPLi = styled.li`
  display: inline-block;
  margin: 0 10px;
  vertical-align: middle;
  list-style: none;
  padding: 0;
  line-height: 12px;
`

export const NPA = styled.a`
  font-size: 12px;
  color: #555;
  line-height: 15px;
  cursor: pointer;
  margin: 0 10px;
  
  &:active {
    color: #006633;
    text-decoration: underline;
  }
`

export const NPAClicked = styled.a`
  font-weight: bold;
  font-size: 12px;
  color: #0d5f34;
  border-bottom: 1px solid #0d5f34;
  line-height: 15px;
  cursor: pointer;
`

// 다음 버튼
export const NPLNext = styled.li`
  margin: 0 1px;
  display: inline-block;
  vertical-align: middle;
  list-style: none;
  padding: 0;
  border: 0;
`

export const NPLNA = styled.a`
  font-size: 12px;
  color: #555;
  margin: 0;
  padding: 0;
  text-decoration: none;
  cursor: pointer;
`

export const NPLNAImg = styled.img`
  vertical-align: top;
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
`

export const NPLNButton = styled.button`
  border: 1px solid #dddddd;
  padding: 3px 6px;
  background: none;
  border-radius: 3px;
  color: #555;
  cursor: pointer;
`