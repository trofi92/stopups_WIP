import {
  NLUl,
  NLULi,
  NLULiP,
} from "../../../../../styled/HeaderModal";
import { Link } from "react-router-dom";

export const CInner3 = () => {
  return (
    <>
      <NLUl>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>ABOUT</NLULiP>
          </Link>
        </NLULi>
        <NLULi>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <NLULiP>RESERVE MAGAZINE</NLULiP>
          </Link>
        </NLULi>
      </NLUl>
    </>
  );
};
