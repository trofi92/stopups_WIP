import styled, {css} from "styled-components";
import Sally from "../../image/Sally.png"
import JSallyNick from "../../image/Join/JSallyNick.jpg"

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

export const RFSectionDiv = styled.section`
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

// 홈페이지 이용약관 동의 버튼
export const AIH = styled.input`
  appearance: none;
  width: 30px;
  height: 30px;
  background: #C1C1C1;
  border-radius: 50%;
  
  :after {
    border: 3px solid #fff;
    border-top: none;
    border-right: none;
    content: "";
    height: 6px;
    left: 8px;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 12px;
  }

  &:checked {
    background: #006633;
  }
`

// export const ALH = styled.label`
//   background-color: #fff;
//   border: 1px solid #ccc;
//   border-radius: 50%;
//   cursor: pointer;
//   width: 28px;
//   height: 28px;
//   position: absolute;
//   left: 0;
//   top: 0;
//   ${({checkedHome}) =>
//           checkedHome
//                   ? css`
//                     background-color: #006633;
//                     border-color: #006633;
//
//                     &:after {
//                       border: 3px solid #fff;
//                       border-top: none;
//                       border-right: none;
//                       content: "";
//                       height: 6px;
//                       left: 7px;
//                       position: absolute;
//                       top: 8px;
//                       transform: rotate(-45deg);
//                       width: 12px;
//                     }
//                   `
//                   : css`
//                     background-color: #C1C1C1 !important;
//
//                     &:after {
//                       opacity: 1;
//                       border: 3px solid #fff;
//                       border-top: none;
//                       border-right: none;
//                       content: "";
//                       height: 6px;
//                       left: 7px;
//                       position: absolute;
//                       top: 8px;
//                       transform: rotate(-45deg);
//                       width: 12px;
//                     }
//                   `}
// `

// 개인정보 수집 및 이용동의 버튼
export const AIU = styled.input`
  visibility: hidden;
  ${({checkedUser}) =>
          checkedUser
                  ? css`
                    background-color: #66bb6a;
                    border-color: #66bb6a;

                    &:after {
                      opacity: 1;
                    }
                  `
                  : null}
`

export const ALU = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0;
  top: 0;
  ${({checkedUser}) =>
          checkedUser
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

// 닉네임 동의 버튼
export const AIN = styled.input`
  visibility: hidden;
  ${({checkedNick}) =>
          checkedNick
                  ? css`
                    background-color: #66bb6a;
                    border-color: #66bb6a;

                    &:after {
                      opacity: 1;
                    }
                  `
                  : null}
`

export const ALN = styled.label`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  width: 28px;
  height: 28px;
  position: absolute;
  left: 0;
  top: 0;
  ${({checkedNick}) =>
          checkedNick
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
