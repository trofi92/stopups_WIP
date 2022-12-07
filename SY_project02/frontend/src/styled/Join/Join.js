import styled from "styled-components";
import Sally from "../../image/Sally.png"
import JSallyNick from "../../image/Join/JSallyNick.jpg"
import LIdCheck from "../../image/Login/LIdCheck.png"
import LIdChecked from "../../image/Login/LIdChecked.png"

// 회원가입 전체 박스
export const RB = styled.div`
  background-size: cover;
  width: 100%;
  height: 1950px;
  margin-top: 60px;
`

export const RFStrong = styled.strong`
  border: none;
  color: #000;
  display: block;
  font-size: 30px;
  font-weight: normal;
  margin: 0 0 30px 0;
  padding: 0;
  text-align: center;
`

// 회원가입 폼
export const RFSection = styled.section`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  max-width: 570px;
  margin: 0 auto 30px;
  position: relative;
`

export const RFSectionImg = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 30px 20px 0;
  width: 205px;
  height: 182px;
  background: url(${Sally}) 50% 100% no-repeat;
`

export const RFSectionP = styled.p`
  background: #fff;
  border-bottom: 1px solid #ddd;
  color: #666;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  padding: 30px 20px 30px;
  margin: 0;
`

export const RFSectionDiv = styled.div`
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 20px 20px;
  position: relative;
  
  :last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`

export const RFSectionStrong = styled.strong`
  color: #222;
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`

export const RFSectionSpan = styled.span`
  color: #006241;
`

export const RFSDInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-block;
  max-width: 530px;
  padding: 15px;
  width: 100%;
`

export const RFSDFigure = styled.figure`
  text-align: center;
  max-width: 570px;
  margin: 0 auto;
  background: url(${JSallyNick});
  height: 272.81px;
`
export const RFSDivP = styled.p`
  background: #edebe7;
  color: #666;
  line-height: 1.6;
  padding: 10px 0;
  text-align: center;
  margin: 0;
`
export const RFormP = styled.p`
  color: #666;
  line-height: 1.4;
  margin-bottom: 15px;
  font-size: 14px;
  margin-top: 0;
  letter-spacing: -1px;
  text-align: center;
`

// 회원가입 동의 체크박스
export const AgreeSpan = styled.span`
  position: absolute;
  display: block;
  width: 26px;
  right: 22px;
  top: 20px;
`

export const AgreeInput = styled.input`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 0;
  left: 0;
  padding: 0;
  border: 0 none;
  //background: #fff;
  cursor: pointer;
  appearance: none;
  outline: none;
  background: red;
`

export const AgreeLabel = styled.label`
  position: absolute;
  display: inline-block;
  width: 26px;
  height: 26px;
  line-height: 26px;
  background: #fff url(${LIdCheck}) 0 0 no-repeat;
  color: #3f4141;
  cursor: pointer;
  vertical-align: top;
  background-size: 26px;
  overflow: hidden;
  z-index: 4;
  appearance: none;
  outline: none;
  margin: 3px 3px 3px 4px;
`