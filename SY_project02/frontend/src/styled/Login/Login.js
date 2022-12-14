import styled, {css} from "styled-components";
import LoginBg from "../../image/Login/LoginBg.jpg"

// 로그인 전체 박스
export const LB = styled.div`
  background: url(${LoginBg}) center top no-repeat fixed #0a0807;
  background-size: cover;
  width: 100%;
  height: 709.38px;
  margin-top: 60px;
`

// 로그인 정렬
export const LFB = styled.div`
  width: 570px;
  margin: 0 auto;
  padding: 60px 0 50px;
`

// 로그인 안쪽 정렬
export const LFInner = styled.div`
  width: 570px;
  height: 865.16px;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
`

// 전체 폼 안쪽
export const LFFFieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`

export const LFFFStrong = styled.strong`
  border: none;
  color: #fff;
  display: block;
  font-size: 30px;
  font-weight: normal;
  margin: 0 0 30px 0;
  padding: 0;
  text-align: center;
`

// 로그인 폼
export const LFFFSection = styled.section`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  max-width: 570px;
  margin: 0 auto 30px;
  position: relative;
`

export const LFP = styled.section`
  background: #fff;
  border-bottom: 1px solid #ddd;
  color: #777;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  padding: 30px 20px 30px;
`

export const LEPSpan = styled.span`
  color: #006633 !important;
`

export const LEPBr = styled.br`
  display: none !important;
`

// input 박스
export const LFInputBox = styled.div`
  border: 0 !important;
  background: #fff;
  padding: 20px 20px;
  position: relative;
`

export const LFInput = styled.input`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-block;
  max-width: 530px;
  padding: 15px;
  width: 100%;
  margin-bottom: 10px;
  vertical-align: middle;
`

export const LFIdCheck = styled.span`
  display: block;
  margin-bottom: 20px;
`


// 로그인 아이디 저장 버튼
export const LFICInput = styled.input`
  visibility: hidden;
  ${({check}) =>
          check
                  ? css`
                    background-color: #66bb6a;
                    border-color: #66bb6a;

                    &:after {
                      opacity: 1;
                    }
                  `
                  : null}
`

export const LFICLabel = styled.label`
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  line-height: 26px;
  font-size: 16px;
  vertical-align: top;
  background-color: #fff;
  cursor: pointer;
  width: 28px;
  height: 28px;
  left: 20px;
  top: 135px;
  z-index: 4;
  margin-right: 5px;
  ${({check}) =>
          check
                  ? css`
                    background-color: #006633;
                    border-color: #006633;

                    &:after {
                      border: 3px solid #fff;
                      border-top: none;
                      border-right: none;
                      content: "";
                      height: 6px;
                      left: 7px;
                      position: absolute;
                      top: 8px;
                      transform: rotate(-45deg);
                      width: 12px;
                    }
                  `
                  : css`
                    background-color: #C1C1C1 !important;

                    &:after {
                      opacity: 1;
                      border: 3px solid #fff;
                      border-top: none;
                      border-right: none;
                      content: "";
                      height: 6px;
                      left: 7px;
                      position: absolute;
                      top: 8px;
                      transform: rotate(-45deg);
                      width: 12px;
                    }
                  `}
`

export const LFICSpan = styled.span`
  color: #3f4141;
  font-size: 16px;
  padding-left: 20px;
`

export const LFText = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin-top: 15px;
  margin-bottom: 0;
  color: #006633 !important;
  word-spacing: -1px;
`

// button 박스
export const LFButtonBox = styled.div`
  background: #fff;
  box-sizing: border-box;
  max-width: 570px;
`

export const LFBUl = styled.ul`
  display: table;
  text-align: center;
  width: 100%;
  margin: 0;
  list-style: none;
  padding: 0;
`

export const LFBLi = styled.li`
  box-sizing: border-box;
  float: left;
  position: relative;
  vertical-align: top;
  width: 33.3%;

  ::after {
    border-right: 1px solid #ddd;
    color: #666;
    content: "";
    height: 22px;
    margin-top: -11px;
    position: absolute;
    right: -1px;
    top: 50%;
  }
`

export const LFBListP = styled.p`
  margin: 0;
  color: #666;
  display: block;
  font-size: 16px;
  height: 100%;
  line-height: 54px;
  width: 100%;
`
