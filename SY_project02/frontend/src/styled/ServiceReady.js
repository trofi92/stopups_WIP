import styled from "styled-components";
import SRImg from "../image/SRImg.png"

// 로그인 전체 박스
export const SRB = styled.div`
  width: 100%;
  height: 709.38px;
  margin-top: 60px;
`

// 로그인 정렬
export const SRBPosition = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 60px 0 50px;
`

// 로그인 안쪽 정렬
export const SRBInner = styled.div`
  background: url(${SRImg});
  margin: 0 auto;
  padding: 0;
  text-align: center;
  width: 800px;
  height: 500px;
`