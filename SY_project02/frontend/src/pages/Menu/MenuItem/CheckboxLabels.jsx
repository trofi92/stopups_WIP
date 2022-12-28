import * as React from "react";
import { useState } from "react";
import { CheckBoxContainer } from "../../../styled/Menu/Menu";

const CheckboxLabels = ({
  checkedItemHandler,
  Category,
  params,
  checkedItems,
}) => {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    // p1.delete(Category);

    checkedItemHandler(target.parentNode, target.value, target.checked, target);

    setChecked(!bChecked);

    console.log(checkedItems, "styled", target.checked);
  };
  return (
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
};
export default CheckboxLabels;
