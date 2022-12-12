import styled from "styled-components";
import MBackground from "../image/MBackground.png"

// 지도 전체 박스
export const MBox = styled.div`
  background-size: cover;
  width: 100%;
  height: 100%;
  margin-top: 60px;
`
// 지도
export const MSection = styled.section`
  display: block;
  position: relative;
  overflow: hidden;
  background: url(${MBackground});
  height: 550px;
  width: 100%;
`

// 매장에서 진행되는 이벤트
export const MBSection = styled.section`
  height: 350px;
  margin: 30px auto 70px;
  width: 530px;
  position: relative;
  display: block;
`

export const MBSP = styled.p`
  font-size: 18px;
  color: #222;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 0;
  vertical-align: baseline;
`

export const MBSDiv = styled.div`
  max-width: 580px;
  position: relative;
  margin: 0 auto 60px;
  padding: 0;
  vertical-align: baseline;
`

export const MSDDiv = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  height: 360px;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
`

export const MSDDLi = styled.div`
  float: left;
  list-style: none;
  position: relative;
  width: 255px;
  margin-right: 20px;
  height: 315px;
`

export const MSDDLImg = styled.img`
  border-radius: 3px;
  text-align: center;
  margin: 0 auto;
  width: 255px;
  height: 255px;
  display: block;
  vertical-align: top;
`
export const MSDDLP = styled.p`
  bottom: 0;
  color: #444;
  font-size: 14px;
  line-height: 20px;
  position: absolute;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
`

export const MSDDLPSpan = styled.span`
  color: #666;
  font-size: 12px;
  margin: 0;
  padding: 0;
`

// 이전, 다음 버튼
export const MSButtonBox = styled.div`
  max-width: 580px;
  position: relative;
  margin: 0 auto 60px;
  padding: 0;
  vertical-align: baseline;
`