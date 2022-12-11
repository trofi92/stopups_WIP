import styled from "styled-components";

export const PBox = styled.div`
  background-size: cover;
  width: 100%;
  height: 650px;
  margin-top: 60px;
`

export const PSection = styled.section`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  max-width: 570px;
  margin: 0 auto 30px;
  position: relative;
  background: #fff;
`

export const PSectionDiv = styled.div`
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 20px 20px;
  height: 280px;
  position: relative;
  
  :last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`

export const PInputBox = styled.div`
  border: 0 !important;
  background: #fff;
  padding: 20px 0;
  position: relative;
`

export const PInputPhone = styled.input`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-block;
  max-width: 530px;
  padding: 15px;
  width: 80%;
  margin-bottom: 10px;
  vertical-align: middle;
  float: left;
  margin-right: 10px;
`

export const PInputNumber = styled.input`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-block;
  max-width: 530px;
  padding: 15px;
  width: 65%;
  margin-bottom: 10px;
  vertical-align: middle;
  float: left;
  margin-right: 10px;
`

// 휴대폰 번호 인증 버튼
export const PPhoneButton = styled.button`
  font-size: 15px;
  height: 47.78px;
  line-height: 47.78px;
  margin: 0;
  width: 15%;
  background: #222;
  border-radius: 3px;
  color: #fff;
  display: block;
  font-weight: bold;
  text-align: center;
`

// 로그인시 이용 가능합니다 페이지 버튼
export const PCancelButton = styled.button`
  font-size: 15px;
  height: 47.78px;
  line-height: 47.78px;
  margin: 0;
  width: 15%;
  background: #666;
  border-radius: 3px;
  color: #fff;
  display: block;
  font-weight: bold;
  text-align: center;
  float: left;
`

export const PConfirmButton = styled.button`
  font-size: 15px;
  height: 47.78px;
  line-height: 47.78px;
  width: 15%;
  background: #222;
  border-radius: 3px;
  color: #fff;
  display: block;
  font-weight: bold;
  text-align: center;
  float: left;
  margin: 0 0 0 10px;
`