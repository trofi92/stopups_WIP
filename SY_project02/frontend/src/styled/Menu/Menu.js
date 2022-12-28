import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import CChecked from "../../image/Cart/CChecked.png";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  height: 100%;
  width: 800px;
  margin: 0;
  box-sizing: border-box;
  border: 0;
  font-size: 100%;
  margin-top: 60px;
`;

export const ItemTitleBox = styled.div`
  margin: 0 15.703px;
`;

export const ItemTitle = styled.div`
  width: 800px;
  h1 {
    font-weight: 600;
    font-size: 30px;
  }

  h2 {
    font-size: 28px;
  }
`;

export const MainInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 716px;
  height: 60px;
  border: 1px solid #ddd;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  font-weight: 700;
  p,
  img {
    font-size: 18px;
    padding-bottom: 30px;
  }
`;
export const MainInnerCheckBox = styled.div`
  height: 50px;
  background-color: blue;
`;
export const FirstContainer = styled.div`
  background-color: #fff;
  height: ${(props) => props.height + "px"};
  /* ${(props) => props.width + "px"} */

  width: 707px;
  overflow: hidden;
  padding: 30px 30px 0 30px;
  position: relative;
  margin-top: 15px;
  margin-bottom: 33px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const CategoryBox = styled.div`
  background-color: #fff;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  padding: 20px 0;
  position: relative;
  font-family: "nbg", "맑은 고딕", HelveticaNeue, DroidSans,
    Sans-serif, Helvetica;
`;

export const ButtonBoxCotainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  padding-bottom: 18px;
  border-bottom: 2px solid #333;
`;

export const CheckBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  top: 0;
  left: 0;
  overflow: hidden;
  width: auto;
  height: auto;

  display: ${(props) => props.none};

  label {
    position: relative;
    font-size: 14px;
    color: #3f4141;
    cursor: pointer;
    z-index: 4;
    margin-right: 30px;
  }
  input {
    appearance: none;
    width: 12px;
    height: 12px;
    border: 1px solid #cac5c1;
    margin-top: 3px;
    margin-right: 10px;
    &:checked {
      background: url(${CChecked});
      background-size: 12px;
    }
  }
`;
export const CheckBoxContainer = styled.div`
  display: flex;
  margin-top: 5px;

  align-items: center;
  input {
  }
`;

export const SmallBoxContanier = styled.div`
  width: 768px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin-bottom: 11px;
  z-index: 6;
  height: 40px;
`;

export const SmallBox = styled.div`
  background: #fff url(${(props) => props.url}) 9px center no-repeat;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width + "px"};
  height: 26px;
  line-height: 26px;
  font-size: 12px;
  border-radius: 3px;
  padding: 0 9px 0 25px;
  margin-right: 15px;
  margin-top: 10px;
  cursor: pointer;
  border: 1px solid #ddd;

  :hover {
    text-decoration: underline;
  }
`;

export const ClassificationList = styled.div`
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
  width: 236px;
  padding-right: 10px;
  height: 38px;
  border: 1px solid #ddd;
  border-radius: 3px;

  text-indent: 10px;
  text-align: left;
  font-size: 14px;
  color: #444;

  z-index: -2;
  accent-color: hsl(228, 4%, 24%);

  img {
    width: 21px;
    height: 21px;

    margin-top: 2px;
  }
  label {
    text-indent: 0;
  }
  span {
    margin-left: 5px;
    text-align: left;
    line-height: 36px;
    height: 38px;
    font-size: 13px;
    color: #444;
  }
  input {
    margin-top: 3px;
    margin-right: 5px;
    margin-left: 10px;
    appearance: none;
    width: 12px;
    height: 12px;
    border: 1px solid #cac5c1;
    &:checked {
      background: url(${CChecked});
      background-size: 12px;
      border: 1px solid #006633;
    }
  }
`;
export const NewImage = styled.img`
  background: url("https://image.istarbucks.co.kr/common/img/menu/smark01.png")
    center no-repeat;
  height: 30px;
  width: 30px;
  border-color: white;
  background-size: cover;
  object-fit: cover;
`;
export const ClassificationBox = styled(ClassificationList)`
  background: url(//image.istarbucks.co.kr/common/img/util/sbox_arrow_down.png)
    96% center no-repeat #fff;
  width: 236px;
  border-radius: 3px;
`;

export const ClassificationContainer = styled.div`
  margin-left: auto;
  position: relative;
  overflow: ${(props) => props.size};
  height: 40px;
`;
export const ColorBox = styled.div`
  padding: 20px;
  background: #f4f4f2;
  margin-bottom: 20px;
  border-radius: 3px;
  overflow: hidden;
  width: 728px;
  height: 18px;
  margin-top: 10px;
  z-index: 5;
  display: flex;
  align-items: center;
  color: #222;

  img {
    width: 45px;
    height: 35.516px;
    margin-left: 15px;
    position: relative;
    top: 3px;
  }
  span {
    line-height: 18px;
    margin-left: 5px;
    font-size: 13px;
    color: #444;
    letter-spacing: -1px;
  }
`;

export const CardTest = styled.div`
  width: 768px;
  background-color: #2a12;
`;
export const CardContainer = styled.div`
  width: 233.609px;
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
`;

export const CardList = styled.div`
  width: 768px;
  margin-top: 10px;
  display: flex;
  margin-bottom: 40px;

  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 233.609px;
  height: 243.719px;
  background: #7bbce0 url(${(props) => props.url}) center no-repeat;
  background-size: cover;

  color: #fff;
`;
export const NewlimitedBox = styled.div`
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  color: #222;
  margin-top: 100px;
  width: 768px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardText = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: #444;
  height: 54px;

  text-align: center;
  word-break: normal;
`;
export const MenuContainer = styled.div``;

export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
export const TestDiv = styled.div`
  padding: 5px;
  box-sizing: border-box;
  width: 33px;
  height: 33px;
  margin-top: 10px;
  background: url("https://cdn.icon-icons.com/icons2/2385/PNG/64/drink_icon_144369.png")
    no-repeat center;
  background-size: cover;
  position: absolute;
  span {
    margin-left: 15px;
    margin-top: -10px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
  }
`;
export const TestDiv1 = styled.div`
  width: 50px;
  height: 50px;
`;
