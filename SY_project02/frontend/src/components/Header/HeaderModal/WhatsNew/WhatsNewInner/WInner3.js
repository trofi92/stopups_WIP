import {
  NLUl,
  NLULi,
  NLULiP,
} from "../../../../../styled/HeaderModal";
import { Link } from "react-router-dom";

export const WInner3 = () => {
  return (
    <>
      <NLUl>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>일반 매장</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>신규 매장</NLULiP>
          </Link>
        </NLULi>
      </NLUl>
    </>
  );
};
