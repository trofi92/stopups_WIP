import React from "react";

/**
 * 변경내용을 지속적으로 감지하되 요청의 횟수를 제한하고 싶을때 사용할 것
 * @param val{string}
 * 디바운싱이 적용될 값. 일반적으로 onChange의 값을 저장하는 state의 value
 * @param delay{number}
 * setTimeout의 실행주기에 해당하는 값을 입력, 밀리세컨드 단위
 */

export const useDebounce = (val, delay) => {
  const [debounceVal, setDebounceVal] = React.useState(val);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceVal(val);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [val]);

  return debounceVal;
};
