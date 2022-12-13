import {
  NLUl,
  NLULi,
  NLULiP,
} from "../../../../../styled/HeaderModal";
import { Link } from "react-router-dom";

export const MSInner2 = () => {
  return (
    <>
      <NLUl>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>보유 카드</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>카드 등록</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>카드 충전</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>분신실고/잔액이전</NLULiP>
          </Link>
        </NLULi>
      </NLUl>
    </>
  );
};
