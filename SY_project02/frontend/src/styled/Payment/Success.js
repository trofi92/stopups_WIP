import styled from "styled-components"

// Success 전체 박스
export const SBox = styled.div`
  width: 100%;
  margin: 61px 0 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
`

// 준비중
export const STitleBox = styled.div`
  width: 483px;
  margin: 0 auto;
`
export const STitle1 = styled.div`
  text-align: left;
  font-size: 27px;
  font-weight: bold;
  color: #000;
  
  span {
    color: #006633;
  }
`
export const STitle2 = styled.div`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  color: #000;
  margin-bottom: 5px;
  
  p {
    font-size: 30px;
    margin-top: 0;
    margin-bottom: 40px;
  }
`
export const STitle3 = styled.div`
  text-align: center;
  margin: 0 auto;
  font-weight: 500;
  font-size: 17px;
  color: #666666;
`

// 결제 완료, 주문 요청, 주문 승인, 준비 완료
export const STitle4 = styled.div`
  margin: 10px auto;
  height: 50px;
  width: 483px;
  display: flex;
  flex-direction: row;
`
export const STestFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`
export const STF2 = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
`
export const STest = styled.a`
  width: 100% !important;
  float: left;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: #ddd;
  background: #fff;
  text-decoration: none;
`
export const STest2 = styled.a`
  width: 100% !important;
  float: left;
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  display: block;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: #000;
  background: #fff;
  text-decoration: none;
`
export const STLine = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  background: #ddd;
  height: 7px;
`
export const STLine2 = styled.p`
  margin: 0;
  padding: 0;
  width: 100%;
  background: #006633;
  height: 7px;
`

// 주문 내역
export const SSection = styled.section`
  margin-top: 10px;
  background: #F7F7F7;
  border-radius: 3px;
  display: table;
  height: 100%;
  padding: 0 3%;
  width: 94%;
  margin-bottom: 40px;
`
export const SSTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: #444;
  margin: 20px 0;
`
export const SSTakeOut = styled.div`
  background: #eee;
  color: #666666;
  font-weight: 500;
  padding: 10px 20px;
`

// 결제 실패 => 장바구니로 돌아가기
export const SButtonBox = styled.div`
  margin: 30px 0 60px 0;
  text-align: center;
`

export const SButton2 = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  padding: 5px 0;
  margin: 0 auto;
  background: #006633;
  width: 40%;
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
  }
`
