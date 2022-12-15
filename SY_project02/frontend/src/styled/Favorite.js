import styled from "styled-components"
import FHeaderImg from "../image/Favorite/FHeaderImg.jpg"
import MyMenuBox from "../image/Favorite/MyMenuBox.png"
import CChecked from "../image/Cart/CChecked.png"


// My 메뉴 전체 박스
export const FBox = styled.div`
  width: 100%;
  margin: 61px 0 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
`

// My 메뉴의 헤더
export const FHeader = styled.header`
  background: #231a11;
  height: 178px;
  position: relative;
  width: 100%;
`

export const FHTitle = styled.div`
  margin-left: -50%;
  width: 100%;
  background: url(${FHeaderImg});
  height: 178px;
  left: 50%;
  position: absolute;
  top: 0;
`

export const FHTInner = styled.div`
  width: 100%;
  height: 74px;
  margin: 0 auto;
  padding-top: 104px;
  position: relative;
`

export const FHTInnerH4 = styled.h4`
  margin: 0;
  position: relative;
  left: 20px;
`

// My 메뉴의 내용
export const FContentsAllBox = styled.div`
  margin: 50px 0 0 -48%;
  width: 753.60px;
  left: 50%;
  position: relative;
`

export const FCBox = styled.div`
  width: 100%;
  float: left;
  margin-bottom: 90px;
  padding: 0;
`

// 최근 마신 음료 안내(이미지가 안뜸 왜지?)
export const FCSection1 = styled.section`
  background: url(${MyMenuBox});
  border-radius: 3px;
  display: table;
  height: 100px;
  padding: 0 3%;
  width: 94%;
`

export const FCSectionP = styled.p`
  font-size: 14px;
  display: table-cell;
  height: 100px;
  line-height: 1.6;
  vertical-align: middle;
`

// 찜 목록 내역
export const FCSection2 = styled.section`
  display: block;
  position: relative;
  padding-top: 40px;
  margin: 0;
`

export const FCSDl = styled.dl`
  position: relative;
  padding-top: 40px;
  margin: 0;
`

// 나만의 음료
export const FCSDt1 = styled.dt`
  box-sizing: border-box;
  width: 33.3%;
  left: 0;
  margin-left: 0;
  position: absolute;
  top: 0;
`
export const FCSH5 = styled.h5`
  margin: 0;
`

export const FCSA1 = styled.a`
  width: 100% !important;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #444;
  background: #fff;
  border: 1px solid #ddd;
  text-decoration: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  
  :hover {
    text-decoration: underline;
  }
`

export const FCSA1G = styled.a`
  width: 100% !important;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background: #006633;
  border: 1px solid #ddd;
  text-decoration: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  
  :hover {
    text-decoration: underline;
  }
`

// 나만의 음료 표
export const FCDd1 = styled.dd`
  display: block;
  margin: 0;
`

export const FCDP1 = styled.p`
  text-align: right;
  color: #666;
  font-size: 12px;
  margin: 30px 0 10px 0;
`

export const FCDArticle1 = styled.article`
  display: block;
  margin: 0;
`

export const FCDFieldset1 = styled.fieldset`
  margin: 0;
  padding: 0;
  border: none;
`

// 전체선택, 선택삭제 선택 폼
export const FCDTable1 = styled.table`
  width: 100%;
  border-top: 1px solid #333;
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-spacing: 0;
`

export const FCDTColgroup = styled.colgroup`
  display: table-column-group;
`

export const FCDTHead1 = styled.thead`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`

export const FCDTHTr1 = styled.tr`
  margin: 0;
  top: 0;
  padding: 0;
  border: 0;
`

export const FCDTHTh1 = styled.th`
  border-bottom: 1px solid #333;
  color: #222;
  height: 46px;
  vertical-align: middle;
  padding: 0;
`

export const FCDTHThDiv1 = styled.div`
  display: inline-block;
  vertical-align: middle;
`

export const FCDTHThDInput1 = styled.input`
  appearance: none;
  width: 12px;
  height: 12px;
  border: 1px solid #cac5c1;
  border-radius: 3px;
  margin-top: 3px;
  &:checked {
    background: url(${CChecked});
  }
`

export const FCDTHTbody1 = styled.tbody`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  display: table-row;
`

export const FCDTHTbodyTr1 = styled.tr`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  display: table-row;
`

// 데이터가 없을 때
export const FCDTHTbodyTd1 = styled.td`
  border-bottom: 1px solid #dbdbdb;
  color: #666;
  height: 46px;
  padding: 7px 0;
  vertical-align: middle;
  width: 800px;
`

// 데이터가 있을 때
export const FCDTHTbodyTdOK = styled.td`
  border-bottom: 1px solid #dbdbdb;
  color: #666;
  height: 46px;
  padding: 7px 0;
  vertical-align: middle;
`


// 나만의 푸드
export const FCSDt2 = styled.dt`
  box-sizing: border-box;
  width: 33.3%;
  left: 33.3%;
  margin-left: 0;
  position: absolute;
  top: 0;
`

export const FCSA2 = styled.a`
  width: 100% !important;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #444;
  background: #fff;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
  
  :hover {
    text-decoration: underline;
  }
`

export const FCSA2G = styled.a`
  width: 100% !important;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background: #006633;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
  
  :hover {
    text-decoration: underline;
  }
`

// 나만의 상품
export const FCSDt3 = styled.dt`
  box-sizing: border-box;
  width: 33.3%;
  left: 66.4%;
  margin-left: 0;
  position: absolute;
  top: 0;
`

export const FCSA3 = styled.a`
  width: 100% !important;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #444;
  background: #fff;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  
  :hover {
    text-decoration: underline;
  }
`

export const FCSA3G = styled.a`
  width: 100% !important;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  background: #006633;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  
  :hover {
    text-decoration: underline;
  }
`

// 전체 삭제, 선택 삭제, 장바구니 이동 버튼
export const FCSection3 = styled.section`
  display: block;
  position: relative;
  padding-top: 40px;
  margin: 0;
`
