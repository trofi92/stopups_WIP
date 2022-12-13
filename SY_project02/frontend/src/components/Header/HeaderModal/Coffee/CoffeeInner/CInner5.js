import {
  NLUl,
  NLULi,
  NLULiP,
} from "../../../../../styled/HeaderModal";
import { Link } from "react-router-dom";

export const CInner5 = () => {
  return (
    <>
      <NLUl>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>커피 프레스</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>푸어 오버</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>아이스 푸어 오버</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>커피 메이커</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>리저브를 매장에서 다양하게 즐기는 법</NLULiP>
          </Link>
        </NLULi>
      </NLUl>
    </>
  );
};
