import { NLi, NLiP } from "../../../../styled/HeaderModal";
import { Link } from "react-router-dom";
import { HMButton } from "../../../../styled/Button";
import { MInner1 } from "./MenuInner/MInner1";
import { useState } from "react";
import { MInner2 } from "./MenuInner/MInner2";

export const Menu = () => {
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
          음료
          <HMButton />
        </NLiP>
      </NLi>
      {open1 === true ? <MInner1 /> : null}
      <NLi>
        <NLiP onClick={openToggle2}>
          푸드
          <HMButton />
        </NLiP>
      </NLi>
      {open2 === true ? <MInner2 /> : null}
    </>
  );
};
