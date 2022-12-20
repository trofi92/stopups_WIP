import styled from "styled-components";
import MIIcon from "../../image/MyInfo/MIIcon.png";

// 전체 박스
export const MIBox = styled.div`
  background-size: cover;
  width: 100%;
  height: 1800px;
  margin-top: 60px;
`;

export const MIDiv = styled.div`
  background: #fff;
  padding: 20px 20px;
  position: relative;

  :last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

export const MIEmailInput = styled.p`
  background: #f4f4f2;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 14px;
  padding: 20px;
  margin: 0;
  width: 528px;
  height: 47px;
  line-height: 5px;
`;

export const MIIcons = styled.i`
  background: url(${MIIcon}) 0 center no-repeat;
  background-size: 100% auto;
  content: "";
  cursor: pointer;
  display: inline-block;
  height: 26px;
  margin-top: -2px;
  vertical-align: middle;
  width: 26px;
  padding: 0;
`;

export const MIPhoneDiv = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;

  :after {
    clear: both;
    content: "";
    display: block;
  }

  :last-child {
    margin-top: 10px;
  }
`;

export const MIPhoneInput = styled.input`
  background: #f4f4f2;
  border: 1px solid #ddd;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 14px;
  padding: 20px;
  margin: 0;
  width: 400.19px;
  height: 47px;
  line-height: 5px;
  float: left;
`;

export const MIPhoneA = styled.p`
  background: #006633;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  float: left;
  line-height: 46px;
  margin: 0 0 0 2%;
  text-align: center;
  width: 22%;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export const MIIconsPhone = styled.i`
  background: url(${MIIcon}) 0 center no-repeat;
  background-size: 100% auto;
  content: "";
  cursor: pointer;
  display: inline-block;
  height: 26px;
  margin-top: 10px;
  margin-left: 2%;
  vertical-align: middle;
  width: 26px;
  padding: 0;
`;

export const MINIckSection = styled.section`
  margin: 20px 20px 30px 20px;
  position: relative;
  overflow: hidden;
  padding: 3px 0;
  display: block;
`;

export const MINSH5 = styled.h5`
  color: #222;
  display: block;
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 0;
`;

export const MINSAgree = styled.span`
  position: absolute;
  display: block;
  width: 26px;
  right: 8px;
  top: 0;
`;

// 닉네임 이용약관 동의 버튼
export const MINSAgreeInput = styled.input`
  appearance: none;
  width: 28px;
  height: 28px;
  background: #c1c1c1;
  border-radius: 50%;

  :after {
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 7px;
    position: absolute;
    top: 9px;
    transform: rotate(-45deg);
    width: 12px;
  }

  &:checked {
    background: #006633;
  }
`;

export const MINAgreeBox = styled.div`
  background: #f7f7f7;
  box-sizing: border-box;
  color: #666 !important;
  height: 170px;
  width: 100%;
  padding: 20px 2%;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const MINABDiv = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
  outline: none;
  direction: ltr;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

export const MINAInner = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin-right: 30px;
  overflow: hidden;
  width: auto;
  height: auto;
  padding: 0;
  vertical-align: baseline;
`;

export const NINInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-block;
  max-width: 530px;
  padding: 15px;
  width: 100%;
  background: #f4f4f2;
  color: #222222;
`;

// 회원탈퇴 버튼
export const MIUnsubscribe = styled.button`
  margin: 160px auto;
  width: 489px;
  height: 38px;
  background: #e2c383;
  border: 1px solid #bb9f65;
  text-align: center;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  color: #222;
  display: block;
  line-height: 38px;
`;
