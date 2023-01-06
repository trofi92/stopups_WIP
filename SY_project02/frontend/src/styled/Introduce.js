import styled from "styled-components";
import IntroHeader from "../image/Introduce/IntroHeader.jpg"

// Introduce 전체 박스
export const IBox = styled.div`
  width: 100%;
  margin: 61px 0 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  background: transparent;
`

export const IBTitle = styled.div`
  background: url(${IntroHeader}) no-repeat;
  background-position: -380px top;
  background-size: auto 100%;
`
