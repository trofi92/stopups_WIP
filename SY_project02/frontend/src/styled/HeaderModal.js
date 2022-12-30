import styled from "styled-components";
import HMExit from "../image/Header/HMExit.png"

export const HM = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
`

// 헤더 모달 뒷배경
export const HMBg = styled.div`
  background: #000;
  height: 100%;
  opacity: 0.7;
  position: fixed;
  top: 0;
  width: 800px;
  z-index: 2000;
  margin: 0 auto;
`

// 헤더 모달 전체 박스
export const HMBox = styled.div`
  background: #111;
  height: 100%;
  padding-bottom: 30px;
  position: fixed;
  top: 0;
  width: 560px;
  z-index: 2001;
  margin-left: 240px;

  &::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    border-right: 6px;
    background: #999;
  }
`
export const HMBInner = styled.div`
  height: 100%;
  overflow: auto;
`

// 닫기 버튼
export const HMBIAside = styled.aside`
  height: 30px;
  left: -58px;
  position: absolute;
  top: 47px;
  width: 30px;
  z-index: 100;
`

export const HMBIAsideP = styled.p`
  background: url(${HMExit});
  display: block;
  height: 100%;
  overflow: hidden;
  text-indent: -20000px;
  width: 100%;
  margin: 0;
  cursor: pointer;
`

// 검색
export const HMSearch = styled.div`
  background: #2d2926;
  border-bottom: 1px solid #222;
  height: 111px;
  position: relative;
  width: 100%;
`

export const HMSInner = styled.div`
  height: 50px;
  left: 50%;
  margin-left: -228px;
  position: absolute;
  top: 30px;
  width: 456px;
`

export const HMSIInput = styled.input`
  padding: 0;
  border: 1px solid #e3e1d2;
  border-radius: 3px;
  float: left;
  height: 48px;
  width: 313px;
`

export const HMSIP = styled.p`
  background: #666;
  border-radius: 3px;
  color: #fff;
  float: right;
  font-size: 24px;
  font-weight: normal;
  height: 50px;
  line-height: 50px;
  text-align: center;
  width: 125px;
  margin: 0;
  cursor: pointer;
`

// nav
export const Nav = styled.nav`
  display: block;
`

export const NUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const NLiFirstTitle = styled.li`
  display: list-item;
  background: #2d2926;
  border-bottom: 1px solid #222;
  font-size: 28px;
  font-weight: normal;
  line-height: 76px;
  text-indent: 20px;
  cursor: pointer;
`

export const NLiTitle = styled.li`
  display: list-item;
  border-bottom: 1px solid #222;
  font-size: 28px;
  font-weight: normal;
  line-height: 76px;
  text-indent: 20px;
  cursor: pointer;
`

export const NLiTitleP = styled.p`
  color: #fff;
  display: block;
  height: 76px;
  position: relative;
  width: 100%;
  margin: 0;
  
  :hover {
    text-decoration: underline;
  }
`

export const NLi = styled.li`
  background: #181818;
  border-bottom: 1px solid #222;
  font-size: 24px;
  font-weight: normal;
  line-height: 76px;
  text-indent: 35px;
  cursor: pointer;
`

export const NLiP = styled.p`
  color: #fff;
  display: block;
  height: 76px;
  position: relative;
  width: 100%;
  margin: 0;
  
  :hover {
    text-decoration: underline;
  }
`

export const NLUl = styled.ul`
  list-style: none;
  padding: 0;
`

export const NLULi = styled.li`
  background: #222222;
  border-bottom: none;
  font-size: 18px;
  font-weight: normal;
  line-height: 50px;
  text-indent: 50px;
`

export const NLULiP = styled.p`
  margin: 0;
  padding: 0;
  font-size: 100%;
  text-decoration: none;
  vertical-align: baseline;
  color: #999;
  background: transparent;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`