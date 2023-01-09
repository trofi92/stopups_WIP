import styled from "styled-components"
import test from "../../image/Cart/111.jpg";


// Payment 전체 박스
export const PBox = styled.div`
  width: 100%;
  margin: 61px 0 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
`

// 결제 수단
export const PSection1 = styled.section`
  border-radius: 3px;
  display: table;
  height: 100%;
  padding: 0 3%;
  width: 94%;
`

export const PSTitle1 = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #444;
  margin-bottom: 20px;
`

export const PSDiv1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #ddd;
`

export const PSImg1 = styled.img`
  width: 50px;
  float: left;
  text-align: center;
`

export const PSSpan1 = styled.span`
  font-size: 19px;
  font-weight: bold;
  color: #444;
  line-height: -1px;
  margin-left: 20px;
  margin-bottom: 4px;
`

// 쿠폰 및 할인
export const PSection4 = styled.section`
  border-radius: 3px;
  display: table;
  height: 100%;
  padding: 0 3%;
  width: 94%;
  margin-top: 30px;
`

export const PSTitle4 = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #444;
  margin-bottom: 20px;
  cursor: pointer;
`

export const PSSpan4 = styled.span`
  float: right;
`

export const PSToggle = styled.img`
  vertical-align: top;
  max-width: 100%;
  margin-left: 1.5px;
  margin-top: 2px;
  cursor: pointer;
`

export const PSDiv4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 0;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

export const PSImg4 = styled.img`
  width: 40px;
  float: left;
  text-align: center;
`

export const PSDSpan4 = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #444;
  line-height: -1px;
  margin-left: 20px;
  margin-bottom: 4px;
  width: 100%;
`

// 주문 내역
export const PSection = styled.section`
  margin-top: 20px;
  background-color: #F4F4F1;
  border-radius: 3px;
  display: table;
  height: 100%;
  padding: 0 3%;
  width: 94%;
`

export const PSTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #444;
  padding: 20px 0;
`

export const PSMenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 0;
  //border: 1px solid crimson;
  flex-direction: column;
`

export const PSMBox = styled.div`
  width: 100%;
  height: 100%;
  //margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const PSMBImg = styled.img`
  background: url(${test}) center;
  background-size: cover;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 20px;
`

export const PSMBText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 588.67px;
`

export const PSMBTSpan = styled.span`
  float: right;
`

// 주문 금액
export const PSection2 = styled.section`
  border-radius: 3px;
  display: table;
  height: 100%;
  padding: 0 3%;
  width: 94%;
  margin-top: 20px;
`

export const PSPriceTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #444;
  padding: 10px 0;
`

export const PSPrice = styled.span`
  float: right;
  font-size: 18px;
  font-weight: bold;
  color: #444;
`

export const PSTotalPrice = styled.div`
  margin-top: 10px;
`

export const PSTotalPriceTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #444;
  padding: 10px 0;
`

export const PSTotalPriceSpan = styled.span`
  float: right;
  font-size: 22px;
  font-weight: bold;
  color: #444;
`

// 결제하기 버튼
export const PSection3 = styled.section`
  border-radius: 3px;
  display: table;
  height: 100%;
  padding: 0 3%;
  width: 94%;
  margin-top: 50px;
  text-align: center;
`

export const PS3Button= styled.button`
  height: 70px;
  background-color: #006633;
  border-radius: 40px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 20px;
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
  }
`