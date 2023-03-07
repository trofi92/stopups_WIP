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
    checkedItemHandler(
      target.parentNode,
      target.value,
      target.checked,
      target
    );

    setChecked(!bChecked);
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
          <label htmlFor={Category}> {Category}</label>
        </>
      )}
    </CheckBoxContainer>
  );
};
export default CheckboxLabels;
