import styled from "styled-components";

// 전체 박스
export const LFPBox = styled.div`
  background-size: cover;
  width: 100%;
  height: 1300px;
  margin-top: 60px;
`;

// 새 비밀번호
export const LFPDiv = styled.div`
  padding: 30px 20px;
  display: block;
  margin: 0;
  border: 0;
  vertical-align: baseline;
`;

export const LFPDStrong = styled.strong`
  display: block;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: bold;
  padding: 0;
  vertical-align: baseline;
`;

export const LFPDInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  padding: 20px 20px 20px 0;
  text-indent: 20px;
  width: 100%;
  max-width: 520px;
`;

// 비밀번호 양식 틀릴 경우
export const LFPDP = styled.p`
  color: rgb(237, 28, 36);
  font-size: 14px;
  line-height: 1.4;
  margin-top: 15px;
  padding: 0;
  vertical-align: baseline;
  display: none;
`;

// 안전한 비밀번호 만들기
export const LFPSafe = styled.div`
  background: #f4f4f2;
  padding: 30px 20px;
  margin: 0;
  vertical-align: baseline;
`;

export const LEPSStrong = styled.strong`
  display: block;
  margin-bottom: 20px;
  padding: 0;
  vertical-align: baseline;
`;

export const LEPSUl = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`;

export const LEPSLi = styled.li`
  color: #666;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  position: relative;
  padding-left: 15px;
  list-style: none;

  :before {
    background: #999;
    border-radius: 100%;
    content: "";
    height: 6px;
    left: 0;
    position: absolute;
    top: 8px;
    width: 6px;
  }
`;

// 취소, 확인 버튼
export const LEPBtnBox = styled.div`
  height: 75px;
  margin-top: 25px;
  width: 100%;
  padding: 0;
  vertical-align: baseline;
`;

// 취소
export const LEPBtn1 = styled.li`
  background: #666;
  border-radius: 3px;
  width: 48%;
  float: left;
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const LEPBtn1P = styled.p`
  color: #fff;
  display: block;
  font-size: 24px;
  height: 75px;
  line-height: 75px;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

// 확인
export const LEPBtn2 = styled.li`
  background: #222;
  margin-left: 4%;
  border-radius: 3px;
  width: 48%;
  float: left;
  list-style: none;
  padding: 0;
  cursor: pointer;
`;
