import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import * as React from "react";
import { useState, useEffect } from "react";

export const Test = styled.div``;

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

  //
`;
export const ItemTitle = styled.div`
  width: 800px;
  h1 {
    font-size: 30px;
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

  width: 716px;
  overflow: hidden;
  padding: 30px 30px 0 30px;
  position: relative;
  margin-bottom: 40px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const CategoryBox = styled.div`
  background-color: #fff;
  display: flex;
  align-items: baseline;
  flex-direction: column;
  padding: 30px 0;
  position: relative;
  font-family: "nbg", "맑은 고딕", HelveticaNeue, DroidSans, Sans-serif,
    Helvetica;
`;
export const ButtonBoxCotainer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
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
    margin-right: 7px;
    z-index: 4;
  }
  input {
    margin-right: 7px;
    width: 15px;
    height: 14px;
    cursor: pointer;

    margin-bottom: 1.5px;
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
  height: 50px;
  margin-bottom: 11px;
  z-index: 6;
`;
export const SmallBox = styled.div`
  background: #fff url(${(props) => props.url}) 9px center no-repeat;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  width: ${(props) => props.width + "px"};
  height: 28px;
  line-height: 26px;
  font-size: 12px;
  border: 1px solid #666;
  border-radius: 3px;
  padding: 0 9px 0 25px;
  margin-right: 15px;
  margin-top: 10px;

  text-decoration: ${(props) => props.underline};
`;
export const ClassificationList = styled.div`
  display: flex;
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
  width: 255px;
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
    text-indent: 0px;
  }
  span {
  }
  input {
    margin-top: 5px;
    margin-right: 5px;
    margin-left: 10px;
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
`;
export const ClassificationContainer = styled.div`
  margin-left: auto;
  position: relative;
  overflow: ${(props) => props.size};
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
  background-color: #f4f4f2;
  z-index: 5;
  display: flex;
  align-items: center;

  img {
    width: 45px;
    height: 35.516px;
    margin-right: 5px;
    margin-left: 5px;
  }
  span {
    line-height: 18px;
    margin-left: 5px;
    font-size: 13px;
    color: #444444;
    letter-spacing: -1px;
  }
`;

export const CardTest = styled.div`
  width: 768px;
  background-color: #2a12;
`;
export const CardContainer = styled.div`
  width: 225px;
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

  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: 225px;
  height: 248px;
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
  margin-top: 10px;
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

export function CheckboxLabels({
  checkedItemHandler,
  children,
  Category,
  params,
  checkedItems,
}) {
  const [bChecked, setChecked] = useState(false);

  const categoryParams = params.Category;

  const checkHandler = ({ target }) => {
    // p1.delete(Category);

    checkedItemHandler(target.parentNode, target.value, target.checked, target);

    setChecked(!bChecked);

    console.log(checkedItems, "styled", target.checked);
  };
  return (
    // params.Category === Category
    //p1.has(Category)
    <CheckBoxContainer>
      {params.Category === Category ? (
        <>
          <input
            type="checkbox"
            checked={!bChecked}
            value={Category}
            onChange={(e) => checkHandler(e)}
            id={Category}
          />

          <label htmlFor={Category}> {Category}</label>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={bChecked}
            value={Category}
            onChange={(e) => checkHandler(e)}
            id={Category}
          />
          {/* params 값이 같은 체크박스는 체크가 자동으로 클릭되어 있게 만들기....
          이 로직만 짜면 되는게 아니라 set에도 params 가 들어오면 set 에 추가하게 해줘야 한다.   여기서 문제점 만약 카테고리 ,테마 둘 중 하나를 누르면 리랜더링이 일어나서  체크박스가
          뒤죽 박죽이 되므로 이 문제를 해결해야함*/}

          <label htmlFor={Category}> {Category}</label>
        </>
      )}
    </CheckBoxContainer>
  );
}
