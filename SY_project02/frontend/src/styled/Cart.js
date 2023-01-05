import styled from "styled-components";
import test from "../image/Cart/111.jpg"
import CNoCart from "../image/Cart/CNoCart.png"
import CChecked from "../image/Cart/CChecked.png"

export const CDiv = styled.div`
  position: relative;
  padding-top: 40px;
  margin: 0;
`

// 음료/푸드
export const CFoodBox1 = styled.div`
  box-sizing: border-box;
  width: 50%;
  left: 0;
  margin-left: 0;
  position: absolute;
  top: 0;
`

export const CFood = styled.a`
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
  border-bottom: 1px solid #ddd;
  text-decoration: none;
`

export const CFoodG = styled.a`
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
  border-bottom: 3px solid #006633;
  text-decoration: none;
`

// 주문 메뉴 박스
export const CFBoxs = styled.div`
  width: 100%;
  position: relative;
  top: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const CFBox = styled.div`
  margin: 0 50px;
  height: 100%;
`

// 주문 메뉴 타이틀
export const CBTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #444;
  padding: 20px 0;
  float: left;
`

export const CBTSpan = styled.span`
  font-size: 12px;
  color: #877272;
  padding: 25px 0 20px 0;
  float: right;
`

export const CBTSpanColor = styled.span`
  color: #006633;
  font-weight: bold;
`

// 전체 선택, 선택 삭제, 전체 삭제
export const CFAllCheckBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 15px solid #F7F7F7;
  width: 100%;
  font-size: 12px;
`

export const CFAllCheck = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 14px;
  background-position: center;
  margin-left: 50px;
`

export const CFACInput = styled.input`
  appearance: none;
  width: 12px;
  height: 12px;
  border: 1px solid #cac5c1;
  border-radius: 3px;
  &:checked {
    background: url(${CChecked});
  }
`

export const CFAllCheckText = styled.div`
  float: left;
  width: 520px;
  color: #9E9E9E;
  cursor: pointer;
`

export const CFCDelete = styled.div`
  color: #006633;
  cursor: pointer;

  ::after{
    border-right: 1px solid #9E9E9E;
    content: "";
    margin-left: 7px;
  }
`

export const CFCAllDelete = styled.div`
  margin-right: 50px;
  cursor: pointer;
  color: #9E9E9E;
`

// 메뉴
export const CFMenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  flex-direction: column;
`

export const CMCheck = styled.div`
  display: flex;
  margin-right: 642px;
  vertical-align: middle;
  height: 14px;
  text-align: left;
`

export const CMCInput = styled.input`
  appearance: none;
  width: 12px;
  height: 12px;
  border: 1px solid #cac5c1;
  border-radius: 3px;
  &:checked {
    background: url(${CChecked});
  }
`

export const CMBox = styled.div`
  background: white;
  width: 87%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`

export const CFMImg = styled.img`
  background: url(${test}) center;
  background-size: cover;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-left: 10px;
  margin-right: 20px;
`

export const CFMText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 512.67px;
`

export const CFMTitle = styled.div`
  color: #444;
  font-weight: bold;
  font-size: 16px;
  word-spacing: 2px;
  margin: 10px 0;
`

export const CFMOption = styled.div`
  font-size: 13px;
  color: #9E9E9E;
  margin-bottom: 10px;
`

export const CFMIceHot = styled.span`
  padding: 0 5px;
  border-right: 1px solid #9E9E9E;

  :first-child {
    padding-left: 0;
  }
`

export const CFMSize = styled.span`
  padding: 0 5px;
  border-right: 1px solid #9E9E9E;
`

export const CFMCup = styled.span`
  padding-left: 5px;
`

export const CFMMoney = styled.span`
  float: right;
  font-weight: bold;
`

export const CFMCountBox = styled.div`
  margin-top: 20px;
  color: #444;
  font-weight: bold;
`

export const CFMCount = styled.span`
  font-size: 20px;
`

export const CFMCMinus = styled.span`
  vertical-align: middle;
  color: #666;
  margin-right: 20px;
`

export const CFMCPlus = styled.span`
  vertical-align: middle;
  color: #666;
  margin-left: 20px;
`

export const CFMTotalMoney = styled.span`
  float: right;
`

// 총 갯수 박스
export const CFButtonBox = styled.div`
  margin: 0 50px;
  height: 100%;
`

export const CFBAmount = styled.div`
  font-size: 13px;
  color: #877272;
  padding: 30px 0 20px 0;
  float: left;
  font-weight: bold;
`

export const CFBAmountColor = styled.span`
  color: #006633;
`

export const CFBTotal = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #444;
  padding: 20px 0 30px 0;
  float: right;
`

// 주문하기 버튼
export const CFButton= styled.button`
  height: 70px;
  background-color: #006633;
  border-radius: 40px;
  width: 80%;
  margin: 20px auto 0;
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

export const CFButtonNo= styled.button`
  height: 70px;
  background-color: #c3c3c3;
  border-radius: 40px;
  width: 80%;
  margin: 20px auto 0;
  text-align: center;
  color: #666;
  font-weight: bold;
  border: none;
  font-size: 20px;
`


// 상품
export const CGoodsBox = styled.div`
  box-sizing: border-box;
  width: 50%;
  right: 0;
  margin-left: 0;
  position: absolute;
  top: 0;
`

export const CGoods = styled.a`
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
  border-bottom: 1px solid #ddd;
  text-decoration: none;
`

export const CGoodsG = styled.a`
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
  border-bottom: 3px solid #006633;
  text-decoration: none;
`

// 상품 박스
export const GBoxs = styled.div`
  width: 100%;
  position: relative;
  top: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const GBox = styled.div`
  margin: 0 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const GBTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #444;
  padding: 40px 0 10px 0;
  float: left;
`

export const GBText = styled.div`
  font-weight: bold;
  font-size: 13px;
  color: #9E9E9E;
`

export const GBButton= styled.button`
  height: 50px;
  background-color: #006633;
  border-radius: 40px;
  width: 200px;
  text-align: center;
  color: white;
  font-weight: bold;
  border: none;
  font-size: 18px;
  float: left;
  margin-top: 15px;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

export const GBImg = styled.div`
  background: url(${CNoCart}) center no-repeat;
  background-size: cover;
  margin: 0 auto;
  width: 600px;
  height: 600px;
`