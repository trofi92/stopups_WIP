import styled from "styled-components";

// 전체 박스
export const MIPBox = styled.div`
  background-size: cover;
  width: 100%;
  height: 1100px;
  margin-top: 60px;
`

export const MIPDiv = styled.div`
  background: #fff;
  padding: 20px 20px;
  position: relative;
  border-bottom: 1px solid #ddd;
  
  :last-child {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`


export const RFSDInputMIP = styled.input`
  border: 1px solid #ddd;
  border-radius: 3px;
  box-sizing: border-box;
  display: inline-block;
  max-width: 530px;
  padding: 15px;
  width: 100%;
  margin-top: 10px;
`
