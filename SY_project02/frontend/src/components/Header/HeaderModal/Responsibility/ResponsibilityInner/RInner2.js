import {
  NLUl,
  NLULi,
  NLULiP,
} from "../../../../../styled/HeaderModal";
import { Link } from "react-router-dom";

export const RInner2 = () => {
  return (
    <>
      <NLUl>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>친환경 활동</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>일회용 컵 없는 매장</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>커피 원두 재활용</NLULiP>
          </Link>
        </NLULi>
      </NLUl>
    </>
  );
};
