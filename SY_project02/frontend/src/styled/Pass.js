import styled from "styled-components";

export const PBox = styled.div`
  background-size: cover;
  width: 100%;
  height: 650px;
  margin-top: 60px;
`;

export const LPWBox = styled.div`
  background-size: cover;
  width: 100%;
  margin-top: 60px;
  height: 750px;
`;

export const PSection = styled.section`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  max-width: 570px;
  margin: 0 auto 30px;
  position: relative;
  background: #fff;
`;

export const PSectionDiv = styled.div`
  background: #fff;
  padding: 20px 20px;
  height: 100%;
  position: relative;

  :last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export const PInputBox = styled.div`
  border: 0 !important;
  background: #fff;
  padding: 20px 0;
  position: relative;

  :after {
    content: "";
    display: block;
    clear: both;
  }
`;

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
`;

export const PInputEmail = styled.input`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-block;
  max-width: 530px;
  padding: 15px;
  width: 100%;
  margin-bottom: 10px;
  vertical-align: middle;
  float: left;
  margin-right: 10px;
`;

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
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

// 로그인 시 이용 가능합니다 페이지 버튼
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
`;

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
`;


// 비밀번호로 인증
export const PPBox = styled.div`
  background-size: cover;
  width: 100%;
  height: 480px;
  margin-top: 60px;
`;