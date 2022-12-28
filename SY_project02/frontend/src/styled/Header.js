import styled from "styled-components";

export const HB = styled.div`
  margin: 0 auto;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

export const HPosition = styled.div`
  width: 800px;
  height: 69px;
  background: #f6f5ef;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  top: 0;
  z-index: 20;
  margin: 0 auto;
`;

export const HLogoBox = styled.h1`
  float: left;
  width: 45px;
  height: 45px;
  position: absolute;
  top: 13px;
  left: 10px;
  margin: 0;
`;

export const HLogo = styled.img`
  width: 45px;
  height: 45px;
`;

export const HNPosition = styled.nav`
  float: right;
  height: 70px;
  width: 305px;
  padding: 0;
`;
export const HNUl = styled.ul`
  list-style: none;
  margin: 0;
  //float: right;
  padding: 0;
`;
export const HNLi = styled.li`
  float: left;
  height: 60px;
  margin: 10px 0 0 1px;
  position: relative;
  width: 60px;

  :last-child {
    width: 51px;
  }
`;

export const HIconUser = styled.img`
  width: 25px;
  height: 30px;
  margin-left: 18px;
  margin-top: 14px;
  cursor: pointer;
`;

export const HIconSpot = styled.img`
  width: 24px;
  height: 32px;
  margin-left: 16px;
  margin-top: 12px;
  cursor: pointer;
`;

export const HIconCategory = styled.img`
  width: 28px;
  height: 26px;
  margin-left: 11px;
  margin-top: 15px;
  cursor: pointer;
`;
