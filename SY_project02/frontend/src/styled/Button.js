import styled from "styled-components";
import HMTButton1 from "../image/Header/HMTButton2.png"
import HMTButton2 from "../image/Header/HMTButton1.png"
import HMButton1 from "../image/Header/HMButton1.png"
import HMButton2 from "../image/Header/HMButton2.png"

// 로그인, 회원가입 버튼
export const LJButton = styled.button`
  margin: 0 auto;
  width: 528px;
  border: none;
  background: #006633;
  text-align: center;
  border-radius: 3px;
  color: #fff;
  font-size: 24px;
  display: block;
  line-height: 65px;
`

// 로그인시 이용 가능합니다 페이지 버튼
export const LPIButtonL = styled.p`
  font-size: 20px;
  height: 65px;
  line-height: 65px;
  margin: 0;
  width: 100%;
  background: #666;
  border-radius: 3px;
  color: #fff;
  display: block;
  font-weight: bold;
  text-align: center;
`

export const LPIButtonR = styled.p`
  font-size: 20px;
  height: 65px;
  line-height: 65px;
  margin: 0;
  width: 100%;
  background: #222;
  border-radius: 3px;
  color: #fff;
  display: block;
  font-weight: bold;
  text-align: center;
`


// 모달 타이틀 버튼
export const HMTButton = styled.span`
  background: url(${HMTButton2}) no-repeat;
  height: 12px;
  margin-top: -6px;
  right: 40px;
  position: absolute;
  top: 50%;
  width: 21px;
  display: block;
`

// 모달 안쪽 버튼
export const HMButton = styled.span`
  background: url(${HMButton1}) no-repeat;
  height: 12px;
  margin-top: -6px;
  right: 40px;
  position: absolute;
  top: 50%;
  width: 21px;
  display: block;
`
// 푸터 버튼
export const FBigButton = styled.p`
  display: block;
  color: #ffffff;
  font-size: 24px;
  border: 2px solid #ffffff;
  border-radius: 3px;
  text-align: center;
  padding: 10% 3%;
`

export const FSmallButton = styled.p`
  background: none;
  border: 2px solid #fff;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  margin: 10px 2px 0 3px;
  width: 90px;
  height: 30px;
  line-height: 30px;
`

// 자세히 보기 버튼
export const SeeDetails = styled.p`
  width: 108px;
  color: #fff;
  margin: 0 auto;
  border: 2px solid #fff;
  height: 100%;
  font-size: 15px;
  line-height: 34px;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  
  :hover {
    text-decoration: underline;
    color: black;
    background: white;
    -webkit-transition: background-color .7s, color .7s;
  }
`