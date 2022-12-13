import { NLi, NLiP } from "../../../../styled/HeaderModal";
import { Link } from "react-router-dom";
import { HMButton } from "../../../../styled/Button";
import { useState } from "react";
import { SInner1 } from "./StoreInner/SInner1";
import { SInner2 } from "./StoreInner/SInner2";

export const Store = () => {
  const [open1, setOpen1] = useState(false);
  const openToggle1 = () => {
    setOpen1(!open1);
  };

  const [open2, setOpen2] = useState(false);
  const openToggle2 = () => {
    setOpen2(!open2);
  };

  return (
    <>
      <NLi>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <NLiP>한눈에 보기</NLiP>
        </Link>
      </NLi>
      <NLi>
        <NLiP onClick={openToggle1}>
          매장 찾기
          <HMButton />
        </NLiP>
      </NLi>
      {open1 === true ? <SInner1 /> : null}
      <NLi>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <NLiP>드라이브 스루 매장</NLiP>
        </Link>
      </NLi>
      <NLi>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <NLiP>스타벅스 리저브 매장</NLiP>
        </Link>
      </NLi>
      <NLi>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <NLiP>커뮤니티 스토어 매장</NLiP>
        </Link>
      </NLi>
      <NLi>
        <NLiP onClick={openToggle2}>
          매장 이야기
          <HMButton />
        </NLiP>
      </NLi>
      {open2 === true ? <SInner2 /> : null}
    </>
  );
};
